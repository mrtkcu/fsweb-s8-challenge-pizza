import { useHistory } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  const history = useHistory(); // Initialize useHistory hook

  const handleButtonClick = () => {
    history.push("/orderpizza"); // Redirect to the OrderPizza page
  };

  return (
    <>
      <div className="image-container">
        <div className="welcome">
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
          <button onClick={handleButtonClick}>ACIKTIM</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
