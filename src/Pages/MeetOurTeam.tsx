import React from 'react';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    department: string;
    scholarLink?: string;
    email?: string;
}

function MeetOurTeam() {
    const ourTeamPanl: TeamMember[] = [
        {
            name: 'Ms. Thilini Jayalath',
            position: 'Supervisor',
            image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=7xdb5PAAAAAJ&citpid=2',
            department: 'Information Technology',
            scholarLink: 'https://scholar.google.com/citations?hl=en&user=7xdb5PAAAAAJ',
            email: 'mailto:thilini.j@sliit.lk'
        },
        {
            name: 'Dr. Lakmini Abeywardhana',
            position: 'Co_Supervisor',
            image: 'https://static.sliit.lk/profile/lakminid-1627632446.jpg',
            department: 'Software Engineering',
            scholarLink: 'https://scholar.google.com/citations?hl=en&user=oiEXkr4AAAAJ',
            email: 'mailto:lakmini.d@sliit.lk'
        }
    ];

    const ourTeamMem: TeamMember[] = [
        {
            name: 'Tharaka Basuru',
            position: 'Group Leader',
            image: '/member1.jpg',
            department: 'Information Technology',
            email: 'mailto:tharakabasuru@gmail.com'

        },
        {
            name: 'Nadara Peiris',
            position: 'Group Member',
            image: '/member2.jpg',
            department: 'Information Technology',
            email: 'mailto:'
        },
        {
            name: 'Dananji Siriwardana',
            position: 'Group Member',
            image: '/member3.jpg',
            department: 'Information Technology',
            email: 'mailto:dananjisiriwardana412@gmail.com'
        },
        {
            name: 'Shashika Weerakoon',
            position: 'Group Member',
            image: '',
            department: 'Information Technology',
            email: 'mailto:'
        }
    ];

    const renderCard = (person: TeamMember, showScholar: boolean) => (
    <div className="col-xs-12 col-sm-3" key={person.name}>
        <div className="card d-flex flex-column h-100">
            <a className="img-card">
                <img src={person.image} alt={person.name} />
            </a>
            <div className="card-content">
                <h4 className="card-title mb-3">{person.name}</h4>
                <img
                    className="mb-2"
                    src={`https://img.shields.io/badge/-${person.position}-807e7e`}
                    alt="badge"
                />
                <p style={{ fontSize: '14px' }}>
                    Sri Lanka Institute of Information Technology
                </p>
                <p style={{ fontSize: '14px' }}>
                    <span style={{ fontWeight: 700 }}>Department</span>
                    <br />
                    {person.department}
                </p>
            </div>
            <div
                className="card-read-more d-flex justify-content-center gap-3"
                style={{ paddingBottom: '10px' }}
            >
                {showScholar && person.scholarLink && (
                    <a
                        href={person.scholarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '14px', color: '#090f49' }}
                        className="btn btn-link"
                    >
                        <i className="fab fa-google me-1"></i> G-Scholar
                    </a>
                )}
                {person.email && (
                    <a
                        href={person.email}
                        style={{ fontSize: '14px', color: '#090f49' }}
                        className="btn btn-link"
                    >
                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                    </a>
                )}
            </div>
        </div>
    </div>
);


    return (
        <section className="mt-5 meetteam" id="aboutus">
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map(member => renderCard(member, true))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map(member => renderCard(member, false))}
                </div>
            </div>
        </section>
    );
}

export default MeetOurTeam;