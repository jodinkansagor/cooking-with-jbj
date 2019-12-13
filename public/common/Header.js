import Component from '../Component.js';

class Header extends Component {

  renderHTML() {
    const title = this.props.title || 'Cook With JBJ';

    return /*html*/ `
      <header>
        <div class = "header-contents">
            <h1>${title}</h1>
        </div>
      </header>
    `;
  }
}

export default Header;
