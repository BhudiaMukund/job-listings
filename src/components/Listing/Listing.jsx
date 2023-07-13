import React, { useEffect } from "react";
import "./Listing.scss";

const Listing = ({ listing, setFilter, filter }) => {
  const handleUpdateFilter = (e) => {
    const newFilter = e.target.innerText;

    if (!filter.includes(newFilter)) {
      setFilter((filter) => [...filter, newFilter]);
    }
  };

  useEffect(() => {
    if (listing.new && listing.featured) {
      document
        .getElementById(`listing-${listing.id}`)
        .classList.add("featured");
    }
  }, []);

  return (
    <article id={`listing-${listing.id}`}>
      <div className="image-container">
        <img src={listing.logo} alt={`Logo of ${listing.company}`} />
      </div>
      <div className="listing-details-container">
        <div className="header">
          <span className="company">{listing.company}</span>
          {listing.new && <span className="new">New!</span>}
          {listing.featured && <span className="featured">Featured</span>}
        </div>
        <h1>{listing.position}</h1>
        <div className="listing-details">
          <span className="postedAt">{listing.postedAt}</span>
          <span className="divider"></span>
          <span className="contract">{listing.contract}</span>
          <span className="divider"></span>
          <span className="location">{listing.location}</span>
        </div>
      </div>
      <div className="filter-tablets-container">
        <button
          onClick={(e) => {
            handleUpdateFilter(e);
          }}
        >
          {listing.role}
        </button>
        <button
          onClick={(e) => {
            handleUpdateFilter(e);
          }}
        >
          {listing.level}
        </button>
        {listing.languages &&
          listing.languages.map((language, index) => {
            return (
              <button
                key={`language ${index}`}
                onClick={(e) => {
                  handleUpdateFilter(e);
                }}
              >
                {language}
              </button>
            );
          })}
        {listing.tools &&
          listing.tools.map((tool, index) => {
            return (
              <button
                key={`tool ${index}`}
                onClick={(e) => {
                  handleUpdateFilter(e);
                }}
              >
                {tool}
              </button>
            );
          })}
      </div>
    </article>
  );
};

export default Listing;
