import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-left">
          <div className="contact">
            <h3>Teknolojik</h3>
            <h3>Yemekler</h3>
            <div className="contact-group">
              <img
                src="../../Assets/Iteration-2-aseets/footer/icons/icon-1.png"
                alt=""
              />
              <p>341 Londonderry Road,</p>
              <p>Istanbul Türkiye</p>
            </div>
            <div className="contact-group">
              <img
                src="../../Assets/Iteration-2-aseets/footer/icons/icon-2.png"
                alt=""
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="contact-group">
              <img
                src="../../Assets/Iteration-2-aseets/footer/icons/icon-3.png"
                alt=""
              />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div className="hot-menus">
            <h5>Sıccacık Menuler</h5>
            <ul>
              <li>
                <a href="#">Terminal Pizza</a>
              </li>
              <li>
                <a href="#">5 Kişilik Hackathlon Pizza</a>
              </li>
              <li>
                <a href="#">useEffect Tavuklu Pizza</a>
              </li>
              <li>
                <a href="#">Beyaz Console Frosty</a>
              </li>
              <li>
                <a href="#">Testler Geçti Mutlu Burger</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h3>Instagram</h3>
          <div className="insta-imgs">
            <img
              src="../../Assets/Iteration-2-aseets/footer/insta/li-0.png"
              alt=""
            />
            <img
              src="../../Assets/Iteration-2-aseets/footer/insta/li-1.png"
              alt=""
            />
            <img
              src="../../Assets/Iteration-2-aseets/footer/insta/li-2.png"
              alt=""
            />
            <img
              src="../../Assets/Iteration-2-aseets/footer/insta/li-3.png"
              alt=""
            />
            <img
              src="../../Assets/Iteration-2-aseets/footer/insta/li-4.png"
              alt=""
            />
            <img
              src="../../Assets/Iteration-2-aseets/footer/insta/li-5.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>&copy; 2023 Teknolojik Yemekler.</p>
        <img src="../../Assets/Iteration-2-aseets/icons/7.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;
