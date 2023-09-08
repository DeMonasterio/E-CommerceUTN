import { createContext, useContext, useState } from "react";

const UseContext = createContext();

export function ContextProvider({children}) {
    const [menuData, setMenuData] = useState([])
    return (
        <UseContext.Provider value={{ menuData }}>
          {children}
        </UseContext.Provider>
      );
    }



// fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
// .then(res => res.json())
// .then(data => console.log(data));