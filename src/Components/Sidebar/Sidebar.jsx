import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <h3>Grid Manager 2.0</h3>
          <hr />
        </div>
        <span className="material-icons-outlined">close</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">dashboard</span> Dashboard
        </li>
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">inventory_2</span> Products
        </li>
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">fact_check</span> Inventory
        </li>
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">add_shopping_cart</span>
          Purchase Orders
        </li>
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">shopping_cart</span> Sales
          Orders
        </li>
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">poll</span> Reports
        </li>
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">settings</span> Settings
        </li>
      </ul>
    </aside>
  );
}
