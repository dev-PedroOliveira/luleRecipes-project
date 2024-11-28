import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import AddRecipes from './components/pages/AddRecipes';
import YoursRecipes from './components/pages/YoursRecipes';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import { Stack } from '@mui/material';
import { useRecipes } from './RecipesContext';
import { useEffect } from 'react';


function App() {
  const { recipes, setRecipes, setError, setLoading } = useRecipes();

  useEffect(() => {
    const fetchRecipesList = async () => {
      try {
        // Get recipes from jelly belly wiki for the first load -> https://jelly-belly-wiki.netlify.app
        const response = await fetch("https://jellybellywikiapi.onrender.com/api/Recipes?pageSize=27");
        if (!response.ok) {
          throw new Error("Erro ao buscar as receitas");
        }
        const data = await response.json();
        setRecipes(data.items || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!recipes) fetchRecipesList();
  }, [recipes]);
  return (
    <Router>
      <Stack height="100%" flexDirection="column" justifyContent="space-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        
          <Route path="/recipes" element={<Recipes/>}/>
        
          <Route path="/recipes/add" element={<AddRecipes/>}/>
        
          <Route path="/recipes/edit/:id" element={<AddRecipes/>}/>

          <Route path="/recipes/:id" element={<AddRecipes/>}/>
        
          <Route path="/your-recipes" element={<YoursRecipes/>}/>
        </Routes>
        <Footer />
      </Stack>
    </Router>
  );
}

export default App;
