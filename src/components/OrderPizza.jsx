import React, { useState } from "react";
import axios from "axios";
import "../styles/OrderPizza.css";
import { useHistory } from "react-router-dom";
import formBanner from "../assets/form-banner.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function OrderPizza() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const basePrice = 85.5;
  const extraCost = ingredients.length * 5;
  const totalPrice = (basePrice + extraCost) * quantity;

  let history = useHistory();

  const isFormValid =
    size &&
    dough &&
    name.length >= 3 &&
    ingredients.length >= 4 &&
    ingredients.length <= 10;

  const handleIngredientChange = (ingredient) => {
    setIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setErrorMessage("Lütfen tüm gerekli alanları doğru şekilde doldurun!");
      return;
    }

    const payload = {
      isim: name,
      boyut: size,
      hamur: dough,
      malzemeler: ingredients,
      özel: note,
      miktar: quantity,
      toplam: totalPrice,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", payload);
      console.log("Sipariş Başarılı:", response.data);
      history.push({ pathname: "/success", state: { payload } });
    } catch (error) {
      console.error("Sipariş Hatası:", error);
      alert("Ağ Hatası");
    }
  };

  return (
    <main className="order-pizza">
      <header className="pizza-header">
        <div className="form-banner">
          <img src={formBanner} alt="Form Banner" />
        </div>
        <div className="navlink-container">
          <nav>
            <Link to="/" className="nav-link">
              Anasayfa -
            </Link>
            <Link to="/secenekler" className="nav-link">
              Seçenekler -
            </Link>
            <Link to="/orderpizza" className="nav-link">
              Sipariş Oluştur
            </Link>
          </nav>
        </div>
        <h2 id="pizza-header-title">Position Absolute Acı Pizza</h2>
        <div className="pizza-price-stars-code-container">
          <div className="price-tag">85.50₺</div>
          <div className="stars-code">
            <div className="pizza-stars">4.9</div>
            <div className="pizza-code">(200)</div>
          </div>
        </div>
        <p id="pizza-description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.
        </p>
      </header>
      <form
        className="pizza-form"
        onSubmit={handleSubmit}
        aria-labelledby="pizza-header-title"
        aria-describedby="pizza-description"
      >
        {errorMessage && (
          <div className="error-message" role="alert">
            {errorMessage}
          </div>
        )}
        <section className="pizza-size-and-dough-section">
          <fieldset className="radio-container">
            <legend>
              Boyut Seç <span className="required">*</span>
            </legend>
            <div className="radio-group-container">
              <div className="radio-align">
                <input
                  type="radio"
                  name="pizza-size"
                  id="small"
                  value="S"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label htmlFor="small">S</label>
              </div>
              <div className="radio-align">
                <input
                  type="radio"
                  name="pizza-size"
                  id="medium"
                  value="M"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label htmlFor="medium">M</label>
              </div>
              <div className="radio-align">
                <input
                  type="radio"
                  name="pizza-size"
                  id="large"
                  value="L"
                  onChange={(e) => setSize(e.target.value)}
                />
                <label htmlFor="large">L</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Hamur Seç <span className="required">*</span>
            </legend>
            <select
              name="dough"
              id="choose-dough"
              onChange={(e) => setDough(e.target.value)}
              required
              aria-required="true"
            >
              <option value="">&mdash; Hamur Kalinligi Seç &mdash;</option>
              <option value="Süpper İnce">Süpper İnce</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalin</option>
            </select>
          </fieldset>
        </section>
        <section className="ingredients-section">
          <fieldset>
            <legend>
              Ek Malzemeler (En az 4, en fazla 10 malzeme seçebilirsiniz.)
            </legend>
            <div className="checkbox-container">
              {[
                "Pepperoni",
                "Domates",
                "Biber",
                "Sosis",
                "Misir",
                "Sucuk",
                "Kanada Jambonu",
                "Zeytin",
                "Ananas",
                "Tavuk Izgara",
                "Jalepeno",
                "Kabak",
                "Soğan",
                "Sarımsak",
              ].map((ingredient) => (
                <div key={ingredient}>
                  <input
                    type="checkbox"
                    value={ingredient}
                    id={ingredient}
                    onChange={() => handleIngredientChange(ingredient)}
                    disabled={
                      ingredients.length >= 10 &&
                      !ingredients.includes(ingredient)
                    }
                  />
                  <label htmlFor={ingredient}>{ingredient}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </section>
        <section className="name-input-section">
          <label htmlFor="name">
            İsim <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınızı Giriniz..."
            required
            minLength={3}
          />
        </section>
        <section className="order-note-section">
          <label htmlFor="order-note">Sipariş Notu</label>
          <textarea
            className="order-note-input"
            id="order-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </section>
        <section className="give-order-section">
          <div className="quantity-button-container">
            <button
              type="button"
              className="add-subtract"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              aria-label="Azalt"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              type="button"
              className="add-subtract"
              onClick={() => setQuantity((prev) => prev + 1)}
              aria-label="Arttır"
            >
              +
            </button>
          </div>
          <div className="give-order-container">
            <h3>Sipariş Toplamı</h3>
            <p className="bold">
              <span>Seçimler</span> <span>{extraCost}₺</span>
            </p>
            <p className="red bold">
              <span>Toplam</span> <span>{totalPrice}₺</span>
            </p>
            <button
              type="submit"
              disabled={!isFormValid}
              aria-disabled={!isFormValid}
            >
              SİPARİŞ VER
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}

export default OrderPizza;
