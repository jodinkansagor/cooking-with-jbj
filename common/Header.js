import Component from '../Component.js';

class Header extends Component {

  renderHTML() {

    return /*html*/ `
      <header>
        <div class = "header-contents">
            <a href="/"><h1>Cook</h1><h1>With</h1><h1>JBJ</h1></a>
            <img src="./assets/woodstuff.png" alt="wooden utensils">
        </div>
        
      </header>
    `;
  }
}

export default Header;

