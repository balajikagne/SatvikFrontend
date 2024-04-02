// components/NotFoundPage.js
import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <img src="https://via.placeholder.com/400" alt="404" />
    </div>
  );
};

export default NotFoundPage;

