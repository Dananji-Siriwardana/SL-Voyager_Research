import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>
                The following areas represent research gaps identified in recent studies on tourism management systems:
            </p>
            <div className="achievements">
                <div className="work">
                    <img src="/icon1.png" alt="Search Icon" style={{ width: '100px', height: '100px' }} />
                    <p className="work-heading">Personalized and Culturally Sensitive Recommendations</p>
                    <p className="work-text">
                        AI-driven systems like "TourBuddy" and "TRIPORA" provide personalized recommendations but often lack deep integration of cultural sensitivity and emotional analytics. While some systems incorporate cultural etiquette [15], they fail to dynamically adapt to situational contexts or provide stress-aware responses, limiting their effectiveness in culturally diverse settings like Sri Lanka.
                    </p>
                </div>
                <div className="work">
                    <img src="/icon2.png" alt="Chart Icon" style={{ width: '100px', height: '100px' }} />
                    <p className="work-heading">Real-Time Data Integration</p>
                    <p className="work-text">
                        Current forecasting models, such as those by Peiris (2016) and Kodituwakku (2018), rely heavily on historical data, neglecting real-time inputs like social media trends, weather forecasts, or dynamic events [19]. Priyangika and Karunasena (2023) explored social media integration but did not fully incorporate live data sources, reducing predictive accuracy.
                    </p>
                </div>
                <div className="work">
                    <img src="/icon3.png" alt="Comments Icon" style={{ width: '100px', height: '100px' }} />
                    <p className="work-heading">Traveler Segmentation</p>
                    <p className="work-text">
                        Existing models, including those by Peiris (2016) and Kodituwakku (2018), predict total visitor numbers without segmenting travelers by type (e.g., families, solo travelers, business professionals). This limits the ability of tourism businesses to tailor services effectively, such as adjusting hotel room types or attraction offerings based on specific traveler needs.
                    </p>
                </div>
                <div className="work">
                    <img src="/icon4.png" alt="Integration Icon" style={{ width: '100px', height: '100px' }} />
                    <p className="work-heading">Holistic System Integration</p>
                    <p className="work-text">
                        Most systems focus on isolated tasks, such as route optimization [14], safety alerts [13], or recommendations [15]. There is a lack of comprehensive systems that integrate forecasting, personalization, cultural sensitivity, and real-time event handling into a unified platform, which is critical for addressing Sri Lanka’s tourism challenges.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap
