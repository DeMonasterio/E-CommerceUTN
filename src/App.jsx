import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/NavBar/NavBar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Filters from "./components/Filters/Filters.jsx";
import useProductData from "./hooks/useProductData";
import useProductSorting from "./hooks/useProductSorting";
// Hola, profe, queriamos pedirle un pequeño favor, nuestro sueño es que despues-
// de ver nuestro codigo usted diga su celebre frase:                                                                                                       
// ,--. ,--.            ,--.            ,--.             ,---.         ,--.          ,--.  ,--.              
// |  | |  |,--,--,     |  |   ,--.,--. `--' ,---.      /  O  \  ,---. `--' ,--,--.,-'  '-.`--' ,---. ,---.  
// |  | |  ||      \    |  |   |  ||  | ,--.| .-. |    |  .-.  |(  .-' ,--.' ,-.  |'-.  .-',--.| .--'| .-. | 
// '  '-'  '|  ||  |    |  '--.'  ''  ' |  |' '-' '    |  | |  |.-'  `)|  |\ '-'  |  |  |  |  |\ `--.' '-' ' 
//  `-----' `--''--'    `-----' `----'.-'  / `---'     `--' `--'`----' `--' `--`--'  `--'  `--' `---' `---'  
//                                    '---'                                                                  
// No importa si le gustó o si le parece horrible, es una meta que llenaría nuestros corazones de gratitud y fuerzas para seguir uwu
function App() {
  const products = useProductData();
  const [minToMaxPrice, setMinToMaxPrice] = useState(false);
  const [maxToMinPrice, setMaxToMinPrice] = useState(false);
  const [Alphab, setAlphab] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [RangeValue, setRangeValue] = useState(1000);

  const sortedProducts = useProductSorting(products, minToMaxPrice, maxToMinPrice, Alphab);

  return (
    <>
      <NavBar />
      <header className="hero__fix">
        <SearchBar setSearchedText={setSearchedText} />
        <Filters
          RangeValue={RangeValue}
          setRangeValue={setRangeValue}
          setMinToMaxPrice={setMinToMaxPrice} 
          setMaxToMinPrice={setMaxToMinPrice} 
          setAlphab={setAlphab}
        />
      </header>
      <main>
        <div className="products--container">
          {sortedProducts.map((p) => (
            <ProductCard p={p} key={p.id} searchedText={searchedText} RangeValue={RangeValue} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
