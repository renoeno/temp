import React, { useContext, useState } from "react";
import Link from "next/link";

import LoadingSpinner from "../UI/LoadingSpinner";

import cities from "../../lib/city.list.json";

import { TempContext } from "../../store/temp-context";

import classes from "./SearchBox.module.css";

const SearchBox = () => {
  const tempCtx = useContext(TempContext);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState(false);

  const selectCityHandler = () => {
    tempCtx.startLoading();
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      console.log(value);
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}-${
              tempCtx.language
            }`,
          };
          matchingCities.push(cityData);
        }
      }
    }

    return setResults(matchingCities);
  };

  return (
    <div className={classes.search}>
      {!tempCtx.isLoading && (
        <>
          {" "}
          <input
            type="text"
            placeholder={
              tempCtx.language === "en" ? "Search city" : "Procurar cidade"
            }
            className={classes.searchBar}
            value={query}
            onChange={onChangeHandler}
          />
          {query.length > 3 && (
            <ul>
              {results.length > 0 ? (
                results.map((city, index) => {
                  return (
                    <li key={city.slug}>
                      <Link href={`/location/${city.slug}`}>
                        <a onClick={selectCityHandler}>{city.name}</a>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>
                  {tempCtx.language === "en"
                    ? "No cities found."
                    : "Nenhuma cidade encontrada."}
                </li>
              )}
            </ul>
          )}
        </>
      )}
      {tempCtx.isLoading && <LoadingSpinner />}
    </div>
  );
};

export default SearchBox;
