import React, { useContext } from "react";
import { UseContext } from "../UseContext.jsx"; // Asegúrate de importar el contexto adecuadamente

function Menu() {
  // Obtener menuData del contexto
  const { menuData } = useContext(UseContext);

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {menuData.map((menuItem) => (
          <li key={menuItem.idMeal}>
            <h3>{menuItem.strMeal}</h3>
            <p>{menuItem.strInstructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;