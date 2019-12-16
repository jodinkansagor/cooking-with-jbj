import Component from '../Component.js';

class RecipeDetail extends Component {

  renderHTML() {

    const recipe = this.props.recipe;
    let recipeDirections = recipe.directions.join('\n');
    let ingredientLine = recipe.ingredients.map(ingredient => {
      return `${ingredient.name}: ${ingredient.amount} ${ingredient.measurements}`;
    });
    let attemptLine = recipe.attempts.map(attempt => {
      return `${attempt.month}-${attempt.day}-${attempt.year}: ${attempt.notes} Rating: ${attempt.rating}`;
    });

    console.log(ingredientLine);
    console.log(recipe.directions);
    console.log(attemptLine);


    return /*html*/ `
      <div class = "recipe-detail">
        <h1>${recipe.name}</h2>
        <img src = "${recipe.imageURL}" />
        <section class = "ingredients">
          <h4>Ingredients:</h4>
          <p>${ingredientLine}</p>
        </section>
        <section class = "directions">
          <h4>Directions:</h4>
          <p>${recipeDirections}</p>
        </section>
        <section class = "attempts">
          <h4>Attempts:</h4>
          <p>${attemptLine}</p>
        </section>
        <h5>${recipe.type}</h5>
    `;
  }
}

export default RecipeDetail;
