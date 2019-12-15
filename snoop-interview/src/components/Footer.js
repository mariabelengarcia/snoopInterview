import React from 'react';
import '../App.css';


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    zIndex: 20,
    bottom: "0",
    height: "60px",
    width: "100%",
};

function Footer() {
  return (
    <div style={style}>
        <span>Snoop Consulting Interview @2019</span>
    </div>
  );
}

export default Footer;