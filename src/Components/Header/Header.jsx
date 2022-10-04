import react from "react";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <div className="menu-icon">
        <span className="material-icons-outlined">menu</span>
      </div>
      <div className="header-left">
        <span className="headerText">Peak Shaving & Alert</span>
      </div>
      <div className="header-right">
        <span className="headerText">Carlsberg Group</span>

        <span className="material-icons-outlined">notifications</span>
        <span
          style={{
            color: "white",
            fontSize: "0.75rem",
            position: "absolute",
            backgroundColor: "red",
            padding: "1px",
            borderRadius: "50%"
          }}
        >
          3
        </span>
      </div>
    </div>
  );
}
