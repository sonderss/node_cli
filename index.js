const question = require("./question");
const inquirer = require("inquirer");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const exec = require("child_process").exec; // 执行shell脚本

const getEjsTemplate = (path) => {
  return fs.readFileSync(`./template/${path}`).toString();
};

inquirer.prompt(question).then((result) => {
  console.log(JSON.stringify(result.projectName, ""));
  // 生成文件 0777 权限全部开放
  fs.mkdir(result.projectName, "0777", () => {
    const json = ejs.render(getEjsTemplate("package.ejs"), {
      packageName: result.projectName,
      frame: result.frame,
    });
    console.log(json);
    fs.writeFile(
      path.join(__dirname, result.projectName, "./package.json"),
      json,
      (err) => {
        const html = ejs.render(getEjsTemplate("html.ejs"));
        result.isHtml &&
          fs.writeFile(
            path.join(__dirname, result.projectName, "./index.html"),
            html,
            () => {}
          );
        // 根据用户选择 npm 或 yarn 进行输出
        exec(`${result.package} install`, { cwd: result.projectName });
      }
    );
  });
});
