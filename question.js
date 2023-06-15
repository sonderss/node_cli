module.exports = [
  {
    type: "input",
    message: "请输入项目名称",
    name: "projectName",
    default: "my-project",
  },
  {
    type: "list",
    message: "请选择你需要的框架",
    name: "frame",
    choices: [
      {
        name: "Vue",
        value: "Vue",
      },
      {
        name: "React",
        value: "React",
      },
      {
        name: "Angular",
        value: "Angular",
      },
    ],
    filter(value) {
      return value.toLocaleLowerCase();
    },
  },
  {
    type: "confirm",
    message: "是否需要生成html文件",
    name: "isHtml",
    default: true,
  },
  {
    type: "list",
    message: "请选择包管理工具",
    name: "package",
    choices: [
      {
        name: "Npm",
        value: "Npm",
      },
      {
        name: "Yarn",
        value: "Yarn",
      },
    ],
    filter(value) {
      return value.toLocaleLowerCase();
    },
  },
];
