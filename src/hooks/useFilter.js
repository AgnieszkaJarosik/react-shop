import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "actions/products";

const useFilter = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const [filtered, setFilteredArr] = useState([]);

  useEffect(()=> {
    if(products.length === 0) {
      dispatch(fetchData());
      console.log('fetching')
    }
  },[]);

  const setFiltered = ({ name, category, manufacture, featured }) => {
    let results = [...products];
    if(name && name.length) {
      const searchText = name.toLowerCase();
      results = results.filter(p => p.name.toLowerCase().includes(searchText));
    }

    if (category) {
      results = results.filter(p => p.category === category);
    }

    if (manufacture) {
      results = results.filter(p => p.manufacture === manufacture);
    }

    if (featured) {
      results = results.filter(p => p.featured === featured);
    }
    setFilteredArr(results);
  }

  const getManufactures = () => {
    return [...new Set(products.map(p => p.manufacture))];
  }

  return [ filtered, setFiltered, getManufactures ];
}

export default useFilter;
