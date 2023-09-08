import { createContext, useContext, useState, useEffect } from "react";

const UseContext = createContext();

export function ContextProvider({ children }) {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Realizar una solicitud a la API "mealdb" al montar el componente
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
      .then((response) => response.json())
      .then((data) => {
        // Almacenar los datos de la API en la variable menuData
        setMenuData(data.meals);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []); // El segundo argumento del useEffect asegura que esto solo se ejecute una vez

  return (
    <UseContext.Provider value={{ menuData }}>
      {children}
    </UseContext.Provider>
  );
}



// fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
// .then(res => res.json())
// .then(data => console.log(data));