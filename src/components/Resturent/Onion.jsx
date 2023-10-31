import React, { useEffect, useState } from "react";

export default function Onion() {
  let [onion,setOnion] = useState([]);

  const getonion =async () => {
    let reponse =await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes?search=onion"
    );
    let data =await reponse.json();
    setOnion(data.data.recipes);
  };

  useEffect(() => {
    getonion();
  }, []);

  return (
    <div className="row">
      { onion.map((element)=>{
        return (
          <div className="col-md-4 p-5 text-center" key={element.id}>
            <h2 className="">{element.title}</h2>
            <img src={element.image_url} className="w-50 pt-5"></img>
            <p className="pt-4">{element.publisher}</p>
          </div>
        );
      })}
    </div>
  );
}
