import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen"
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />}/>
        <Route path='newRecipe' element={<NewRecipeScreen />}/>
        <Route path='recipe/:id' element={<DetailScreen />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
