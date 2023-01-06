import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailBanner from './DetailBanner';
import axios from 'axios';

const DetailScreen = () => {
  
  const [recipe, setRecipe] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then(res => {
        console.log(res.data)
        setRecipe(res.data)
      })
  },[])

  return (
    <main>
      <DetailBanner image={recipe.image_url} imageName={recipe.recipe_name}/>
    <section className='details-container'>
      
      <div className='reci-Ingred-container'>
        <h1 className='details-title'>Recipe</h1>
        <p className='details'>
          Prep Time: {recipe.prep_time}</p>

        <p className='details'>
          Cook Time: {recipe.cook_time}</p>

          <p className='details'>Serves: {recipe.serves}
        </p>
        <h1 className='details-title'>Ingredients</h1>
        <div className='ingred-details'>
         {recipe.ingredients && recipe.ingredients.map((ingre, index) => {
          return <h4>{ingre.quantity} {ingre.ingredient}</h4>
         })}
        </div>
      </div>

      <div className='reci-Ingred-container'>
        <h1 className='details-title'>Instructions</h1>
        <p className='details' style={{whiteSpace: "pre-wrap"}}>
          {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
      
      </div>
    </section>
    </main>
  );
};

export default DetailScreen;
