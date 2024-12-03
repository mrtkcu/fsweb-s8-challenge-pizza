import { useHistory } from "react-router-dom";
import "../styles/HomePage.css";
import Footer from "./Footer";

function HomePage() {
  const history = useHistory(); // Initialize useHistory hook

  const handleButtonClick = () => {
    history.push("/orderpizza"); // Redirect to the OrderPizza page
  };

  return (
    <>
      <div className="image-container">
        <div className="welcome">
          <p className="campaign-p">fırsatı kaçırma</p>
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
          <button onClick={handleButtonClick}>ACIKTIM</button>
        </div>
      </div>
      <div className="content-container">
        <div className="navbar">
          <ul>
            <li className="nav-item-group">
              <a href="">
                <img src="../../Assets/Iteration-2-aseets/icons/1.svg" alt="" />
                <p className="">Ramen</p>
              </a>
            </li>

            <li className="nav-item-group">
              <a href="">
                <img src="../../Assets/Iteration-2-aseets/icons/2.svg" alt="" />
                <p>Pizza</p>
              </a>
            </li>

            <li className="nav-item-group">
              <a href="">
                <img src="../../Assets/Iteration-2-aseets/icons/3.svg" alt="" />
                <p>Burger</p>
              </a>
            </li>

            <li className="nav-item-group">
              <a href="">
                <img src="../../Assets/Iteration-2-aseets/icons/4.svg" alt="" />
                <p>French fries</p>
              </a>
            </li>

            <li className="nav-item-group">
              <a href="">
                <img src="../../Assets/Iteration-2-aseets/icons/5.svg" alt="" />
                <p>Fast Food</p>
              </a>
            </li>

            <li className="nav-item-group">
              <a href="">
                <img src="../../Assets/Iteration-2-aseets/icons/6.svg" alt="" />
                <p>Soft drinks</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="banner">
          <div className="left-container">
            <div className="overlay-container">
              <img
                src="../../Assets/Iteration-2-aseets/cta/kart-1.png"
                alt="Special pizza offer"
                className="kart-1"
              />
              <div className="overlay-content">
                <h3>Özel</h3>
                <h3>Lezzetus</h3>
                <p>Position: Absolute Acı Burger</p>
                <button className="cta-button">SİPARİŞ VER</button>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="kart kart-2">
              <img
                src="./../Assets/Iteration-2-aseets/cta/kart-2.png"
                alt="Hackathlon Burger Menu"
              />
              <div className="kart-content">
                <h2>Hackathlon</h2>
                <h2>Burger Menü</h2>
                <button className="cta-button">SİPARİŞ VER</button>
              </div>
            </div>
            <div className="kart kart-3">
              <img
                src="./../Assets/Iteration-2-aseets/cta/kart-3.png"
                alt="Fast delivery"
              />
              <div className="kart-content">
                <p className="black">
                  <span className="red">Çooooook</span> hızlı
                </p>
                <p className="black">npm gibi kurye</p>
                <button className="cta-button">SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <p className="menu-heading-p red">en çok paketlenenen menüler</p>
          <h1 className="menu-heading-h1">
            Acıktıran Kodlara Doyuran Lezzetler
          </h1>
          <div className="navbar">
            <ul>
              <li className="nav-item-group">
                <a href="">
                  <img
                    src="../../Assets/Iteration-2-aseets/icons/1.svg"
                    alt=""
                  />
                  <p className="">Ramen</p>
                </a>
              </li>

              <li className="nav-item-group">
                <a href="">
                  <img
                    src="../../Assets/Iteration-2-aseets/icons/2.svg"
                    alt=""
                  />
                  <p>Pizza</p>
                </a>
              </li>

              <li className="nav-item-group">
                <a href="">
                  <img
                    src="../../Assets/Iteration-2-aseets/icons/3.svg"
                    alt=""
                  />
                  <p>Burger</p>
                </a>
              </li>

              <li className="nav-item-group">
                <a href="">
                  <img
                    src="../../Assets/Iteration-2-aseets/icons/4.svg"
                    alt=""
                  />
                  <p>French fries</p>
                </a>
              </li>

              <li className="nav-item-group">
                <a href="">
                  <img
                    src="../../Assets/Iteration-2-aseets/icons/5.svg"
                    alt=""
                  />
                  <p>Fast Food</p>
                </a>
              </li>

              <li className="nav-item-group">
                <a href="">
                  <img
                    src="../../Assets/Iteration-2-aseets/icons/6.svg"
                    alt=""
                  />
                  <p>Soft drinks</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="foods">
            <div className="food">
              <img
                src="../../Assets/Iteration-2-aseets/pictures/food-1.png"
                alt=""
              />
              <div className="food-info">
                <h4 className="food-heading">Terminal Pizza</h4>
                <div className="food-details">
                  <p className="food-star">4.9</p>
                  <p className="food-code">(200)</p>
                  <p className="food-price">60₺</p>
                </div>
              </div>
            </div>
            <div className="food">
              <img
                src="../../Assets/Iteration-2-aseets/pictures/food-2.png"
                alt=""
              />
              <div className="food-info">
                <h4 className="food-heading">Position Absolute Acı Pizza</h4>
                <div className="food-details">
                  <p className="food-star">4.9</p>
                  <p className="food-code">(928)</p>
                  <p className="food-price">85₺</p>
                </div>
              </div>
            </div>
            <div className="food">
              <img
                src="../../Assets/Iteration-2-aseets/pictures/food-3.png"
                alt=""
              />
              <div className="food-info">
                <h4 className="food-heading">useEffect Tavuklu Burger</h4>
                <div className="food-details">
                  <p className="food-star">4.9</p>
                  <p className="food-code">(462)</p>
                  <p className="food-price">75₺</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
