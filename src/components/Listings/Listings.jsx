import React from "react";
import "./Listings.scss";
import Listing from "../Listing/Listing";

const Listings = ({ listingData, setFilter, filter }) => {
  return (
    <main>
      {listingData.map((listing) => {
        return (
          <Listing key={listing.id} listing={listing} filter={filter} setFilter={setFilter} />
        );
      })}
    </main>
  );
};

export default Listings;
