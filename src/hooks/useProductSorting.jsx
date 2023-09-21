function useProductSorting(products, minToMaxPrice, maxToMinPrice, Alphab) {
    const sortedProducts = [...products];
  
    if (minToMaxPrice) {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (maxToMinPrice) {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
  
    if (Alphab) {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    return sortedProducts;
  }
  
  export default useProductSorting;