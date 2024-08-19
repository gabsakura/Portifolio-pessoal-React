import React from 'react';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="scrollreveal.css" />
      <script
        src="https://kit.fontawesome.com/981a566169.js"
        crossOrigin="anonymous"
      ></script>
      <script src="https://unpkg.com/scrollreveal@4"></script>
    </Helmet>
  );
}

export default Header;