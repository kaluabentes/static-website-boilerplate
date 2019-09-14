export default [
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
