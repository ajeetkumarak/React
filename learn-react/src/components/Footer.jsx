import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>Copyright © {year}</p>
      <p>...The Magic You're Looking For Is In The Work You're Avoiding...</p>
    </footer>
  );
}

export default Footer;
