function PageContent() {
    return (
        <>
            <section className="bg-white">
                <div className="container-fluid">
                    <div className="row mt-4 mx-4">
                        <div className="col">
                            <div className="row intro">
                                <div className="border-bottom pb-2 mb-3 border-dark">
                                    <h1 className="h1">Hello, I am Kaushal S. Bakraniya 👋</h1>
                                </div>
                                <p className="lead">
                                    I am a software developer with a passion for technology and continuous learning. I enjoy exploring new
                                    technologies, building efficient software systems, and staying updated with the latest industry trends. My
                                    goal is to create reliable, real world applications while constantly improving my skills and knowledge in
                                    the ever evolving tech world.
                                </p>
                            </div>

                            <div className="row technologies-used mt-3">
                                <div className="border-bottom pb-2 mb-3 border-dark">
                                    <h2 className="h4">🚀 Technologies & Tools</h2>
                                </div>
                                <div className="techused-list">
                                    <ul>
                                        <li className="mb-2">
                                            <span className="fw-bold">Languages: </span>C#, Java, Python
                                        </li>
                                        <li className="mb-2">
                                            <span className="fw-bold">Frameworks: </span>.NET, DevExpress
                                        </li>
                                        <li className="mb-2">
                                            <span className="fw-bold">Databases: </span>MySQL, MS-SQL
                                        </li>
                                        <li className="mb-2">
                                            <span className="fw-bold">Other Tools: </span>Git (Version Control)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row what-i-build mt-3">
                                <div className="border-bottom pb-2 mb-3 border-dark">
                                    <h2 className="h4">🛠️ What I Build</h2>
                                </div>
                                <div className="what-i-build-list">
                                    <ul>
                                        <li className="mb-2">
                                            <span className="fw-bold">Software Systems: </span>I focus on building scalable, efficient, and
                                            user-friendly systems.
                                        </li>
                                        <li className="mb-2">
                                            <span className="fw-bold">Real-World Applications: </span>My goal is to create software that solves real
                                            problems and adds value to users.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row currently-learning mt-3">
                                <div className="border-bottom pb-2 mb-3 border-dark">
                                    <h2 className="h4">🌱 Currently Learning</h2>
                                </div>
                                <div className="currently-learning-list">
                                    <ul>
                                        <li className="mb-2">
                                            Python programming
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row connect mt-3">
                                <div className="border-bottom pb-2 mb-3 border-dark">
                                    <h2 className="h4">📬 Connect with Me</h2>
                                </div>
                                <div className="connect-list">
                                    <ul>
                                        <li className="mb-2">
                                            <i className="bi bi-github"></i><a href="https://github.com/Kaushal-Bakraniya" className="mx-2 text-decoration-none">Visit GitHub Profile</a>
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/kaushal-bakraniya/" className="mx-2 text-decoration-none">Connect On LinkedIn</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="row connect mt-3">
                                <div className="border-bottom pb-2 mb-3 border-dark">
                                    <h2 className="h4">📝 Note from developer</h2>
                                </div>
                                <div className="connect-list">
                                    <span>✍️ Updating this page on 29th Sept. 2025, Not really a frontend guy, but gave it a
                                        try using basic React and Bootstrap, just quickly putting things together (content is almost the same as my
                                        GitHub README). Will try to improve it someday.</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageContent
