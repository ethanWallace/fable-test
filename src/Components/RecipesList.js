import React from 'react'
import { Link } from 'react-router-dom'

import { GcdsGrid } from '@cdssnc/gcds-components-react'

const RecipesList = ({ recipes, currentPage, recipesPerPage }) => {
  // Calculate the index of the first and last recipe to be displayed on the current page
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  return (
    <div className="mb-800">
      <GcdsGrid
        tag="div"
        columnsTablet="1fr 1fr"
        columns="1fr"
        gap="450"
      >
        {currentRecipes.map( recipe => (
          <article key={recipe.url}>
            <img
              className="container-sm mb-400"
              src={require(`../img/cupcakes/${recipe.url}.jpg`)}
              alt={recipe.image.description}
            />

            <Link className="link-default" to={`/recipe/${recipe.url}`}>
              <h2 className="mb-200">{recipe.title}</h2>
            </Link>

            <p>Prep time: {recipe.details.prep}</p>
            <p>Cook time: {recipe.details.cook}</p>
          </article>
        ))}
      </GcdsGrid>
    </div>
  );
};

export default RecipesList;