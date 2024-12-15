import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "../styles/OrderPizza.css";
import { useHistory } from "react-router-dom";
import formBanner from "../assets/form-banner.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function OrderPizza() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      size: "",
      dough: "",
      ingredients: [],
      quantity: 1,
      name: "",
      note: "",
    },
  });

  let history = useHistory();

  // Watching form values to dynamically calculate extraCost and totalPrice
  const ingredients = watch("ingredients", []);
  const quantity = watch("quantity", 1);

  const basePrice = 85.5;
  const extraCost = ingredients.length * 5;
  const totalPrice = (basePrice + extraCost) * quantity;

  const handleIngredientChange = (ingredient, selectedIngredients) => {
    const updatedIngredients = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter((item) => item !== ingredient)
      : [...selectedIngredients, ingredient];

    if (updatedIngredients.length <= 10) {
      setValue("ingredients", updatedIngredients);
    }
  };

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      extraCost,
      totalPrice,
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
        onSubmit={handleSubmit(onSubmit)}
        aria-labelledby="pizza-header-title"
        aria-describedby="pizza-description"
      >
        <section className="pizza-size-and-dough-section">
          <fieldset className="radio-container">
            <legend>
              Boyut Seç <span className="required">*</span>
            </legend>
            <div className="radio-group-container">
              {["S", "M", "L"].map((size) => (
                <div className="radio-align" key={size}>
                  <input
                    type="radio"
                    name="pizza-size"
                    id={size}
                    value={size}
                    {...register("size", { required: "Boyut Seçmelisiniz." })}
                  />
                  <label htmlFor={size}>{size}</label>
                </div>
              ))}
            </div>
            {errors.size && (
              <p className="error-message">{errors.size.message}</p>
            )}
          </fieldset>

          <fieldset>
            <legend>
              Hamur Seç <span className="required">*</span>
            </legend>
            <select
              name="dough"
              id="choose-dough"
              className="pizza-dough-select"
              {...register("dough", { required: "Hamur seçmelisiniz!" })}
              aria-required="true"
            >
              <option value="">&mdash; Hamur Kalinligi Seç &mdash;</option>
              <option value="Süpper İnce">Süpper İnce</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalin</option>
            </select>
            {errors.dough && (
              <p className="error-message">{errors.dough.message}</p>
            )}
          </fieldset>
        </section>
        <section className="ingredients-section">
          <fieldset>
            <legend>
              Ek Malzemeler (En az 4, en fazla 10 malzeme seçebilirsiniz.)
            </legend>
            <Controller
              name="ingredients"
              control={control}
              rules={{
                validate: (value) =>
                  value.length >= 4 || "En az 4 malzeme seçmelisiniz!",
              }}
              render={({ field }) => (
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
                        onChange={() =>
                          handleIngredientChange(ingredient, field.value)
                        }
                        checked={field.value.includes(ingredient)}
                        disabled={
                          field.value.length >= 10 &&
                          !field.value.includes(ingredient)
                        }
                      />
                      <label htmlFor={ingredient}>{ingredient}</label>
                    </div>
                  ))}
                </div>
              )}
            />
            {errors.ingredients && (
              <p className="error-message">{errors.ingredients.message}</p>
            )}
          </fieldset>
        </section>
        <section className="name-input-section">
          <label htmlFor="name">
            İsim <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="pizza-name-input"
            placeholder="Adınızı Giriniz..."
            {...register("name", {
              required: "İsim girilmesi zorunludur!",
              minLength: {
                value: 3,
                message: "İsim en az 3 karakter olmalıdır!",
              },
            })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </section>
        <section className="order-note-section">
          <label htmlFor="order-note">Sipariş Notu</label>
          <textarea
            className="order-note-input"
            id="order-note"
            {...register("note")}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </section>
        <section className="give-order-section">
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <div className="quantity-button-container">
                <button
                  type="button"
                  className="add-subtract"
                  onClick={() => field.onChange(Math.max(field.value - 1, 1))}
                  aria-label="Azalt"
                >
                  -
                </button>
                <p>{field.value}</p>
                <button
                  type="button"
                  className="add-subtract"
                  onClick={() => field.onChange(field.value + 1)}
                  aria-label="Arttır"
                >
                  +
                </button>
              </div>
            )}
          />
          <div className="give-order-container">
            <h3>Sipariş Toplamı</h3>
            <p className="bold">
              <span>Seçimler</span> <span>{extraCost.toFixed(2)}₺</span>
            </p>
            <p className="red bold">
              <span>Toplam</span> <span>{totalPrice.toFixed(2)}₺</span>
            </p>
            <button type="submit" className="order-submit-button">
              SİPARİŞ VER
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}

export default OrderPizza;
