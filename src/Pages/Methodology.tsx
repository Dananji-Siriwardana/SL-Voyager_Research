import React from "react";

function Methodology() {
  return (
    <section className="mt-5" id="Methodology">
      <h1 className="mb-5" style={{ marginLeft: "8%" }}>
        Methodology
      </h1>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pb-4 pb-lg-0 d-flex flex-column align-items-center">
              <img
                className="img-fluid rounded shadow mb-4"
                style={{
                  maxHeight: "400px",
                  maxWidth: "70%",
                  objectFit: "contain",
                  marginRight: "100px",
                }}
                src="/methodology.png"
                alt="Elephant illustration for Smart Farm Security System"
              />
            </div>
            <div className="col-lg-6">
              <div className="methodology-content">
                <p className="lead text-justify mb-4">
                  The proposed SL-VOYAGER: AI-Driven Tourism Management System consists of four main components:
                </p>
                <ol
                  className="list-group list-group-numbered mb-4"
                  style={{ fontWeight: 600 }}
                >
                  <li className="list-group-item border-0">
                    Assistant Companion System (Zaradiel Chatbot)
                  </li>
                  <li className="list-group-item border-0">
                    Tourism Spending and Seasonal Forecasting
                  </li>
                  <li className="list-group-item border-0">
                    Hotel Recommendation System
                  </li>
                  <li className="list-group-item border-0">
                    Attraction Recommendation System
                  </li>
                </ol>

                <div className="component-section mb-4">
                  <h4 className="fw-bold">
                    1. Assistant Companion System (Zaradiel Chatbot)
                  </h4>
                  <p className="text-justify">
                    This component uses Flask and NLP to develop Zaradiel, a chatbot that delivers culturally sensitive advice, etiquette guidance, and stress-aware responses. It processes user queries in real-time, ensuring empathetic interactions that enhance traveler engagement with Sri Lankan culture.
                  </p>
                </div>

                <div className="component-section mb-4">
                  <h4 className="fw-bold">
                    2. Tourism Spending and Seasonal Forecasting
                  </h4>
                  <p className="text-justify">
                    This module leverages LSTM neural networks and linear regression (via Streamlit and Scikit-learn) to predict tourist arrivals and spending. It integrates historical SLTDA data, real-time X posts, and weather forecasts to achieve a 4.5% error rate, enabling precise resource planning.
                  </p>
                </div>

                <div className="component-section mb-4">
                  <h4 className="fw-bold">
                    3. Hotel Recommendation System
                  </h4>
                  <p className="text-justify">
                    This component employs machine learning algorithms (collaborative and content-based filtering) to suggest hotels based on user preferences, budgets, and events. Web-scraped data from sources like publicholidays.lk and an interactive map ensure accurate, real-time recommendations.
                  </p>
                </div>

                <div className="component-section">
                  <h4 className="fw-bold">
                    4. Attraction Recommendation System
                  </h4>
                  <p className="text-justify">
                    This module uses a Random Forest Classifier to recommend attractions based on user interests, seasonal patterns, and live weather data from APIs like OpenWeatherMap. A hybrid approach with an admin panel allows manual input for dynamic events, addressing data fragmentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
