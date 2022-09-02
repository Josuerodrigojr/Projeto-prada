import React, { createContext, useState, useContext } from "react";

const ProdutoContext = createContext();

export default function ProdutoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  return (
    <ProdutoContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export const useProdutos = () => {
  const context = useContext(ProdutoContext)
  const { produtos, setProdutos } = context

  return [produtos, setProdutos]
}