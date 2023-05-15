import React from "react";

const ProductItem = (data: any) => {
  const { id, nombre, precio, categoria, descripcion, imagen } = data.data;

  const buyButton = () => {
    console.log(id);
  };

  return (
    <li className="m-5 w-[200px] bg-slate-800 p-5 relative flex flex-col ">
      <p className="absolute right-5 bg-green-500 px-3 py-1 rounded-2xl text-sm">
        {precio > 1 ? `${precio} Gemas` : `${precio} Gema`}
      </p>
      <img className="mt-8 mb-2 w-[70px] mx-auto" src={imagen} alt={nombre} />
      <h3 className="font-bold my-2">{nombre}</h3>
      <p className="text-slate-400 my-2">{descripcion}</p>
      <button
        className="my-2 text-center w-full text-white bg-blue-700 rounded-lg"
        onClick={() => buyButton()}
      >
        Agregar
      </button>
    </li>
  );
};

export default ProductItem;
