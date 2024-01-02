const rawRecipe = `Miyoko’s pancake mix

Ingredients
480 grams all-purpose flour
240 grams whole wheat flour
54 grams sugar
50 grams ground flaxseed
40 grams baking powder
5 grams salt

Makes 8 pancakes
For the pancakes
120 grams of mix
180 grams of plant milk
1 tsp of vanilla extract

Notes
Better than most vegan pancakes. Easier to flip. Less gummy.
`;

const listify = lines => {
  lines.split("\n").forEach(line => {
    console.log(`  <li>${line}</li>`);
  });
};

const printRecipe = recipe => {
  const [rawIngredients, rawInstructions] = recipe
    .split("Ingredients")[1]
    .split("Instructions");

  console.log("<b>Ingredients</b>");
  console.log("<ul>");
  listify(rawIngredients);
  console.log("</ul>");

  const instructions = rawInstructions.split("\n");
  console.log("<b>Instructions</b>");
  console.log("<ol>");
  listify(instructions);
  console.log("</ol>");
};

listify(rawRecipe);
