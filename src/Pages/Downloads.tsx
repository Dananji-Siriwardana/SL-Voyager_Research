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
        <section className='mt-5 meetteam' style={{ backgroundColor: '#aae0f4 ', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: '#090f49', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: '#090f49', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads