import Component from '../Component.js';

class Loading extends Component {
  renderHTML() {


    return /*html*/`
            <div class="loading-container">
                <img src="./assets/flyingfood.gif">
            </div>
        `;
  }
}

export default Loading;
