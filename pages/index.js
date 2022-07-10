import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>sneakers There are many variations passages</p>
    </div>

    <div className="products-container">
      <div>products</div>
    </div>

    <div>FOOTER</div>
  </div>
);

export default Home;
