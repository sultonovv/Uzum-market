import React, { useContext } from "react";
import { SavedContext } from "../context/SavedContext";
import ProductCard from "../components/ProductCard";

function SavedProduct() {
  const { saved } = useContext(SavedContext);

  return (
    <>
    <div className="container">

    <div className="saved-page">

      {saved.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
      </div>
      </div>
    </>
  );
}
export default SavedProduct;
