import React from "react";

//
const Header = () => {
  return (
    <>
      <div className="header-text">
        <h1 className="title">PokePlanner</h1>
        <section className="link-container">
          <div className="link">
            <a href="#">Gotta Catch 'Em</a>
          </div>
          <div className="link">
            <a href="#">Caught</a>
          </div>
          <div className="link">
            <a href="#">My Squad</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
