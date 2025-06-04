import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/13k-ccgerj4QBZyfGMCUYyi0hCY78y3M3/view?usp=sharing'
            
        },
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-25',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1uO3AD6bs6w7lbPD98CFhR1n5T1qaZOfu?usp=sharing'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2025-05-25',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/file/d/1X6EfYtvPiYLKZxGR0dhtmLqsI4eXAkFx/view?usp=drive_link'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2025-05-25',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/file/d/1q8GRIpBCDSF5pEZHrtPSPZowDOn5Mo25/view?usp=sharing'
            
        },
        {
            name: 'Research Paper',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1onJAj4rDZ2pNZ0sCtUWSkj1uT02wWMJo/view?usp=sharing'
        },
        {
            name: 'Final Report',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1BeA5QAikygYSZjpceaDGgQ1BXJtSrUSu?usp=sharing'
        },
        {
            name: 'Poster',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1Stk-spaYzjD_LQE8OrZVlYyZtVpuLEI6?usp=drive_link'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1NwjjY_HuTQJGHZXYEW5EjKKF-Eby7CAH/edit?usp=sharing&ouid=107104307493698449491&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1ddFnK7gsaX9NIQ0GtNwtAUjHoBvkfBZ8/edit?usp=sharing&ouid=107104307493698449491&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1c87E1QVhUkteVA7yIS2UnVn7obKRTkg1/edit?usp=sharing&ouid=107104307493698449491&rtpof=true&sd=true'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2025-05-25',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1WXUbiGVQU9PBOy85SnEdzYbaOhACjtFa/edit?usp=sharing&ouid=107104307493698449491&rtpof=true&sd=true'
        }
    ]

    return (
    <section className="section-bg" id="Documents">
      <h1 className="section-title">Downloads</h1>
      <div className="container">
        <h4 className="mb-3" style={{ color: '#00695C', fontWeight: 600 }}>Documents</h4>
        <p className="mb-4">Explore all project-related documents below.</p>
        <div className="row">
          {documents.map((document) => (
            <div className="col-md-4 mb-4" key={document.name}>
              <div className="card carddowndolad h-100">
                <div className="card-content">
                  <h5 className="card-title">
                    <i className="fas fa-file-alt me-2 docicon" style={{ color: '#FF6F61' }}></i> {document.name}
                  </h5>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    Submitted on {document.submittionDate}
                  </p>
                </div>
                <div className="card-read-more">
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#00695C' }}>
                    {document.grouporindi}
                  </span>
                  <a
                    href={document.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <i className="fas fa-download me-1"></i> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="mb-3 mt-5" style={{ color: '#00695C', fontWeight: 600 }} id="Presentations">
          Presentations
        </h4>
        <p className="mb-4">Discover all project presentations below.</p>
        <div className="row">
          {presentations.map((presentation) => (
            <div className="col-md-4 mb-4" key={presentation.name}>
              <div className="card carddowndolad h-100">
                <div className="card-content">
                  <h5 className="card-title">
                    <i className="fas fa-file-alt me-2 docicon" style={{ color: '#FF6F61' }}></i> {presentation.name}
                  </h5>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    Submitted on {presentation.submittionDate}
                  </p>
                </div>
                <div className="card-read-more">
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#00695C' }}>
                    {presentation.grouporindi}
                  </span>
                  <a
                    href={presentation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <i className="fas fa-download me-1"></i> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Downloads;