import React from "react";

export const DefaultTemplate = (props) => {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>

      <main>{props.children}</main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};
