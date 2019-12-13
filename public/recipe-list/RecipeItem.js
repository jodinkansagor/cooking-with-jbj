import Component from '../Component.js';

class RecipeItem extends Component {

  renderHTML() {
    const recipe = this.props.recipe;
    return `
      <li class = "recipe-item">
        <a href="recipe-detail.html?id=${recipe.id}">
          <div class = "info-container">
            <h2>${recipe.name}</h2>
          </div>
          <div class = "image-container">
            <img src="https://placebear.com/500/300" alt = "This is a bear">
          </div>
        </a>
      </li>
    `;
  }

}

export default RecipeItem;
