import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../firebase/firebase.js";
import { ItemDetail } from "./ItemDetail.jsx";


export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    console.log("pid:", pid); 
    getProduct(pid)
      .then(prod => {
        console.log("Item recuperado:", prod); 
        setItem(prod);
      })
      .catch(error => console.log(error));
  }, []);

  console.log("Item actual:", item); 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <ItemDetail item={item} />
    </div>
  );
};

