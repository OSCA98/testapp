import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import RecipeList from './pages/RecipeList'
import Recipe from './pages/Recipe'
import Layout from './pages/Layout'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element= { <Layout/> }
          >
            <Route
              index
              element={ <RecipeList/> } />
            <Route 
              exact
              path="recipe/:id" 
              element={ <Recipe/> } />
              </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;