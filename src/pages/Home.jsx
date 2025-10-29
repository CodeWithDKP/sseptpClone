import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import "./home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import featureImg1 from "../assets/feature1.jpg";
import featureImg2 from "../assets/feature2.jpg";
import featureImg3 from "../assets/feature3.jpg";
import featureImg4 from "../assets/feature4.jpg";
import featureImg5 from "../assets/feature5.jpg";
import { FaWifi, FaLeaf } from "react-icons/fa";
import { MdLocalLibrary, MdFastfood } from "react-icons/md";


function Home() {
  const { aboutSection, careerSection, facultyFeature, testMoni ,virtulTour} = useData();


  const slides = [
    {
      img: img1,
      title: "Exceptional Placement Record",
      caption: "Building Career Success Stories",
      text: "Our graduates are recruited by top companies with 95% placement rate across engineering disciplines.",
      button: "Placements Details ",
    },
    {
      img: img2,
      title: "Vibrant Campus Life",
      caption: "Beyond Academics",
      text: "Experience a holistic campus environment with diverse clubs, cultural events, and sports activities.",
      button: "Life at SSE",
    },
    {
      img: img3,
      title: "Academic Excellence",
      caption: "NAAC Accredited Engineering Education",
      text: "Sanskriti School of Engineering offers industry-aligned curriculum with innovative teaching methodologies.",
      button: "Explore Academics",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  // Auto slide every 4s (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Trigger fade-in animation each time current changes
  useEffect(() => {
    setAnimateText(false);
    const timeout = setTimeout(() => setAnimateText(true), 100);
    return () => clearTimeout(timeout);
  }, [current]);

  //feature section data
  const studentFeature = [
    {
      title: "Student Experience",
      subtitle: "Life at Sanskriti School of Engineering",
      desc: "Discover a vibrant campus life that complements academic excellence with diverse extracurricular activities",
      buttons: ["Campus life", "Clubs & Activities", "Sports & Recreations", "Events & Festivals", "Hostel Life"],
    }];
  const data = [
    {
      title: "Smart Learning",
      subtitle: "Interactive and Modern",
      desc: "Experience AI-driven learning tools, personalized for your growth.",
      img: featureImg1,

      cards: [
        { icon: <FaWifi />, text: "AI Tutors" },
        { icon: <FaLeaf />, text: "Virtual Labs" },
        { icon: <MdLocalLibrary />, text: "Skill Tracking" },
        { icon: <MdFastfood />, text: "Smart Reports" },
      ],
    },
    {
      title: "Creative Projects",
      subtitle: "Build Your Future",
      desc: "Turn your ideas into projects with real-time mentorship and resources.",
      img: featureImg2,
      cards: [
        { icon: <FaWifi />, text: "AI Tutors" },
        { icon: <FaLeaf />, text: "Virtual Labs" },
        { icon: <MdLocalLibrary />, text: "Skill Tracking" },
        { icon: <MdFastfood />, text: "Smart Reports" },
      ],
    },
    {
      title: "Industry Connect",
      subtitle: "Real-World Exposure",
      desc: "Get connected with top companies and professionals through our network.",
      img: featureImg3,
      cards: [
        { icon: <FaWifi />, text: "AI Tutors" },
        { icon: <FaLeaf />, text: "Virtual Labs" },
        { icon: <MdLocalLibrary />, text: "Skill Tracking" },
        { icon: <MdFastfood />, text: "Smart Reports" },
      ],
    },
    {
      title: "Advanced Tools",
      subtitle: "Empower Your Learning",
      desc: "Leverage modern platforms and resources to accelerate your progress.",
      img: featureImg4,
      cards: [
        { icon: <FaWifi />, text: "AI Tutors" },
        { icon: <FaLeaf />, text: "Virtual Labs" },
        { icon: <MdLocalLibrary />, text: "Skill Tracking" },
        { icon: <MdFastfood />, text: "Smart Reports" },
      ],
    },
    {
      title: "Global Network",
      subtitle: "Learn Beyond Borders",
      desc: "Collaborate and learn from experts across the world seamlessly.",
      img: featureImg5,
      cards: [
        { icon: <FaWifi />, text: "AI Tutors" },
        { icon: <FaLeaf />, text: "Virtual Labs" },
        { icon: <MdLocalLibrary />, text: "Skill Tracking" },
        { icon: <MdFastfood />, text: "Smart Reports" },
      ],
    },
  ];


  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <img src={slide.img} alt={slide.title} className="carousel-img" />
                {index === current && (
                  <div className={`carousel-caption ${animateText ? "fade-in" : ""}`}>
                    <p className="caption-hero">{slide.caption}</p>
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <button className="btn-hero">{slide.button} →</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        {/* --- First Row --- */}
        <div className="row feature-row-1">
          <div className="col">
            <h5>{studentFeature[0].title}</h5>
            <h3 className="accentline">{studentFeature[0].subtitle}</h3>
            <p>{studentFeature[0].desc}</p>

            <div className="button-group">
              {studentFeature[0].buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`feature-btn ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Second Row --- */}
        <div className="row feature-row-2 align-items-center">
          <div className="col-md-5 text-side">
            <h4>{data[activeIndex].title}</h4>
            <p>{data[activeIndex].desc}</p>

            <div className="cards-group">
              {data[activeIndex].cards.map((card, i) => (
                <div key={i} className="feature-card">
                  <div className="icon-circle">{card.icon}</div>
                  <span className="card-text">{card.text}</span>
                </div>
              ))}
            </div>



            <button className="knowmore mt-3">Know More
              →
            </button>
          </div>

          <div className="col-md-6 img-side">
            <img src={data[activeIndex].img} alt={data[activeIndex].title} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="features-section">
        {aboutSection.map((item, index) => (
          <div key={index} className="row align-items-center about-row">
            <div className="col-md-6">
              <div className="about-img-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid about-img"
                />
                <div className="about-badge">
                  <h4>15</h4>
                  <p>Years of<br />Excellence</p>
                </div>
              </div>
            </div>


            {/* Right Text */}
            <div className="col-md-6 about-content">
              <h5 className="about-title">{item.title}</h5>
              <h3 className="about-subtitle">{item.subtitle}</h3>
              <p className="about-desc">{item.desc}</p>

              <div className="about-features">
                {item.features.map((f, i) => (
                  <div key={i} className="feature-item d-flex align-items-center">
                    <div className="feature-icon">{f.icon}</div>
                    <div>
                      <h6 className="feature-heading">{f.heading}</h6>
                      <small className="feature-text">{f.text}</small>
                    </div>
                  </div>
                ))}
              </div>

              <button className="about-btn">
                {item.button[0].text} {item.button[0].icon}
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* Career Section */}
      <section className="career-section">
        {careerSection.map((item, index) => (
          <div key={index} className="row align-items-center career-row">

            {/* Left Image */}
            <div className="col-md-6">
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid career-img"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 career-content">
              <h5 className="career-subtitle">{item.subtitle}</h5>
              <h3 className="career-title">{item.title}</h3>
              <p className="career-desc">{item.desc}</p>

              {/* Cards Grid */}
              <div className="career-cards row">
                {item.cards.map((card, i) => (
                  <div key={i} className="col career-card text-center">
                    <h2 className="career-number">{card.number}</h2>
                    <p className="career-text">{card.text}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="career-btn">
                {item.button[0].text} {item.button[0].icon}
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="features-section faculty-section">
        {/* --- First Row (Unchanged) --- */}
        <div className="row feature-row-1 acadamic-row">
          <div className="col">
            <h5>{facultyFeature[0].title}</h5>
            <h3 className="accentline">{facultyFeature[0].subtitle}</h3>
            <p>{facultyFeature[0].desc}</p>

            <div className="button-group">
              {facultyFeature[0].buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`feature-btn ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Second Row (Cards) --- */}
        <div className="row feature-row-2 align-items-center">
          <div className="faculty-card-container">
            {facultyFeature[0].data[activeIndex].cards.map((card, i) => (
              <div key={i} className="faculty-card">
                <img src={card.img} alt={card.name} className="faculty-img" />
                <h6 className="faculty-name">{card.name}</h6>
                <p className="faculty-role">{card.role}</p>
                <button className="faculty-btn">{card.button} →</button>
              </div>
            ))}
          </div>
        </div>

        {/* --- Third Row (View All Button) --- */}
        <div className="faculty-viewall text-center">
          <button className="faculty-viewall-btn">
            {facultyFeature[0].data[activeIndex].viewAllButton} →
          </button>
        </div>
      </section>
      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="features-section faculty-section testimonials-section">
        {/* --- First Row --- */}
        <div className="row feature-row-1 acadamic-row testimonial-heading">
          <div className="col">
            <h5>{testMoni[0].title}</h5>
            <h3 className="accentline">{testMoni[0].subtitle}</h3>
            <p>{testMoni[0].desc}</p>
          </div>
        </div>

        {/* --- Second Row (Cards) --- */}
        <div className="row feature-row-2 align-items-center">
          <div className="faculty-card-container testimonials-grid col-12">
            {testMoni[0].cards.map((card, i) => (
              <div key={i} className="faculty-card textmoni-card">
                <p className="textMoni-text">{card.text}</p>
                <div className="d-flex align-items-center justify-content-start px-3">
                  <img src={card.img} alt={card.alt} className="faculty-img testimonial-img me-3" />
                  <div className="text-start">
                    <h6 className="faculty-name">{card.name}</h6>
                    <p className="faculty-role testi-role">{card.role}</p>
                    <p className="textMoni-company">{card.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*virtual tour-section*/}
       <section className="features-section faculty-section">
        {/* --- First Row (Unchanged) --- */}
        <div className="row feature-row-1 acadamic-row">
          <div className="col">
            <h5>{virtulTour[0].title}</h5>
            <h3 className="accentline">{virtulTour[0].subtitle}</h3>
            <p>{virtulTour[0].desc}</p>

            <div className="button-group">
              {virtulTour[0].buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`feature-btn ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Second Row (Cards) --- */}
        <div className="row feature-row-2 align-items-center">
  <div className="faculty-card-container">
    {virtulTour[0].data[activeIndex].cards.map((card, i) => (
      <div key={i} className="tour-card">
        <div className="tour-img-wrapper">
          <img src={card.img} alt={card.title} className="tour-img" />
          <div className="tour-overlay">
            <h6 className="tour-title">{card.title}</h6>
            <p className="tour-text">{card.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* --- Third Row (View All Button) --- */}
        <div className="faculty-viewall  text-center">
          <button className="faculty-viewall-btn tour-button">
            {virtulTour[0].data[activeIndex].viewAllButton} →
          </button>
        </div>
      </section>


      <section className="cta-section">
        <div className="cta-content">
          <h2>Begin Your Engineering Journey with SSE</h2>
          <p>Admissions open for 2025-26 academic year. Apply now to secure your future.
          </p>
          <button className="btn-apply">Apply Now</button>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;
