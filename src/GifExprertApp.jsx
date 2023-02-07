import React, { useState } from "react";
import { AddCategory,GifGrid } from "./components";

// cuando tengamos informacion y esa informacion cada ves que cambie tiene que modificar nuestro html, usamos el estado

export const GifExprertApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([ newCategory,...categories]);
  };

  return (
    <>
      {/* // XXDSvZIrCYW1OFlNGtrH9DXKRF4t4Vd3 */}

      <h1>GifExprertApp</h1>
      <AddCategory
        onNewCategory={handleAddCategories}
        // setCategories={setCategories}
      />

      {categories.map((categoria) => (
        <GifGrid category={categoria} key={categoria} />
      ))}
    </>
  );
};
