import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <p>Made by <strong>Gaurav Bhandari</strong></p>
      <p>
        <a href="www.linkedin.com/in/gaurav-bhandari-4b7387224/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          LinkedIn
        </a> |{" "}
        <a href="https://github.com/iGauravvv" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">
          GitHub
        </a> |{" "}
        <a href="mailto:bhandari25gaurav@gmail.com" className="text-red-600 underline">
          Email
        </a>
      </p>
    </footer>
  );
}
