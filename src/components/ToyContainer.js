import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, removeToy, updateToys }) {
  return (
    <div id="toy-collection">{
      toys.map(toy => <ToyCard key={toy.id} toy={toy} removeToy={removeToy} updateToys={updateToys} />)
      }</div>
  );
}

export default ToyContainer;
