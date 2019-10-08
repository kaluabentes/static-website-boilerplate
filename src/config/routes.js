const fs = require("fs");
const md = require("markdown-it")();
const bioMarkdown = fs.readFileSync("./src/content/bio.md", "utf-8");
const bioHTML = md.render(bioMarkdown);

module.exports = [
  {
    from: "src/views/index.njk",
    to: "index.html",
    context: {
      name: "Kaluã Bentes"
    }
  },
  {
    from: "src/views/bio.njk",
    to: "bio.html",
    context: {
      bio: bioHTML
    },
    configure: {
      options: {
        autoescape: false
      }
    }
  }
];
