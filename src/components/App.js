import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
   fetch('http://localhost:3001/toys')
   .then(res => res.json())
   .then(toysData => setToys(toysData))
  }, [])

  function removeToy(remToy){
    const filtered = toys.filter(toy => toy.id !== remToy.id)
    setToys(filtered)
  }

  function updateToys(updatedToy){
    const updatedToys = toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy){
    fetch("http://localhost:3001/toys/", {
      method: 'POST', 
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newToy),
    })
    .then(res => res.json())
    .then(newToy => setToys([...toys, newToy]))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} removeToy={removeToy} updateToys={updateToys} />
    </>
  );
}

export default App;
