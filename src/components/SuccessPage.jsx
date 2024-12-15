import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import "../styles/SuccessPage.css";

function SuccessPage() {
  // Safely access payload
  const location = useLocation();
  const { payload } = location.state || {};

  return (
    <main className="success-page">
      <div className="congrats">
        <p className="lezzet">lezzetin yolda</p>
        <p className="order-taken">SİPARİŞ ALINDI</p>
        <hr />
        <div className="order-receipt">
          <h4 className="order-name">Position Absolute Acı Pizza</h4>
          <div className="order-info">
            <p>
              Boyut: <span className="bold">{payload.size}</span>
            </p>
            <p>
              Hamur: <span className="bold">{payload.dough}</span>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <span className="bold">{payload.ingredients.join(", ")}</span>
            </p>
          </div>
          <div className="order-total">
            <h4>Sipariş Toplamı</h4>
            <div className="order-group">
              <p>Seçimler</p>
              <p className="bold">{5 * payload.ingredients.length}₺</p>
            </div>
            <div className="order-group">
              <p>Toplam&nbsp;&nbsp;</p>
              <p className="bold">{payload.totalPrice}₺</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SuccessPage;
