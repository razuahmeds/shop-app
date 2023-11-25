import React from "react";
import "../styles/Navbars.css";

function Navbars() {
  return (
    <div className="navbars">
      <div className="nav-logo">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fshopping-logo-design-vector&psig=AOvVaw3hQT0-DoV2pU8Qz8sas5K-&ust=1700999092130000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjSlseJ34IDFQAAAAAdAAAAABAL"
          alt="logo"
        />
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbars;
