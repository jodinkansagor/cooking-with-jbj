import Component from '../Component.js';

class RecipeDetail extends Component {

  renderHTML() {

    const recipe = this.props.recipe;
    let recipeDirections = recipe.directions.reduce((acc, curr) => {
      return acc += `<li>${curr}</li>`;
    }, '');
    let ingredientLine = recipe.ingredients.reduce((acc, curr) => {
      return acc += `<li>${curr.name}: ${curr.amount} ${curr.measurements}</li>`;
    }, '');

    let attemptLine = recipe.attempts.reduce((acc, curr) => {
      return acc += `<li><u>${curr.month}-${curr.day}-${curr.year}:</u> ${curr.notes}<br> Rating: ${curr.rating}</li>`;
    }, '');

    
    console.log(ingredientLine);
    console.log(recipe.directions);
    
    


    return /*html*/ `
      <div class = "recipe-detail">
        <h1>${recipe.name}</h2>
        <img src = "${recipe.imageURL}" />
        <section class = "ingredients">
          <h4>Ingredients:</h4>
          <li>${ingredientLine}</li>
        </section>
        <section class = "directions">
          <h4>Directions:</h4>
          <ol>${recipeDirections}<//ol>
        </section>
        <section class = "attempts">
          <h4>Attempts:</h4>
          <ol>${attemptLine}</ol>
        </section>
        <h5>Recipe Category: ${recipe.type}</h5>
    </div>
    `;
  }
}

export default RecipeDetail;
