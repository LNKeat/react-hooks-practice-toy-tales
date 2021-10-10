import React, {useState} from "react";

function ToyForm({ addToy }) {
  const [toyData, setToyData] = useState({
    "name":"",
    "image": "",
    "likes": 0
  })

  function handleChange(e){
    const newData = {...toyData, [e.target.name]:e.target.value}
    setToyData(newData)
  }

  function handleSubmit(e){
    e.preventDefault()
    addToy(toyData)
    setToyData({
      "name":"",
      "image": "",
      "likes": 0
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
