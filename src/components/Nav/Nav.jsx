import React from "react";
import "./Nav.scss";

const Nav = ({ filter, setFilter }) => {
  const handleDeleteFilter = (filterToDelete) => {
    const newFilterArray = filter.filter(
      (filterItem) => filterItem !== filterToDelete
    );
    setFilter(newFilterArray);
  };
  return (
    <nav>
      <div className="filters">
        {filter.map((filter, index) => {
          return (
            <div className="filter" key={`filter-${index}`}>
              <span className="filter-description">{filter}</span>
              <button onClick={() => handleDeleteFilter(filter)}>
                <img
                  src="/images/icon-remove.svg"
                  alt={`Remove ${filter} filter`}
                />
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={() => setFilter([])} className="clear">
        Clear
      </button>
    </nav>
  );
};

export default Nav;
