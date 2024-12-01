import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "../styles/SuccessPage.css";

function SuccessPage() {
  const history = useHistory();

  return (
    <main className="success-page">
      <section className="congrats">
        <p>TEBRİKLER</p>
        <p>SİPARİŞİNİZ ALINDI!</p>
      </section>
    </main>
  );
}

export default SuccessPage;
