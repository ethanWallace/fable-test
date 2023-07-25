import React from 'react'

import {
  GcdsCard,
  GcdsGrid
} from '@cdssnc/gcds-components-react'

const RecipesList = ({ recipes, currentPage, recipesPerPage }) => {
  // Calculate the index of the first and last recipe to be displayed on the current page
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  return (
    <div className="md:mb-800 mb-600">
      <GcdsGrid
        tag="div"
        columnsTablet="1fr 1fr"
        columns="1fr"
        gap="450"
      >
        {currentRecipes.map( recipe => (
          <GcdsCard
            key={recipe.url}
            cardTitle={recipe.title}
            titleElement="h2"
            href={`#/recipe/${recipe.url}`}
            description={`Cook time: ${recipe.details.cook}`}
            imgSrc={require(`../img/cupcakes/${recipe.url}.jpg`)}
            imgAlt={recipe.image.description}
          />
        ))}
      </GcdsGrid>
    </div>
  );
};

export default RecipesList;