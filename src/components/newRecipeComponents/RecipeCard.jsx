import React from 'react'
import { useNavigate } from "react-router-dom";

function RecipeCard({recipe}) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className='recipe-card'>
        <img className='recipe-img' src={recipe.image_url} alt={recipe.recipe_name}/>
        <p>{recipe.recipe_name}</p>
        
        <button className="blue-btn" onClick={() => handleClick()}>See More</button>
    </div>
  )
}

export default RecipeCard