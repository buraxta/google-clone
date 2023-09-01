import SearchHeader from "@/components/SearchHeader";
import React from "react";

const SearchLayout = ({ children }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default SearchLayout;
