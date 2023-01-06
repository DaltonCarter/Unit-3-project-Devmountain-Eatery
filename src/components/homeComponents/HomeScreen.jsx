import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeCard from '../newRecipeComponents/RecipeCard'
import {BiSearchAlt2} from 'react-icons/bi'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  const getRecipes = () => {
    axios
    .get('https://recipes.devmountain.com/recipes')
    .then((res) => {
      console.log(res.data)
      setRecipes(res.data)
    })

  
  }

  useEffect(() => {
    getRecipes()
  },[])

  const recipeDisplay = recipes 
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
      
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })


  return (
    <div className='container'>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635"/>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='search-field' placeholder='Search for a Recipe'/>
      </span>
      <div className='recipe-card-container'>
      {recipeDisplay}
      </div>
    </div>
  )
}

export default HomeScreen