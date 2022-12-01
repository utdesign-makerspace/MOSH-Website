import React from "react";
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

const data: ProjectType[] = [
  {
    name: "BitBot",
    developer: "UTDesign Makerspace",
    repo: "https://github.com/utdesign-makerspace/BitBot",
    link: "https://wiki.utd.ms/bitbot",
    categories: ["Social"],
  },
  {
    name: "Temoc Bot",
    developer: "UT Dallas Discord",
    repo: "",
    link: "https://utdallasdiscord.com/",
    categories: ["Social"],
  },
];

const ProjectsTable: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);
export default ProjectsTable;
