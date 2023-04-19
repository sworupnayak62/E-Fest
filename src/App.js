import './App.css';
import { useState, useEffect } from "react";
import $ from "jquery";
import './css/timeline.css'
import { Sponsor } from './Component/Sponsor';
import { Gallery } from './Component/Gallery';
import "./css/event.scss"

// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { Timeline } from './Component/Timeline';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<Timeline />} />
//         </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
/***********************
  Menu Component
 ***********************/

import React from 'react';
import { Footer } from './Component/Footer';



const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#event" onClick={props.toggleMenu}>
              EVENTS
            </a>
          </li>
          <li>
            <a href="#time" onClick={props.toggleMenu}>
              TIMELINE
            </a>
          </li>
          <li>
            <a href="#faq" onClick={props.toggleMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#sponsor" onClick={props.toggleMenu}>
              SPONSOR
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            E-Fest
            <strong> 5.0</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Entrepreneur's</span>
          <span className="line">Fest-<span className="color">5.0</span></span>
        </h1>
        {/* <div className="buttons">
          <a href="#event">Events</a>
        </div> */}
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Entrepreneurship Development Cell</h4>
            <p>
              The Entrepreneurship Development Cell (ED Cell)
              at SiliconTech, was established in 2011 to
              encourage and promote entrepreneurship among
              students. The cell is supported by the All India
              Council for Technical Education (AICTE) and the
              Department of Science & Technology (DST),
              Government of India. Its mission is to create an
              enabling environment for entrepreneurial
              innovation, provide opportunities for selfemployment, and train students to have an
              intrapreneurial mindset for future workplaces.
              The EDC offers access to affordable co-working
              spaces, mentoring, training, and funding to
              incubatees. It also hosts various entrepreneurship
              development programs, including the Women
              Entrepreneurship Development Program and the
              Technology Entrepreneurship Development
              Program.
            </p>
            <p>
              The E-FEST is its flagship event that celebrates
              entrepreneurship and honors entrepreneurs. The
              EDC's work is anchored by SiliconTech's Business
              Incubator and Institute Innovation Council, which
              promote entrepreneurship within the institute
              and in Odisha.
            </p>
          </div>
          <div className="title">
            <h3>Guest Speakers</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">SHREYAAN DAGA</h4>
            <p className='desig'>
              Co-Founder , OLL

            </p>
            <p>
              One of the youngest pitchers on Shark Tank India Season 2, OLL cofounder Shreyaan Daga left the ‘sharks’ impressed by his aptitude
              and business skills. Having started his entrepreneurial journey at the
              age of 8, Daga started his online learning company as a teenager
              last year. While a few ‘sharks’ backed out realising that the business
              would be tough to scale up, Peyush Bansal and Vineeta Singh
              offered Rs 30 lakh for 5% equity of his company.

            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">DIPAN SAHU</h4>
            <p className='desig'>
              Asst. Innovation Director,<br />
              Ministry of Education's Innovation Cell & AICTE,<br />
              Government of India

            </p>
            <p>
              He is an enthusiastic policy entrepreneur and practitioner actively
              contributing to the growth of the Indian start-up ecosystem. His
              work engages a variety of ecosystem enablers and successfully
              established a scalable, and sustainable model of the Institution’s
              Innovation Council (IIC) network to foster I & E culture in more than
              6000 HEIs which directly influences the career choice of 4 million
              students.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


const Time = props => {
  return (
    <section id="time">
      <div className="title">
        <h3>Timeline</h3>
      </div>
      <ul class="timeline">

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Registration</span>
              <span class="time-wrapper"><span class="time">21.04.23</span></span>
            </div>
            <div class="desc">
              Participant Reporting <br/>
              Venue: Entry Gate Time: 08.00AM
            </div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Inaguration</span>
              <span class="time-wrapper"><span class="time">21.04.23</span></span>
            </div>
            <div class="desc">
              Welcome ceremony and inauguration of the fest by the Chief Guest. <br/>
              Venue: Auditorium Time: 09.45AM</div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Events Start</span>
              <span class="time-wrapper"><span class="time">21.04.23</span></span>
            </div>
            <div class="desc">Bizz-Tank Venue: LT-1 Time: 01.45PM <br/> Prototype Exhibition Venue: Exam Hall Time: 01.45PM <br/> Bidding War(Group-1) Venue: LT-2 Time: 02.15PM</div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Events</span>
              <span class="time-wrapper"><span class="time">22.04.23</span></span>
            </div>
            <div class="desc">Pitch Against The Startup  Venue: LT-1 Time: 08.00AM <br/> AD-MAD Show  Venue: LT-4 Time: 08.00AM <br/> Bidding War(Group-2) Venue: LT-2 Time: 09.30AM <br/> Bidding War(Group-3) Venue: LT-2 Time: 01.30PM</div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Special Talk</span>
              <span class="time-wrapper"><span class="time">22.04.23</span></span>
            </div>
            <div class="desc">Special Talk by Mr <br/> Venue: Auditorium Time: 04.00PM</div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Event</span>
              <span class="time-wrapper"><span class="time">23.04.23</span></span>
            </div>
            <div class="desc">Bidding War Finale <br/> Venue: LT-2 Time: 08.00AM</div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Closing Ceremony</span>
              <span class="time-wrapper"><span class="time">22.04.23</span></span>
            </div>
            <div class="desc">Prize Distribution & Closing Ceremony<br/> Venue: LT-1 Time: 10.30AM</div>
          </div>
        </li>

      </ul>
    </section>
  );
};

/***********************
  Project Component
 ***********************/
const Timeline = props => {
  const [selectedFaq, setSelectedFaq] = useState("");

  const handleFaqClick = (id) => {
    const hideSec = "faq-hide";
    const $class = "." + $(".about-" + id).attr("class").replace(hideSec, "");

    $("#faq-wrapper").addClass(hideSec);
    $(".about-" + id).removeClass(hideSec);
    $("div[class*=about]").not($class).addClass(hideSec);

    if (selectedFaq === id) {
      setSelectedFaq("");
    } else {
      setSelectedFaq(id);
    }
  };

  const handleFaqAccordionClick = (e) => {
    e.preventDefault();
    const expand = "expanded";
    const content = $(".faq-content");

    if ($(e.target).hasClass(expand)) {
      $(e.target).removeClass(expand);
      $(e.target).parent().children("ul").stop(true, true).slideUp();
    } else {
      $(".faq-accordion > li > a.expanded").removeClass(expand);
      $(e.target).addClass(expand);
      content.filter(":visible").slideUp();
      $(e.target).parent().children("ul").stop(true, true).slideDown();
    }
  };

  return (
    <section id="faq">
      <div className='FAQ'>
        <div class="custom-shape-divider-bottom-1681841066">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="title">
          <h3>F A Q</h3>
        </div>
        <div>
          <div class="faq-container">
            <div id="faq-links">
              <div id="service" onClick={() => handleFaqClick("service")} class={selectedFaq === "service" ? "faq-selected" : ""}>Event</div>
              <div id="installation" onClick={() => handleFaqClick("installation")} class={selectedFaq === "installation" ? "faq-selected" : ""}>Participation</div>
              <div id="features" onClick={() => handleFaqClick("features")} class={selectedFaq === "features" ? "faq-selected" : ""}>Contact</div>
              <div id="mobile" onClick={() => handleFaqClick("mobile")} class={selectedFaq === "mobile" ? "faq-selected" : ""}>Schedule</div>
            </div>

            <div id="faq-wrapper" class="about-service faq-hide">

              <div class="faq-group">
                <div class="slide-left">
                  <div>Event</div>
                </div>
                {/* <hr> */}
              </div>
              <div class="slide-left">
                <div class="faq">
                  <ul class="faq-accordion">

                    <li>
                      <div onClick={handleFaqAccordionClick}>What are the events in E-FEST 5.0?</div>
                      <ul class="faq-content">
                        <li>
                          <div>
                            <p>There are a total of 5 events:<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;1. Biz-Tank&nbsp;&nbsp;
                              &nbsp;2. Pitch Against The Startup  &nbsp;&nbsp;
                              &nbsp;3. Bidding War    &nbsp;&nbsp;<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;4. Prototype Exhibition (Junior) and (Senior)&nbsp;&nbsp;
                              &nbsp;5. AD-MAD Show</p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="about-installation faq-hide">

              <div class="faq-group">
                <div class="slide-left">
                  <div>Participation</div>
                </div>
                {/* <hr> */}
              </div>

              <div class="slide-left">
                <ul class="faq-accordion">

                  <li>
                    <div onClick={handleFaqAccordionClick}>How do I participate in the events?</div>
                    <ul class="faq-content">
                      <li>
                        <div>
                          <p>You can register directly from the registration link provided in the website.</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div onClick={handleFaqAccordionClick}>How many events can I participate in?</div>
                    <ul class="faq-content">
                      <li>
                        <div>
                          <p>You can participate in a maximum of 2 events.</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>

              </div>
            </div>

            <div class="about-features faq-hide">

              <div class="faq-group">
                <div class="slide-left">
                  <div>Contact</div>
                </div>
                {/* <hr> */}
              </div>
              <div class="slide-left">
                <ul class="faq-accordion">

                  <li>
                    <div onClick={handleFaqAccordionClick}>Whom to contact for any information regarding E-FEST 5.0?</div>
                    <ul class="faq-content">
                      <li>
                        <div>
                          <p>Contact the event management team for further queries.</p>
                        </div>
                      </li>
                    </ul>
                  </li>

                </ul>
              </div>
            </div>

            <div class="about-mobile faq-hide">

              <div class="faq-group">
                <div class="slide-left">
                  <div>Schedule</div>
                </div>
                {/* <hr> */}
              </div>
              <div class="slide-left">
                <ul class="faq-accordion">

                  <li>
                    <div onClick={handleFaqAccordionClick}>What are the dates of E-FEST 5.0?</div>
                    <ul class="faq-content">
                      <li>
                        <div>
                          <p>The dates are April 21,22,23. It will continue for 3 days.</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Sponsor1 = props => {
  return (
    <div id='sponsor'>
      <div className='title'>
        <h3>
          SPONSORS
        </h3>
      </div>
      <Sponsor />
    </div>
  );
};


const Events = props => {
  return (
    <section id="event">
      <div className='title'>
        <h3>
          EVENTS
        </h3>
      </div>
      <div id="page-content">
        <div class="event-card">
          <div class="event-content">
            <h2 class="title1">BIZ-TANK</h2>
            <a href='https://ik.imagekit.io/nsrgvmehl/BizTankDocument.pdf?updatedAt=1681888849055' target="_blank" className='btn'>Details</a>
          </div>
        </div>
        <div class="event-card">
          <div class="event-content">
            <h2 class="title1">PITCH AGAINST THE STARTUP</h2>
            <a href='https://ik.imagekit.io/nsrgvmehl/PitchAgainsttheStartupDocument.pdf?updatedAt=1681888800404' target="_blank" className='btn'>Details</a>
          </div>
        </div>
        <div class="event-card">
          <div class="event-content">
            <h2 class="title1">PROTOTYPE EXHIBITION</h2>
            <a href='https://ik.imagekit.io/nsrgvmehl/PrototypeExhibitionDocument.pdf?updatedAt=1681888967424' target="_blank" className='btn'>Details</a>
          </div>
        </div>
        <div class="event-card">
          <div class="event-content">
            <h2 class="title1">AD-MAD SHOW</h2>
            <a href='https://ik.imagekit.io/nsrgvmehl/AdMadShowDocument.pdf?updatedAt=1681889073901' target="_blank" className='btn'>Details</a>
          </div>
        </div>
        <div class="event-card">
          <div class="event-content">
            <h2 class="title1">BIDDING WAR</h2>
            <a href='https://ik.imagekit.io/nsrgvmehl/BiddingWarDocument.pdf?updatedAt=1681888947693' target="_blank" className='btn'>Details</a>
          </div>
        </div>
        <div class="event-card">
          <div class="event-content">
            <h2 class="title1">PROTOTYPE EXHIBITION (Junior)</h2>
            <a href='https://ik.imagekit.io/nsrgvmehl/PrototypeExhibitionJuniorDocument.pdf?updatedAt=1681888916125' target="_blank" className='btn'>Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};



const Gallery1 = props => {
  return (
    <div id='gallery'>
      <Gallery />
    </div>
  );
};

const Footer1 = props => {
  return (
    <div className='footer-container' id='footer-container'>
      <Footer />

    </div>
  );
};


/***********************
  Social Links Component
 ***********************/



/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Events />
        <Time />
        <Timeline />
        <Gallery1 />
        <Sponsor1 />
        <Footer1 />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}


export default App;
