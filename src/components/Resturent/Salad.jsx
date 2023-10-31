import React, { useEffect, useState } from "react";

export default function Salad() {
  let [salad, setSalad] = useState([]);

  const getsalads =async () => {
    let reponse =await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes?search=salad"
    );
    let data =await reponse.json();

    setSalad(salad.recpices);
  };

  useEffect(() => {
    getsalads();
  }, []);

  return (
    <div className="row">
      { salad.map((elem)=>{
        return (
          <div className="col-md-4 p-5 text-center" key={elem.id}>
            <h2 className="">{elem.title}</h2>
            <img src={elem.image_url} className="w-50 pt-5"></img>
          </div>
        );
      })}
    </div>
  );
}
