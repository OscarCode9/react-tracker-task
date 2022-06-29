import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <p>Version 1.0</p>
      <Link to="/">Go back </Link>
      <Footer></Footer>
    </div>
  );
}
