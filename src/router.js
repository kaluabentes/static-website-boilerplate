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
  };

  const render = () => {
    routes.forEach(route => {
      if (route.path == location.pathname) {
        rootElement.innerHTML = route.page.render();
      }
    });
  };

  return {
    init
  };
})();

export default Router;
