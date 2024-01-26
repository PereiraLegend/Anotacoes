import React from "react";
import axios from "axios";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <form id="formularioProduto">
        <label htmlFor="nomeProduto">Nome do Produto:</label>
        <input type="text" id="nomeProduto" required />

        <label htmlFor="tipoProduto">Tipo do Produto:</label>
        <input type="text" id="tipoProduto" required />

        <label htmlFor="categoriaProduto">Categoria do Produto:</label>
        <input type="text" id="categoriaProduto" required />

        <label htmlFor="observacaoProduto">Observação do Produto:</label>
        <input type="text" id="observacaoProduto" />

        <button type="submit" className="border-2 border-gray-600">
          Adicionar Produto
        </button>
      </form>

      <table id="produtoTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Tipo do Produto</th>
            <th>Categoria do Produto</th>
            <th>Observação do Produto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="produtoBody">
        </tbody>
      </table>
    </div>
  );
};
