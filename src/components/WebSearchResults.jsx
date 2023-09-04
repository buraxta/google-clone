import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

const WebSearchResults = ({ results }) => {
  return (
    <div className="w-full max-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%]">
      <p className="text-gray-600 text-sm mb-5 bt-3 lg:pl-42">
        About {results.searchInformation?.formattedTotalResults} result (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{parse(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};

export default WebSearchResults;
