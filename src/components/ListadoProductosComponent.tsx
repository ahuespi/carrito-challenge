import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export interface ProductsType {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
}

export const ListadoProductosComponent = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    const data = axios.get("http://localhost:3001/productos");
    data.then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap">
        {products.map((item) => {
          return <ProductItem data={item} />;
        })}
      </ul>
    </div>
  );
};
