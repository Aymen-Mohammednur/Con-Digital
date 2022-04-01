import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'
import { Routes, Route } from "react-router-dom"
import AddStaff from './components/AddStaff';
import EditStaff from './components/EditStaff';


// for useState
// interface IState {
//   staff: {
//     fullName: string
//     email: string
//     age: string
//   }[]
// }
// const [staff, setStaff] = useState<IState["staff"]>([])


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-staff" element={<AddStaff />}/>
        <Route path="/edit-staff/:id" element={<EditStaff />}/>

      </Routes>
    </div>
  );
}

export default App;
