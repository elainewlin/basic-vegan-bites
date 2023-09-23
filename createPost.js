const rawRecipe = `Ingredients
80 g black beans
25 g peanut butter
2 dates
120 mL plant milk
120 mL coffee
1.5 tsp of cocoa powder
1 tsp of flax seed
Instructions`

const listify = (lines) => {
  lines.split('\n').forEach(line => {
    console.log(`  <li>${line}</li>`)
  })
}

const printRecipe = (recipe) => {
  const [rawIngredients, rawInstructions] = recipe.split('Ingredients')[1].split('Instructions')

  console.log('<b>Ingredients</b>')
  console.log('<ul>')
  listify(rawIngredients)
  console.log('</ul>')

  const instructions = rawInstructions.split('\n')
  console.log('<b>Instructions</b>')
  console.log('<ol>')
  listify(instructions)
  console.log('</ol>')
}

listify(rawRecipe)