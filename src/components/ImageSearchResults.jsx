import Link from "next/link";
import React from "react";

const ImageSearchResults = ({ results }) => {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group ">
              <Link href={result.image.contextLink}>
                <img
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                  src={result.link}
                  alt={result.title}
                />
              </Link>
              <Link
                className="group-hover:underline truncate text-xl"
                href={result.image.contextLink}
              >
                <h2>{result.title}</h2>
              </Link>
              <Link
                className="group-hover:underline text-gray-600"
                href={result.image.contextLink}
              >
                {result.displayLink}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResults;
