"use client";
import { useState } from "react";
import SearchProducer from "./SearchProducer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const submitController = () => {};
  return (
    <form className="searchbar" onSubmit={submitController}>
      <div className="searchbar__item">
        <SearchProducer
          manufacutrer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
