import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchFilter = (data) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterCriteria = useMemo(
    () => searchParams.get("filterBy"),
    [searchParams]
  );

  useEffect(() => {
    if (data) {
      const NewFilteredProducts = data.filter((product) => {
        return product.category == filterCriteria;
      });
      setFilteredProducts(NewFilteredProducts);
    }
  }, [filterCriteria]);

  return { filteredProducts };
};
