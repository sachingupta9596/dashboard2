import React from "react";
import "./Form.css";

export default function Form({ data, updatedata }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    let obj = {};

    obj.Company = e.target[0].value;
    obj.Contact = e.target[1].value;
    obj.Country = e.target[2].value;
    console.log(obj);
    // data.push(obj);
    updatedata(obj);
    // console.log(data);
    // let table = document.getElementById("tabledata");

    // //console.log(companyname, contact, company);
    // let tr = document.createElement("tr");
    // for (let i = 0; i <= 3; i++) {
    //   if (i < 3) {
    //     let td = document.createElement("td");
    //     td.innerText = e.target[0].value;
    //     tr.append(td);
    //   } else {
    //     let td = document.createElement("td");
    //     let span = document.createElement("span");
    //     span.innerHTML = "delete";
    //     span.classList.add("material-icons-outlined");
    //     span.classList.add("delete");
    //     td.append(span);
    //     tr.append(td);
    //   }
    // }
    // table.append(tr);
  }
  return (
    <div className="formdiv">
      <h2>Create ALert</h2>
      <form action="#" id="submitForm" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            className="inputText"
            placeholder="Company Name"
            name="Company"
            id="Nameinput"
          />
        </div>

        <div className="input">
          <input
            type="text"
            className="inputText"
            placeholder="Contact"
            name="Contact"
            id="Contactinput"
          />
        </div>
        <div className="input">
          <input
            type="text"
            className="inputText"
            placeholder="Country"
            name="Country"
            id="Countryinput"
          />
        </div>
        <div className="input">
          <input type="submit" className="inputText" placeholder="Submit" />
        </div>
      </form>
    </div>
  );
}
