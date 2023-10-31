import React, { useEffect, useState } from "react";

export default function Pizza() {
  let [pizza, setPizza] = useState([]);

  const getpizza =async () => {
    let reponse =await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
    );
    let data =await reponse.json();
    setPizza(data.data.recipes);
  };

  useEffect(() => {
    getpizza();
  }, []);

  return (
    <div className="row">
      { pizza.map((eleme)=>{
        return (
          <div className="col-md-4 p-5 text-center" key={eleme.id}>
            <h2 className="">{eleme.title}</h2>
            <img src={eleme.image_url} className="w-50 pt-5"></img>
            <p className="pt-4">{eleme.publisher}</p>
          </div>
        );
      })}
    </div>
  );
}
