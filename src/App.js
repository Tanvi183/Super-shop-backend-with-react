import React from 'react'
import {BrowserRouter} from'react-router-dom'
import MainLayout from './Components/Layouts/MainLayout';
import Router from './Components/Router/Router';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router/>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
