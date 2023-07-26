import React, { useState, useEffect, useRef } from 'react'

import { GcdsPagination } from '@cdssnc/gcds-components-react'

import RecipesList from '../Components/RecipesList'
import recipes from '../data/recipes.json'

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recipesPerPage = 4
  const totalPages = Math.ceil(recipes.length / recipesPerPage)

  const heading = useRef();
  const list = useRef();

  // Handle page changes
  const onPageChange = (pageNumber) => {
    const selectedPage = pageNumber.target.innerHTML

    if (selectedPage.indexOf("Previous") !== -1) {
      const previousPage = parseFloat(currentPage) - 1

      setCurrentPage(previousPage)
    } else if (selectedPage.indexOf("Next") !== -1) {
      const nextPage = parseFloat(currentPage) + 1

      setCurrentPage(nextPage)
    } else {
      setCurrentPage(selectedPage)
    }

    list.current.focus();
  };

  useEffect(() => {
    heading.current.focus();
  }, [])

  return (
    <div>
      <h1 className="lg:mt-500 mt-300 mb-400" tabIndex="-1" id="mc" ref={heading}>Recipes</h1>

      <p className='mb-200' ref={list} tabIndex="-1">Showing recipes {4*currentPage-3} to {4*currentPage} of 12</p>
      
      <RecipesList
        recipes={recipes}
        currentPage={currentPage}
        recipesPerPage={recipesPerPage}
      />

      <GcdsPagination
        display="list"
        label="List pagination"
        type="list"
        totalPages={totalPages}
        currentPage={currentPage}
        pageChangeHandler={onPageChange}
      />
    </div>
  );
};

export default Recipes;