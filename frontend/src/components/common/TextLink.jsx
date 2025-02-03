import React from "react";
import { Link } from "react-router-dom";

export default function TextLink({ label, to }) {
  return (
    <Link to={to} className="text-sm text-blue-600 hover:text-blue-500">
      { label }
    </Link>
  );
}
