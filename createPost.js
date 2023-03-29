const rawRecipe = `Ingredients
80 grams coconut oil, solid but scoop-able
180 grams light brown sugar
1/2 Tbsp vanilla extract
45 grams coconut milk
45 grams unsweetened applesauce
260 grams all-purpose flour
3/4 teaspoon baking soda
1/2 teaspoon salt
160 grams vegan chocolate chips
Flaky sea salt, optional

Instructions
Preheat the oven to 375 degrees F.
Line 2 large baking sheets with parchment paper.
In a large bowl, add the coconut oil, brown sugar, and vanilla. Beat well to combine. Add in the coconut milk and
applesauce and whisk until well combined; set aside.
In a separate bowl, stir together the flour, baking soda, salt, and chocolate chips.
Add the dry ingredients into the wet ingredients. Stir to combine. The batter will be thick.
Chill the cookie dough for at least 30 minutes or up to overnight.
Scoop the cookies onto the sheet. Leave a few inches between the cookies for spreading. Bake for 10 minutes. After
baking, sprinkle the cooking with sea salt.
Cool the cookies on the baking sheet for 15 minutes before transferring.`

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

const block = `1. Boil water for the noodles. Fill a pot about halfway full, cover with a lid, and put on the stove on high heat.
2. Turn on the oven for 350 degrees F. Line a large baking sheet with parchment paper. Pat the tofu dry, and crumble
it onto the baking sheet. Add the oil, salt, and spices. Plop in the oven for 35 minutes.
3. Cook the noodles until soft. Drain, and rinse in cold water.
4. Make the peanut sauce. Stir together the peanut butter, water, and soy sauce.
5. Cook the veggies. In a pan, heat the oil over medium heat. Plop in the veggies and soy sauce. Cook until just
tender (~5-10 minutes).`

listify(block)