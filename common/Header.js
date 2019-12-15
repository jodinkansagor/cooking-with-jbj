import Component from '../Component.js';

class Header extends Component {

  renderHTML() {
    const title = this.props.title || 'Cook With JBJ';

    return /*html*/ `
      <header>
        <div class = "header-contents">
            <a href="/"><h1>Cook</h1><h1>With</h1><h1>JBJ</h1></a>
            <img src="./assets/woodstuff.png">
        </div>
        
      </header>
    `;
  }
}

export default Header;

