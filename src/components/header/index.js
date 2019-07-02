import styles from "./styles.css";

const Header = (() => {
  const render = () => `
    <header class="${styles.header}">
      <h1 class="${styles.title}">
        <span class="${styles.greet}">Hi!</span> 
        I'm Kaluã Bentes
      </h1>
      <h2 class="${styles.subtitle}">I'm Developer</h2>
    </header>
  `;

  return {
    render
  };
})();

export default Header;
