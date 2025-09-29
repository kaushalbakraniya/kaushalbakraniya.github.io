import { useState } from 'react'

function App() {
  return (
    <>
      <div class="bg-white m-5">
        <div class="container text-dark card bg-white border-dark">
          <div class="row m-5">
            <div class="col">

              <div class="row intro">
                <div class="border-bottom pb-2 mb-3 border-dark">
                  <h1 class="h1">Hello, I am Kaushal S. Bakraniya 👋</h1>
                </div>
                <p class="lead">
                  I am a software developer with a passion for technology and continuous learning. I enjoy exploring new
                  technologies, building efficient software systems, and staying updated with the latest industry trends. My
                  goal is to create reliable, real world applications while constantly improving my skills and knowledge in
                  the ever evolving tech world.
                </p>
              </div>

              <div class="row technologies-used mt-3">
                <div class="border-bottom pb-2 mb-3 border-dark">
                  <h2 class="h4">🚀 Technologies & Tools</h2>
                </div>
                <div class="techused-list">
                  <ul>
                    <li class="mb-2">
                      <span class="fw-bold">Languages: </span>C#, Java, Python
                    </li>
                    <li class="mb-2">
                      <span class="fw-bold">Frameworks: </span>.NET, DevExpress
                    </li>
                    <li class="mb-2">
                      <span class="fw-bold">Databases: </span>MySQL, MS-SQL
                    </li>
                    <li class="mb-2">
                      <span class="fw-bold">Other Tools: </span>Git (Version Control)
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row what-i-build mt-3">
                <div class="border-bottom pb-2 mb-3 border-dark">
                  <h2 class="h4">🛠️ What I Build</h2>
                </div>
                <div class="what-i-build-list">
                  <ul>
                    <li class="mb-2">
                      <span class="fw-bold">Software Systems: </span>I focus on building scalable, efficient, and
                      user-friendly systems.
                    </li>
                    <li class="mb-2">
                      <span class="fw-bold">Real-World Applications: </span>My goal is to create software that solves real
                      problems and adds value to users.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row currently-learning mt-3">
                <div class="border-bottom pb-2 mb-3 border-dark">
                  <h2 class="h4">🌱 Currently Learning</h2>
                </div>
                <div class="currently-learning-list">
                  <ul>
                    <li class="mb-2">
                      Python programming
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row connect mt-3">
                <div class="border-bottom pb-2 mb-3 border-dark">
                  <h2 class="h4">📬 Connect with Me</h2>
                </div>
                <div class="connect-list">
                  <ul>
                    <li class="mb-2">
                      <i class="bi bi-github"></i><a href="https://github.com/Kaushal-Bakraniya" class="mx-2 text-decoration-none">Visit GitHub Profile</a>
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/kaushal-bakraniya/" class="mx-2 text-decoration-none">Connect On LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>


              <div class="row connect mt-3">
                <div class="border-bottom pb-2 mb-3 border-dark">
                  <h2 class="h4">📝 Note from developer</h2>
                </div>
                <div class="connect-list">
                  <span>✍️ Updating this page on 29th Sept. 2025, Not really a frontend guy, but gave it a
                    try using basic React and Bootstrap, just quickly putting things together (content is almost the same as my
                    GitHub README). Will try to improve it someday.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
