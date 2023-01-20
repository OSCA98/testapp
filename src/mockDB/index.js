let recipes = [
  {
    id: 1,
    date: '10.10.2022',
    name: 'Bratwurst mit Senf',
    description: 'Man nehme Bratwurst und Senf',
    rating: 3.5
  },
  {
    id: 2,
    date: '11.10.2022',
    name: 'Sams Pizza',
    description: 'Wähle die 0651/43666977',
    rating: 2
  },
  {
    id: 3,
    date: '10.10.2022',
    name: 'Bratwurst mit Ketchup',
    description: 'Man nehme Bratwurst und Ketchup Man nehme Bratwurst und Ketchup Man nehme Bratwurst und Ketchup',
    rating: 3.5
  },
  {
    id: 4,
    date: '11.10.2022',
    name: 'Sams Pizza',
    description: 'Wähle die 0651/43666977',
    rating: 2
  }
]

function copyObject (obj) {
  const keys = Object.keys(obj);
  let newObj = {}
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

export function getRecipe(id) {
  const recipe = recipes.find(recipe => recipe.id == id);
  return copyObject(recipe);
}

export function getRecipes() {
  return recipes.map(recipe => copyObject(recipe));
}

export function postRecipe ({date, name, description, rating}) {
  const freeId = recipes[recipes.length-1].id++;
  const newRecipe = {
    id: freeId,
    date: date,
    name: name,
    description: description,
    rating: rating
  }
  recipes.push(newRecipe)
}

export function deleteRecipe (id) {
  const indexToDelete = recipes.findIndex(recipe => recipe.id == id);
  recipes.splice(indexToDelete,1);
}