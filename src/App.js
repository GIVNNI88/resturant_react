import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Categories from "./Pages/Categories";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    
    <div
    >
      <AppBar  sx={{marginBottom:'20px', direction:'rtl'}} position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=> navigate('/')}>דף הבית</Button>
          <Button color="inherit" onClick={()=> navigate('/categories')}>קטגוריות</Button>

        </Toolbar>
        
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
