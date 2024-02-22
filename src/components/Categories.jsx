import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <ul
      style={{
        listStyleType: "none",
        padding: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <li className="text-white" style={{ marginRight: "10px" }}>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Inicio
        </Link>
      </li>
      <li className="text-white" style={{ marginRight: "10px" }}>
        <Link to={"/category/makeup"}>
        <FontAwesomeIcon icon={faStarHalfStroke} className="mr-2" />
          Makeup
        </Link>
      </li>
      <li className="text-white">
        <Link to={"/category/nails"}>
          <FontAwesomeIcon icon={faHandSparkles} className="mr-2" />
          Nails
        </Link>
      </li>
    </ul>
  );
};

export default Categories;
