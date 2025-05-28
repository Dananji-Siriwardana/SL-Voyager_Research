import React from "react";

function ResearchProblem() {
  return (
    <section className="mt-1" id="Problem">
      <h1 style={{ marginLeft: "8%" }}>Research Problem & Solution</h1>
      <br />
      <br />
      <div className="container-fluid " id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 style={{ fontWeight: "700" }} className="ms-3">
                Proposed Problem
              </h5>
              <h5
                style={{ fontWeight: "700", color: "#0a0a56" }}
                className="ms-3"
              >
                How can Sri Lanka’s tourism industry address seasonal variations, data fragmentation, and post-COVID recovery challenges to enhance traveler experiences and operational efficiency?{" "}
              </h5>
              <p style={{ textAlign: "justify" }} className="ms-3 mt-4">
                Traditional tourism management systems in Sri Lanka face issues such as inconsistent visitor forecasting, fragmented data sources, limited personalization, and lack of cultural sensitivity. These challenges result in inefficient resource allocation, reduced traveler satisfaction, and missed economic opportunities, particularly during off-peak seasons.              </p>
            </div>
            {/* <div className="col-lg-6 pb-4 pb-lg-0">
              <iframe
                style={{ marginLeft: "5%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W-0lSiV-H7k?si=Ai0uKvQySVG78eJB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div> */}
          </div>
          <h5 style={{ fontWeight: "700" }} className="ms-3 mt-3">
            Proposed Solution
          </h5>
          <p style={{ textAlign: "justify" }} className="ms-3 mt-4">
            This research proposes SL-VOYAGER, an AI-Driven Tourism Management System that 
            integrates four key components: an Assistant Companion System (Zaradiel chatbot), 
            Tourism Spending Forecaster, Hotel Recommendation System, and Attraction Recommendation 
            System. By leveraging machine learning, NLP, and real-time data analytics, the system 
            provides personalized, culturally sensitive recommendations, accurate visitor and spending 
            forecasts, and context-aware attraction suggestions. The modular architecture ensures scalability, 
            while real-time APIs and manual admin inputs address data fragmentation and dynamic event challenges, 
            enhancing traveler satisfaction and industry efficiency.
          </p>  
        </div>
      </div>
    </section>
  );
}

export default ResearchProblem;
