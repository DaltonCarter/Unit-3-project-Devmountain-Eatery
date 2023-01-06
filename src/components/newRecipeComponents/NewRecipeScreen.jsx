import React, {useState} from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRecipeScreen = () => {

const [ingredients, setIngredients] = useState([])
const [name, setName] = useState('')
const [quantity, setQuantity] = useState('')
const navigate = useNavigate()

let initialValues = {
  type: '',
  recipeName: '',
  imageURL: '',
  prepTime: '',
  cookTime: '',
  serves: '',
  ingredients: [],
  instructions: ''
}

const onSubmit = (values) => {
  values.ingredients = ingredients
  console.log(values)
  axios
  .post(`https://recipes.devmountain.com/recipes`, values)
  .then(res => console.log(res.data))
  navigate(`/recipe/${res.data[0][0].recipe.id}`)
  .catch((err) => console.log(err))
}

const addIngredient = () => {
  setIngredients([...ingredients,{name, quantity}])
  setName('')
  setQuantity('')
}



  return (
    <section className="container">
      <h1 className="basic-title">Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you 
      build this form in detail, 
      and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({values, handleChange, handleSubmit}) => (

      
      <form className="new-form" onSubmit={handleSubmit}>

        <div className="basic-container">
        <input 
        placeholder="Title your Recipe!" 
        value={values.recipeName} 
        onChange={handleChange} 
        name="recipeName"/>

        <input 
        placeholder="Image URL" 
        value={values.imageURL} 
        onChange={handleChange} 
        name="imageURL"/>
        </div>

        <br/>

        <div className="radios">
        <input 
        type={"radio"} 
        id="Cook" 
        name={"type"} 
        value={"Cook"} 
        onChange={handleChange}/>
        <label for="Cook">Cook</label>

        <input 
        type={"radio"} 
        id="Bake" 
        name={"type"} 
        value={"Bake"} 
        onChange={handleChange}/>
        <label for="Bake">Bake</label>

        <input 
        type={"radio"} 
        id="Drink" 
        name={"type"} 
        value={"Drink"} 
        onChange={handleChange}/>
        <label for="Drink">Drink</label>
        </div>
          <br/>

          <div className="basic-container">
        <input 
        className="times-servings" 
        placeholder="Prep Time" 
        value={values.prepTime} 
        onChange={handleChange} 
        name="prepTime"/>

        <input 
        className="times-servings" 
        placeholder="Cook Time" 
        value={values.cookTime} 
        onChange={handleChange} 
        name="cookTime"/>

        <input 
        className="times-servings" 
        placeholder="Serves" 
        value={values.serves} 
        onChange={handleChange} 
        name="serves"/>
          </div>
        <br/>

        <div className="ingredient-container">
          <div className="ingred-input-container">
        <input 
        placeholder="Ingredient" 
        value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)}/>
      
        
          </div>
        <aside>
          <ul> 
            {ingredients.map((ingredient, index) => <li key={index}>{ingredient.quantity} {ingredient.name}</li>)}
          </ul>
        </aside>
        
        </div>
       
        <div className="btn-container">
        <button 
        className="orange-btn" 
        type="button" 
        onClick={addIngredient}>Add Another</button>
        </div>

        <br/>

        <textarea
         placeholder="What are the Instructions?" 
         value={values.instructions} 
         onChange={handleChange} 
         name="instructions"/>
        <br/>

        <div className="btn-container">
        <button className="save-btn">Save</button>
        </div>
      </form>
      )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
