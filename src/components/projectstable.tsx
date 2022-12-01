import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FaLink, FaTimes } from "react-icons/fa";

interface ProjectType {
  name: string;
  developer: string;
  repo: string;
  link: string;
  categories: string[];
}

const columns: ColumnsType<ProjectType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (i, { link, repo }) =>
      link ? (
        <a href={link} target="_blank">
          {i}
        </a>
      ) : repo ? (
        <a href={repo} target="_blank">
          {i}
        </a>
      ) : (
        i
      ),
    sorter: (a, b) => a.name.localeCompare(b.name),
    defaultSortOrder: "ascend",
  },
  {
    title: "Developer",
    dataIndex: "developer",
    key: "developer",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Open-Source",
    dataIndex: "repo",
    key: "repo",
    render: (i) =>
      i ? (
        <a href={i} target="_blank">
          <FaLink />
        </a>
      ) : (
        <FaTimes />
      ),
    filters: [
      { text: "Yes", value: true },
      { text: "No", value: false },
    ],
    onFilter: (value, record) =>
      value ? record.repo.length > 0 : record.repo.length === 0,
    filterMultiple: false,
  },
  {
    title: "Categories",
    key: "categories",
    dataIndex: "categories",
    render: (_, { categories }) => (
      <>
        {categories.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </>
    ),
  },
];

const ProjectsTable: React.FC = () => {
  console.log(ProjectsData());
  return <Table columns={columns} dataSource={ProjectsData()} />;
};
export default ProjectsTable;

const ProjectsData = () => {
  const { allProjectsJson } = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            name
            developer
            repo
            link
            categories
          }
        }
      }
    }
  `);

  // map edges to array of projects
  let projects: ProjectType[] = allProjectsJson.edges.map((edge: any) => ({
    name: edge.node.name,
    developer: edge.node.developer,
    repo: edge.node.repo,
    link: edge.node.link,
    categories: edge.node.categories,
  }));
  return projects;
};
