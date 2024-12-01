import React, { useState } from "react";
import axios from "axios";
import "../styles/OrderPizza.css";

function OrderPizza() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const basePrice = 85.5;
  const extraCost = ingredients.length * 5;
  const totalPrice = (basePrice + extraCost) * quantity;

  const handleIngredientChange = (ingredient) => {
    setIngredients(
      (prev) =>
        prev.includes(ingredient)
          ? prev.filter((item) => item !== ingredient) // Remove ingredient
          : [...prev, ingredient] // Add ingredient
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!size || !dough || !name) {
      alert("Lütfen zorunlu alanları doldurun!");
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
      alert("Siparişiniz başarıyla gönderildi!");
    } catch (error) {
      console.error("Sipariş Hatası:", error);
      alert("Sipariş gönderilirken bir hata oluştu.");
    }
  };

  return (
    <main className="order-pizza">
      <header className="pizza-header">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="pizza-price-stars-code-container">
          <div className="price-tag">85.50₺</div>
          <div className="stars-code">
            <div className="pizza-stars">4.9</div>
            <div className="pizza-code">(200)</div>
          </div>
        </div>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.
        </p>
      </header>
      <form className="pizza-form" onSubmit={handleSubmit}>
        <section className="pizza-size-and-dough-section">
          <div className="size-container">
            <h3>
              Boyut Seç <span className="required">*</span>
            </h3>
            <div className="radio-align">
              <input
                type="radio"
                name="pizza-size"
                id="small"
                value="Küçük"
                onChange={(e) => setSize(e.target.value)}
              />
              <label htmlFor="small">Küçük</label>
            </div>
            <div className="radio-align">
              <input
                type="radio"
                name="pizza-size"
                id="medium"
                value="Orta"
                onChange={(e) => setSize(e.target.value)}
              />
              <label htmlFor="medium">Orta</label>
            </div>
            <div className="radio-align">
              <input
                type="radio"
                name="pizza-size"
                id="large"
                value="Büyük"
                onChange={(e) => setSize(e.target.value)}
              />
              <label htmlFor="large">Büyük</label>
            </div>
          </div>
          <div className="dough-container">
            <h3>
              <label htmlFor="choose-dough">
                Hamur Seç <span className="required">*</span>
              </label>
            </h3>
            <select
              name="dough"
              id="choose-dough"
              onChange={(e) => setDough(e.target.value)}
            >
              <option value="">Hamur Kalinligi</option>
              <option value="thin">Ince</option>
              <option value="medium">Orta</option>
              <option value="thick">Kalin</option>
            </select>
          </div>
        </section>
        <section className="ingredients-section">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
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
                />
                <label htmlFor={ingredient}>{ingredient}</label>
              </div>
            ))}
          </div>
        </section>
        <section className="name-input-section">
          <h3>
            <label htmlFor="name">İsim </label>
          </h3>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınızı Giriniz..."
          />
        </section>
        <section className="order-note-section">
          <h3>
            <label htmlFor="order-note">Sipariş Notu</label>
          </h3>
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
            >
              -
            </button>
            {quantity}
            <button
              type="button"
              className="add-subtract"
              onClick={() => setQuantity((prev) => prev + 1)}
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
            <button type="submit">SİPARİŞ VER</button>
          </div>
        </section>
      </form>
    </main>
  );
}

export default OrderPizza;
