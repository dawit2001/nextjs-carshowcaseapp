import { SearchManufacturerProps } from "@/types";
import React from "react";
import { Combobox, Transition } from "@headlessui/react";

const SearchProducer = ({
  manufacutrer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full"></div>
      </Combobox>
    </div>
  );
};

export default SearchProducer;
