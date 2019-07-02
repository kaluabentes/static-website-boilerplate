const Router = (() => {
  let isInitialized = false;
  let routes;
  let rootElement;

  const init = routeConfig => {
    routes = routeConfig;
    rootElement = document.getElementById("app");

    addEventListeners();
    render();
  };

  const addEventListeners = () => {
    window.addEventListener("popstate", render);

    const matchList = location.hash.match(/#\//);

    if (!matchList) {
      location.hash += "#/";
    }
  };

  const render = () => {
    routes.forEach(route => {
      const locationName = location.hash.replace("#", "");

      if (route.path == locationName) {
        rootElement.innerHTML = route.page.render();
      }
    });
  };

  return {
    init
  };
})();

export default Router;
