import React from "react";

function ResearchObjectives() {
  return (
    <section className="mt-5 objectives " id="Objectives">
      <h1 style={{ marginLeft: "8%" }}>Research Objectives</h1>
      <div className="mt-5" style={{ marginLeft: "15%", marginRight: "15%" }}>
        <div className="container mt-5">
          <div className="row align-items-center  d-flex">
            <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">1</div>
            </div>
            <div className="col-6">
              <h5>
                {" "}
                Assistant Companion System with Cultural Sensitivity
              </h5>
              <p style={{ textAlign: "justify" }}>
                This component develops Zaradiel, a chatbot using Flask and NLP to provide culturally appropriate advice, etiquette guidance, and stress-reducing responses. It ensures travelers receive empathetic, context-aware support tailored to Sri Lankan cultural norms.
              </p>
            </div>
          </div>

          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>

          <div className="row align-items-center justify-content-end  d-flex">
            <div className="col-6 text-right">
              <h5>
                {" "}
                Tourism Spending and Seasonal Forecasting{" "}
              </h5>
              <p style={{ textAlign: "justify" }}>
                {" "}
                This module employs LSTM neural networks and linear regression to predict tourist arrivals and spending with a 4.5% error rate, integrating SLTDA data, X posts, and weather forecasts. It supports efficient staffing, marketing, and inventory planning for tourism businesses.{" "}
              </p>
            </div>
            <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">2</div>
            </div>
          </div>

          <div className="row timeline">
            <div className="col-2">
              <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner top-left"></div>
            </div>
          </div>

          <div className="row align-items-center  d-flex">
            <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">3</div>
            </div>
            <div className="col-6">
              <h5>Hotel Recommendation System
              </h5>
              <p style={{ textAlign: "justify" }}>
              This component uses machine learning and web-scraped data to offer personalized hotel suggestions based on user preferences, budgets, and events. An interactive map and admin portal ensure real-time relevance and scalability.              </p>
            </div>
          </div>

          <div className="row timeline">
            <div className="col-2">
              <div className="corner top-right"></div>
            </div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2">
              <div className="corner left-bottom"></div>
            </div>
          </div>

          <div className="row align-items-center justify-content-end  d-flex">
            <div className="col-6 text-right">
              <h5>Attraction Recommendation System</h5>
              <p style={{ textAlign: "justify" }}>
                This module builds predictive models to recommend attractions based on user interests, seasonal trends, and live weather APIs. A hybrid architecture with an admin panel enables manual input for dynamic events, ensuring context-aware recommendations.
              </p>
            </div>
            <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div className="circle font-weight-bold">4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchObjectives;
