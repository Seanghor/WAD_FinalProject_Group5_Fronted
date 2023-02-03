import React from "react";
import Pan from "../.././assets/image/pan/pan5-removebg.png";
import Bowl from "../.././assets/image/bowl/bowl1.jpg";
import Microwave from "../.././assets/image/microwave/microwave1.jpg";
import Pot from "../.././assets/image/pot/pot1.jpg";
import Card from "../../components/home/Card";
import ".././styles/home.css";
import ProductCard from "../../components/home/ProductCard";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  return (
    <div className="">
      {/* First Row Start */}
      <div className="">
        <div className="" id="Bg">
          <div className="container">
            <div className="row">
              <div class="col-md-6 ">
                <div id="card1">
                  <div class="model">
                    <h2>New Model</h2>
                    <p>
                      <li class="nav-link">Shop Now</li>
                    </p>
                    <h5>
                      Anodized to absorb, distribute and transfer heat evenly
                      and efficiently, these two frying pans sautée mushrooms,
                      fry eggs, caramelize onions and bake frittatas.
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div id="card">
                  <div class="model">
                    <div class="image">
                      <img src={Pan} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* First Row End */}

      {/* Container Section Start */}
      <section className="bg-color">
        <div className="container">
          <div className="row">
            <Card img={Pan} name="Pan" linkName=">> View More" />
            <Card img={Bowl} name="Bowl" linkName=">> View More" />
            <Card img={Microwave} name="Microwave" linkName=">> View More" />
            <Card img={Pot} name="Pot" linkName=">> View More" />
          </div>

          {/* Top Picks For You Start */}
          <div className="title">
            <h2>
              <span>Top Picks For You</span>
            </h2>
            <p>
              Find a bright ideal to suit your taste with our great selection of
              suspension, florr and table lights.
            </p>
          </div>
          {/* Top Picks For You End */}

          {/* Product Card Start */}
          <div className="row">
            <ProductCard
              img={Pan}
              name="Pan"
              newPrice="10.00"
              oldPrice="15.00"
            />
            <ProductCard
              img={Bowl}
              name="Bowl"
              newPrice="4.00"
              oldPrice="9.00"
            />
            <ProductCard
              img={Microwave}
              name="Microwave"
              newPrice="81.00"
              oldPrice="89.00"
            />
            <ProductCard
              img={Pot}
              name="Pot"
              newPrice="15.00"
              oldPrice="19.00"
            />
          </div>
          {/* Product Card End */}
        </div>
      </section>
      {/* Container Section End */}
    </div>
  );
};

export default Home;
