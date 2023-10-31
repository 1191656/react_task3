import React, { useEffect, useState } from "react";

export default function products() { 
    let [products,setProducts] = useState([]);

    const getProducts = async()=>{
        let reponse =await fetch("https://fakestoreapi.com/products");
        let data =await reponse.json();
        setProducts(data);
    }

    useEffect( ()=>{
        getProducts();
    } , [])
  
  return(
    <div className="row">
        {   products.map((ele)=>{
            return  <div className="col-md-4 p-5 text-center" key={ele.id}>
                <h2 className="">{ele.title}</h2>
                <img src={ele.image} className="w-50 pt-5"></img>
            </div>
        }

        )

        }

    </div>
   
  )
}
