// import { Routes, Route, Navigate } from 'react-router-dom';

// import { useAuthContext } from 'hooks/useAuthContext';
// import { useCartContext } from 'hooks/useCartContext';
import Category from './Category'
import ItemCards from './ItemCards'

import './App.css'

function App() {

  return (
    <div className="App">
      <Category/>
      <ItemCards/>
    </div>
  )
}

export default App
