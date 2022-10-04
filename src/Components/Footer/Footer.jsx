import React, { useState } from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";
import "./Footer.css";
const initaildata = [
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany"
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Maria Anders",
    Country: "Australia"
  },
  {
    Company: "Steve",
    Contact: "Maria Anders",
    Country: "france"
  }
];
export default function Footer() {
  const [data, setState] = useState(initaildata);

  const updatedata = function (newdata) {
    let news = [...data];
    news.push(newdata);
    setState(news);
    console.log(news);
  };
  const handleClick = function (e) {
    let id = e.target.parentElement.parentElement.getAttribute("id");
    let newArray = [];
    data.forEach((elem, index) => {
      if (index !== id) {
        console.log(elem);
        newArray.push(elem);
      }
    });
    setState(newArray);
  };
  return (
    <div id="footer">
      <Form data={data} updatedata={updatedata} />
      <Table data={data} handleClick={handleClick} />
    </div>
  );
}
