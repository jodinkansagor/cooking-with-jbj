import Component from '../Component.js';

class RecipeItem extends Component {

  renderHTML() {
    const recipe = this.props.recipe;
    return /*html*/ `
      <li class = "recipe-item">
        <a href="recipe-detail.html?id=${recipe._id}">
        <div class = "image-container">
            <img src="${recipe.imageURL}" alt = "${recipe.name}">
          </div>
          <div class = "info-container">
            <h2>${recipe.name}</h2>
            <h3>${recipe.type}</h3>
          </div>
        </a>
      </li>
    `;
  }

}

export default RecipeItem;
