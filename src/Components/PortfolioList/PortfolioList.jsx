import React from "react";
import "./PortfolioList.scss";

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfoliList active" : "portfolioList"}
      onClick={() => {
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
}
