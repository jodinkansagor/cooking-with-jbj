const URL = 'https://cookwithjbj.herokuapp.com/api/v1/recipes';

export async function getRecipes() {
  const url = `${URL}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getRecipeById(id){
  const url = `${URL}/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}