import logo from "./logo.svg";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/*Responsive Navbar*/}
      <header>
        <nav className="navbar">
          <div className="logo">Logo</div>
          <div className="hamburger">☰</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#interest">Interest</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/*Page Sections*/}
      <div className="page-content">
        <section id="home" className="">
          <div className="first-box">
            <div>
              <h1>CHARMAGNE MANIAGO</h1>
              <p>
                Seeking an aspiring any development-related position to enhance
                my technical soft skills while contributing to an organization’s
                business development in a reputable organization that recognize
                individual’s technical creativeness. Charmagne aims to leverage
                her technical creativity and fully further her dedication in
                providing effective solutions for business needs. Plus
                willingness to undergo training.
              </p>
            </div>
            <div>
              <div>
                <img
                  src="https://drive.google.com/thumbnail?id=1TWNhX6KkgFrclIiJ6-dsU12Z39j0Ji0j"
                  alt="professional picture"
                  loading="lazy"
                />
                <p>
                  Charmagne is a BSIT Web Developer (Bachelor of Science in
                  Information Technology major in Web Development) graduate at
                  Holy Angel University
                </p>

                <a href="#sample" aria-label="Github">
                  {" "}
                  <FaGithub size={24} />
                </a>
                <a href="#sample" aria-label="Linkedin">
                  {" "}
                  <FaLinkedin size={24} />
                </a>
                <button>See Resume</button>
              </div>
            </div>
          </div>
          <div>
            <h1>Skills</h1>
            <ul>
              <li>Computer Literate</li>
              <li>Web Development</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>Project Management</li>
              <li>Google Sheet (Appscript)</li>
              <li>Linux</li>
              <li>Blockchain (Solidity)</li>
            </ul>
          </div>
        </section>
        <section id="resume" className=""></section> {/*remove*/}
        <section id="portfolio" className="">
          <div className="portfolio">
            <h2>Portfolio</h2>
            <h2>Campaign Report System</h2>
            <p>
              The Campaign Report System operates as a sophisticated game data
              management tool seamlessly integrated into a Google Spreadsheet.
              With just a few simple interactions, it efficiently extracts and
              summarize the information from the game's historical data. This
              facilitates the generation of comprehensive in-game statistics for
              the players in a team, providing a valuable resource for strategic
              analysis and performance evaluation..
            </p>
            <iframe
              src="https://docs.google.com/spreadsheets/d/1dKAbpmf9LKUSwMyUNxbj3PEG7s1MFtSv_NCaf_c5kHo/edit?usp=sharing"
              alt="Campaign Report System"
              allowFullScreen
            ></iframe>

            <p>
              Click here for More Info...{" "}
              <a href="https://drive.google.com/drive/folders/1wEmZ9JVsLo6IFKvfwDR4WaIgvc5CFrMF?usp=drive_link">
                ClickMe{" "}
              </a>
            </p>
          </div>

          <div>
            <h2>Vonshon Ordering System</h2>
            <p>
              An Ordering System that directs costumers order straight to paying
              all at their fingertips. Browse menus, place orders seamlessly,
              and savor a diverse range of cuisines...
            </p>
            <p>
              Vonshon is a group prelim project where Maniago is the Project
              Manager. Together with Serrano (Web Developer), Quiambao
              (Designer), Malong (Designer), and Estanislao (Web Developer)..
            </p>
            <iframe
              src="https://vonshon.bitbucket.io"
              alt="Vonshon System"
              allowFullScreen
            ></iframe>
            <p>
              Click here for More Info...{" "}
              <a href="https://vonshon.bitbucket.io"> ClickMe </a>
            </p>
          </div>

          <div>
            <h2>Forever Dream | RPG </h2>
            <p>
              A Role Playing Game that is in-progress game. Maniago is co-game
              Designing with her game developer friend.
            </p>

            <iframe
              src="https://rpgplayground.com"
              alt="Forever Dream Game"
              allowFullScreen
            ></iframe>
            <p>
              Click here for More Info...{" "}
              <a href="https://drive.google.com/drive/folders/1CovOfLRwZWa0HFKRmDdDwcgPEYqdWCLq?usp=drive_link">
                ClickMe{" "}
              </a>
            </p>
          </div>

          <div>
            <h1>peerquest</h1>
          </div>

          <div>
            <h2>AC-Coffee | E-Commerce </h2>
            <p>
              A group Wordpress project with Castro A., Dacquil K., and
              Evangelista A. were Maniago focuses on user experience of the
              website this includes buttons and overall appeal of the website to
              a user..
            </p>
            <iframe
              src="https://ac-coffee.com"
              alt="Coffee Shop E-Commerce"
              allowFullScreen
            ></iframe>
            <p>
              Click here for More Info...{" "}
              <a href="https://ac-coffee.com"> ClickMe </a>
            </p>
          </div>
        </section>
        <section id="interest" className="">
          <div>
            <h1>Interest</h1>
            <p>Interest here</p>
          </div>

          <div className="certi-grid">
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=16qN8UM0D5_0AFSUK_dM2W6QU7a_tRoiM"
                alt="Certificate 1"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=16wK3817WT-NnfDSqT7_99_WpQgsqPjsk"
                alt="Certificate 2"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1YEEqIBCJrsi-sa4QPoT5TmMSsITyn8Rt"
                alt="Certificate 3"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1QvVAXQPmzy56RdGOZBcipF5uB5QNPEN2"
                alt="Certificate 4"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1SBm54Dg4eT7pqMqo-8AR6P1w8_KvzrM0"
                alt="Certificate 5"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1OBO7ui9WMznVM68a9Fibws9mEnl4Y62T"
                alt="Certificate 6"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1l-kewTsTI0fyq2-cN7aBJxUyMBOjX0XK"
                alt="Certificate 7"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1FOlB_UA8dHJM4wKCrD2WqXOa8iSd1jKA"
                alt="Certificate 8"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=11v4_kL7HcWAMdBQsBe2nwxVGdqsNN2eE"
                alt="Certificate 9"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1TO-QYsuJdihA7cD4sVVqBxgL2LHaQez-"
                alt="Certificate 10"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1D4MfshPVUTiWCB6x6pE7FjM7mqLhGZm2"
                alt="Certificate 11"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1qTNDK1GLZIceY-GoxIE-HZhJ_V7UNrPC"
                alt="Certificate 12"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1EGISsZr-h81IQOvhiEswPh9EntnvtnF_"
                alt="Certificate 13"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1fV51cE2B9e5rE5kAtOuWqsAGRhGoJ0Xi"
                alt="Certificate 14"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=10AVslmDInt6NenrtjKsUfiA2lNMUDfc6"
                alt="Certificate 15"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1a9AW-ZXEFN25CK0aFhErgE36BvW3Jv8Z"
                alt="Certificate 16"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=1Rc_k1_wUPSlFqNgSoVYibr7bQA8eVS7B"
                alt="Certificate 17"
              />
            </div>
            <div>
              <img
                src="https://drive.google.com/thumbnail?id=12jqd9TCrZw_Ei1lBaQo4we31biAUmfBW"
                alt="Certificate 18"
              />
              <div>
                <img src="" alt="Certificate 19" />
              </div>
              <div>
                <img src="" alt="Certificate 20" />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className=""></section>
        <foooter>
          <p>&copy; 2024 Your Mmasss's Portfolio | by Charmagne Maniago</p>
        </foooter>
      </div>
    </div>
  );
}

export default App;
