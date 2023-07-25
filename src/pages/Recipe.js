import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { GcdsDetails } from '@cdssnc/gcds-components-react'

const Recipe = ({ recipes }) => {
  const { url } = useParams()
  const recipe = recipes.find(recipe => recipe.url.toString() === url)

  const heading = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
    heading.current.focus();
  }, [])

  if (!recipe) {
    return <div>recipe not found.</div>
  }

  return (
    <section>
      <h1 className="lg:mt-500 mt-300 mb-400" tabIndex="-1" id="mc" ref={heading}>{recipe.title}</h1>

      <img
        className="lg:container-md mb-400"
        src={require(`../img/cupcakes/${recipe.url}.jpg`)}
        alt={recipe.image.description}
      />

      <GcdsDetails detailsTitle="Allergy considerations">
        <p className="mb-400">This recipe contains eggs and flour.</p>
        <ul className="container-md list-disc">
          <li className="mb-100">Use apple sauce or mashed bananas if you are allergic to eggs.</li>
          <li className="mb-100">Use gluten free flour if you are allergic to gluten.</li>
        </ul>
      </GcdsDetails>

      <h2 className="mt-500 mb-400">Details</h2>
      <ul className="container-md list-disc">
        <li className="mb-100">Prep time: {recipe.details.prep}</li>
        <li className="mb-100">Cook time: {recipe.details.cook}</li>
      </ul>

      <h2 className="mt-500 mb-400">Ingredients</h2>
      <ul className="container-md list-disc">
        {recipe.content.ingredients.map((ingredient, index) => (
          <li className="mb-100" key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="mt-500 mb-400">Instructions</h2>
      <ul className="container-md list-disc mb-400">
        {recipe.content.instructions.map((instruction, index) => (
          <li className="mb-100" key={index}>{instruction}</li>
        ))}
      </ul>
    </section>
  );
};

export default Recipe;