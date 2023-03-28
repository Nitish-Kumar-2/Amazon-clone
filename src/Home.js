import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img className="home__image" src="img/amazon_prime_video.jpg" alt="" />
      <div className="home__row">
        <Product
          id="1"
          title="Fire-Boltt Ninja 3 Smartwatch Full Touch 1.69 & 60 Sports Modes with IP68, Sp02 Tracking, Over 100 Cloud based watch faces - Black "
          price={11.45}
          rating={5}
          image="img/p10.jpg"
        />

        <Product
          id="1"
          title="NIVEA Body Lotion for Very Dry Skin, Nourishing Body Milk with 2x Almond Oil for 48H Moisturization, For Men & Women, 400 ml "
          price={13.5}
          rating={4}
          image="img/p2.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="HP 15s-Ryzen 3 3250U 8GB SDRAM/256GB SSD 15.6inch HD, Micro-Edge Laptop/AMD Radeon/Dual Speakers/Win 11 Home/MS Office/Fast Charge"
          price={5.12}
          rating={3}
          image="img/p4.jpg"
        />

        <Product
          id="1"
          title="PHILIPS BT1232/15 Skin-friendly Beard Trimmer - DuraPower Technology, Cordless Rechargeable with USB Charging, Charging indicator, Travel lock, No Oil Needed, Blue "
          price={50}
          rating={4}
          image="img/p8.jpg"
        />
        <Product
          id="1"
          title="Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12 "
          price={60.10}
          rating={5}
          image="img/p5.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="HP 15s-Ryzen 3 3250U 8GB SDRAM/256GB SSD 15.6inch HD, Micro-Edge Laptop/AMD Radeon/Dual Speakers/Win 11 Home/MS Office/Fast Charge"
          price={80.0}
          rating={5}
          image="img/p6.jpg"
        />

        <Product
          id="1"
          title="Noise ColorFit Pulse Grand Smart Watch with 1.69, HD Display, 60 Sports Modes,Call Notification, Quick Replies"
          price={20.9}
          rating={5}
          image="img/p9.jpg"
        />
        <Product
          id="1"
          title="Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus "
          price={30}
          rating={5}
          image="img/p7.jpg"
        />
        <Product
          id="1"
          title="Fire-Boltt Ninja 3 Smartwatch Full Touch 1.69 & 60 Sports Modes with IP68, Sp02 Tracking, Over 100 Cloud based"
          price={15}
          rating={5}
          image="img/product1.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Fire-Boltt Ninja 3 Smartwatch Full Touch 1.69 & 60 Sports Modes with IP68, Sp02 Tracking, Over 100 Cloud based watch faces - Black "
          price={27}
          rating={5}
          image="img/p3.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
