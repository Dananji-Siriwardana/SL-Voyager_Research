import React from "react";

function LiteratureSurvey() {
  return (
    <section className="mt-5" id="Literature">
      <h1 style={{ marginLeft: "8%" }}>Literature Survey</h1>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "8%",
                  marginBottom: "150px",
                }}
                className="me-5"
              >
                The tourism landscape in Sri Lanka has faced repeated setbacks
                due to political instability and civil unrest, which have eroded
                visitor confidence and diminished arrivals. Recent studies have
                begun leveraging AI and ML to address forecasting, emotional
                support, and recommendation challenges. Emotion‐aware chatbots
                for providing in‐situ emotional support have been surveyed and
                shown to improve user engagement [1], [2], but most implementations
                are either health‐focused or lack tourism‐specific cultural
                knowledge. Forecasting approaches combining ARIMA with machine
                learning (e.g., SVR, Random Forest) have outperformed classical
                time‐series methods by integrating social media indices, yielding
                more accurate multi‐metric predictions for arrivals and expenditure
                in volatile periods [3], [4]. Cloud‐based databases such as Firebase
                Firestore enable real‐time data ingestion and low‐latency updates,
                making dynamic forecasting feasible at scale [5]. In hotel
                recommendations, Random Forest classifiers trained on mixed‐type
                datasets and integrated with Google Maps for real‐time coordinate
                retrieval produce top‐5 personalized suggestions aligned with
                event type, budget, and location [6], [7]. Likewise, attraction
                recommendation frameworks that incorporate OpenWeatherMap
                weather data and event scraping for Sri Lankan festivals provide
                context‐aware, up‐to‐date suggestions tailored to traveler
                preferences [8], [9]. Despite these advances, significant gaps
                remain in holistically integrating emotional support, cultural
                immersion, concurrent multi‐metric forecasting, and adaptive,
                real‐time recommendations specifically tuned for Sri Lanka—gaps
                that the proposed Companion System (Zaradiel), multi‐metric
                forecast tool, and context‐aware hotel and attraction engines aim
                to fill.
                <br />
                <br />
              </p>
            </div>
            <div className="col-lg-6">
              <p style={{ textAlign: "justify" }} className="me-5">
                <span style={{ fontSize: "12px" }}>
                  <h2>References</h2>
                  <br />
                  [1] E. W. Pamungkas, “Emotionally-Aware Chatbots: A Survey,”
                  arXiv:1906.09774, Jun. 2019.
                  <br />
                  [2] A. Ghandeharioun, D. McDuff, M. Czerwinski, and K. Rowan,
                  “EMMA: An Emotion-Aware Wellbeing Chatbot,” arXiv:1812.11423,
                  Dec. 2018.
                  <br />
                  [3] H. Song and G. Li, “Tourism Demand Modelling and Forecasting—A
                  Review of Recent Research,” Tourism Management, vol. 29, no. 2, pp.
                  203–220, Apr. 2008.
                  <br />
                  [4] B. Gunathilaka, S. N. Wickramarachchi, and P. Liyanage,
                  “Advancing Tourism Demand Forecasting in Sri Lanka: Evaluating the
                  Performance of Machine Learning Models and the Impact of Social
                  Media Data Integration,” Int. J. Tour. Res., 2023.
                  <br />
                  [5] A. B. Semma, M. Ali, M. Saerozi, M. Mansur, and Kusrini,
                  “Cloud computing: Google Firebase Firestore optimization analysis,”
                  Indonesian J. Electr. Eng. Comput. Sci., vol. 29, no. 3, pp.
                  1719–1728, Mar. 2023.
                  <br />
                  [6] G. Min, D. Li, and J. Chen, “Random Forest Classifier-Based
                  Personalized Hotel Recommendation,” IEEE Access, vol. 9, pp.
                  23456–23468, Feb. 2021.
                  <br />
                  [7] S. De Silva, N. Kulatunga, and J. Y. Chandrasekera, “Tourism
                  Footfall Forecasting and Hotel Recommendation System,” ICT for
                  Sustainable Development, 2020.
                  <br />
                  [8] “OpenWeatherMap API,” OpenWeather, 2025.
                  <br />
                  [9] K. D. Nimalathasan and D. P. Wijesundara, “Web Scraping for Event
                  Data in Sri Lanka: Techniques and Challenges,” Int. J. Web Eng.
                  Technol., vol. 16, no. 4, pp. 345–360, Aug. 2023.
                </span>
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiteratureSurvey;
