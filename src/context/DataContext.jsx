import { createContext, useContext } from "react";


import faculty1 from "../assets/faculty1.jpg";
import faculty2 from "../assets/faculty2.jpg";
import faculty3 from "../assets/faculty3.jpg";
import faculty4 from "../assets/faculty4.jpg";
import faculty5 from "../assets/faculty5.jpg";
import faculty6 from "../assets/faculty6.jpg";
import faculty7 from "../assets/faculty7.jpg";
import faculty8 from "../assets/faculty8.jpg";
import faculty9 from "../assets/faculty9.jpg";
import faculty10 from "../assets/faculty10.jpg";
import faculty11 from "../assets/faculty11.jpg";
import faculty12 from "../assets/faculty12.jpg";
import faculty13 from "../assets/faculty13.jpg";
import faculty14 from "../assets/faculty14.jpg";
import faculty15 from "../assets/faculty15.jpg";
import faculty16 from "../assets/faculty16.jpg";
import faculty17 from "../assets/faculty17.jpg";
import faculty18 from "../assets/faculty18.jpg";
import faculty19 from "../assets/faculty19.jpg";
import faculty20 from "../assets/faculty20.jpg";
import navya from "../assets/navya.jpg";
import raheema from "../assets/raheema.jpg";
import sai from "../assets/sai.jpg";
import bhavya from "../assets/bhavya.jpg";
import saipuru from "../assets/saipuru.jpg";
import virtual1 from "../assets/virtual1.jpg";
import virtual2 from "../assets/virtual2.jpg";
import virtual3 from "../assets/virtual3.jpg";
import virtual4 from "../assets/virtual4.jpg";
import virtual5 from "../assets/virtual5.jpg";
import virtual6 from "../assets/virtual6.jpg";
import virtual7 from "../assets/virtual7.jpg";
import virtual8 from "../assets/virtual8.jpg";
import { MdEngineering, MdScience } from "react-icons/md";
import { FaAward, FaArrowRight } from "react-icons/fa";
import aboutImg from "../assets/about.jpg";
import careerImg from "../assets/career.jpg";
const DataContext = createContext();
const virtulTour = [
  {
    title: "Virtual Tour",
    subtitle: "Explore Our Beautiful Campus",
    desc: "Take a visual journey through the facilities and vibrant life at Sanskriti School of Engineering",
    buttons: [
      "All",
      "Infrastructure",
      "Laboratories",
      "Sports",
      "Campus Life",
      "Cultural",
      "Technology",
    ],
    data: [
      {
        cards: [
          {
            img: virtual1,
            title: "Main Academic Building",
            text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices."
          },
          {
            img: virtual2,
            title: "Digital Library",
            text: "Access thousands of e-books, research papers, and journals in our modern digital library hub."
          },
          {
            img: virtual3,
            title: "Innovation Lab",
            text: "A dedicated space where students collaborate on real-world projects and innovative solutions."
          },
          {
            img: virtual4,
            title: "Auditorium",
            text: "A fully equipped auditorium hosting seminars, conferences, and cultural events throughout the year."
          },
          {
            img: virtual5,
            title: "Computer Centre",
            text: "High-performance computer labs providing hands-on experience in coding, AI, and analytics."
          },
          {
            img: virtual6,
            title: "Sports Complex",
            text: "Indoor and outdoor sports facilities promoting fitness, teamwork, and a healthy lifestyle."
          },
          {
            img: virtual7,
            title: "Cafeteria",
            text: "A vibrant campus café offering nutritious meals and a relaxing atmosphere for students."
          },
          { img: virtual8, title: "Main Academic Building", text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices" },
        ],
        viewAllButton: "Load More Images",
      },
      {

        cards: [
          {
            img: virtual1,
            title: "Main Academic Building",
            text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices."
          },
          {
            img: virtual2,
            title: "Digital Library",
            text: "Access thousands of e-books, research papers, and journals in our modern digital library hub."
          },
          {
            img: virtual3,
            title: "Innovation Lab",
            text: "A dedicated space where students collaborate on real-world projects and innovative solutions."
          },
          {
            img: virtual4,
            title: "Auditorium",
            text: "A fully equipped auditorium hosting seminars, conferences, and cultural events throughout the year."
          },
          {
            img: virtual5,
            title: "Computer Centre",
            text: "High-performance computer labs providing hands-on experience in coding, AI, and analytics."
          },
          {
            img: virtual6,
            title: "Sports Complex",
            text: "Indoor and outdoor sports facilities promoting fitness, teamwork, and a healthy lifestyle."
          },
          {
            img: virtual7,
            title: "Cafeteria",
            text: "A vibrant campus café offering nutritious meals and a relaxing atmosphere for students."
          },
          { img: virtual8, title: "Main Academic Building", text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices" },
        ],
        viewAllButton: "Load More Images",
      },
      {
        cards: [
          {
            img: virtual1,
            title: "Main Academic Building",
            text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices."
          },
          {
            img: virtual2,
            title: "Digital Library",
            text: "Access thousands of e-books, research papers, and journals in our modern digital library hub."
          },
          {
            img: virtual3,
            title: "Innovation Lab",
            text: "A dedicated space where students collaborate on real-world projects and innovative solutions."
          },
          {
            img: virtual4,
            title: "Auditorium",
            text: "A fully equipped auditorium hosting seminars, conferences, and cultural events throughout the year."
          },
          {
            img: virtual5,
            title: "Computer Centre",
            text: "High-performance computer labs providing hands-on experience in coding, AI, and analytics."
          },
          {
            img: virtual6,
            title: "Sports Complex",
            text: "Indoor and outdoor sports facilities promoting fitness, teamwork, and a healthy lifestyle."
          },
          {
            img: virtual7,
            title: "Cafeteria",
            text: "A vibrant campus café offering nutritious meals and a relaxing atmosphere for students."
          },
          { img: virtual8, title: "Main Academic Building", text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices" },
        ],
        viewAllButton: "Load More Images",
      },
      {
        cards: [
          {
            img: virtual1,
            title: "Main Academic Building",
            text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices."
          },
          {
            img: virtual2,
            title: "Digital Library",
            text: "Access thousands of e-books, research papers, and journals in our modern digital library hub."
          },
          {
            img: virtual3,
            title: "Innovation Lab",
            text: "A dedicated space where students collaborate on real-world projects and innovative solutions."
          },
          {
            img: virtual4,
            title: "Auditorium",
            text: "A fully equipped auditorium hosting seminars, conferences, and cultural events throughout the year."
          },
          {
            img: virtual5,
            title: "Computer Centre",
            text: "High-performance computer labs providing hands-on experience in coding, AI, and analytics."
          },
          {
            img: virtual6,
            title: "Sports Complex",
            text: "Indoor and outdoor sports facilities promoting fitness, teamwork, and a healthy lifestyle."
          },
          {
            img: virtual7,
            title: "Cafeteria",
            text: "A vibrant campus café offering nutritious meals and a relaxing atmosphere for students."
          },
          { img: virtual8, title: "Main Academic Building", text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices" },
        ],
        viewAllButton: "Load More Images",
      },
      {
        cards: [
          {
            img: virtual1,
            title: "Main Academic Building",
            text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices."
          },
          {
            img: virtual2,
            title: "Digital Library",
            text: "Access thousands of e-books, research papers, and journals in our modern digital library hub."
          },
          {
            img: virtual3,
            title: "Innovation Lab",
            text: "A dedicated space where students collaborate on real-world projects and innovative solutions."
          },
          {
            img: virtual4,
            title: "Auditorium",
            text: "A fully equipped auditorium hosting seminars, conferences, and cultural events throughout the year."
          },
          {
            img: virtual5,
            title: "Computer Centre",
            text: "High-performance computer labs providing hands-on experience in coding, AI, and analytics."
          },
          {
            img: virtual6,
            title: "Sports Complex",
            text: "Indoor and outdoor sports facilities promoting fitness, teamwork, and a healthy lifestyle."
          },
          {
            img: virtual7,
            title: "Cafeteria",
            text: "A vibrant campus café offering nutritious meals and a relaxing atmosphere for students."
          },
          { img: virtual8, title: "Main Academic Building", text: "Our state-of-the-art main academic building houses classrooms, administration, and faculty offices" },
        ],
        viewAllButton: "Load More Images",
      },
    ],
  },
];
const testMoni = [
  {
    title: "Student Testimonials",
    subtitle: "What Our Students Say",
    desc: "Hear from our students about their experiences at Sanskriti School of Engineering.",
    cards: [
      {
        text: "Sanskriti School of Engineering has provided me with an excellent platform to grow both academically and personally. The faculty are supportive, and the campus environment is conducive to learning.",
        name: "Navya K.",
        role: "MS - Data Science, London",
        company: "DXC, IBM, TCS, Mphasis",
        img: navya,
      },
      {
        text: "The hands-on learning approach at SSE has been instrumental in shaping my engineering skills. The projects and internships have given me real-world experience that I value greatly.",
        name: "Raheema S.",
        role: "Software Engineer",
        company: "Infosys, Wipro, Accenture",
        img: raheema,
      },
      {
        text: "I am grateful for the opportunities I've had at Sanskriti School of Engineering. The faculty's dedication to student success and the vibrant campus life have made my college years truly memorable.",
        name: "Sai K.",
        role: "Graduate Student",
        company: "University of Texas at Dallas",
        img: sai,
      },
      {
        text: "The supportive community and excellent resources at SSE have helped me thrive academically. The faculty's expertise and the collaborative environment have been key to my success.",
        name: "Bhavya M.",
        role: "Software Developer",
        company: "Google, Microsoft, Amazon",
        img: bhavya,
      },
      {
        text: "Choosing Sanskriti School of Engineering was one of the best decisions I've made. The quality of education and the focus on practical skills have prepared me well for my career.",
        name: "Sai Puru M.",
        role: "Data Analyst",
        company: "Deloitte, EY, KPMG",
        img: saipuru,
      }

    ],
  },
]
const facultyFeature = [
  {
    title: "Academic Excellence",
    subtitle: "Our Distinguished Faculty",
    desc: "Learn from experienced professors and industry experts dedicated to student success.",
    buttons: [
      "Computer Science",
      "Electronics & Communication",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
    ],
    data: [
      {
        title: "Computer Science Faculty",
        desc: "Meet the mentors shaping future innovators in software and AI.",
        cards: [
          { img: faculty1, name: "Dr. Bhaskar Naik", role: "Professor & HOD", button: "View Profile" },
          { img: faculty2, name: "Dr. Noor Mohammed", role: "Associate Professor", button: "View Profile" },
          { img: faculty3, name: "Prof. Prasanna", role: "Assistant Professor", button: "View Profile" },
          { img: faculty4, name: "Dr. Ramesh Babu", role: "Associate Professor", button: "View Profile" },
        ],
        viewAllButton: "View All CS Faculty",
      },
      {
        title: "Electronics & Communication Faculty",
        desc: "Experts guiding students in embedded systems and VLSI design.",
        cards: [
          { img: faculty5, name: "Dr. Bhaskar Naik", role: "Professor & HOD", button: "View Profile" },
          { img: faculty6, name: "Dr. Noor Mohammed", role: "Associate Professor", button: "View Profile" },
          { img: faculty7, name: "Prof. Prasanna", role: "Assistant Professor", button: "View Profile" },
          { img: faculty8, name: "Dr. Ramesh Babu", role: "Associate Professor", button: "View Profile" },
        ],
        viewAllButton: "View All ECE Faculty",
      },
      {
        title: "Mechanical Engineering Faculty",
        desc: "Innovators empowering students to build and design the future.",
        cards: [
          { img: faculty9, name: "Dr. Bhaskar Naik", role: "Professor & HOD", button: "View Profile" },
          { img: faculty10, name: "Dr. Noor Mohammed", role: "Associate Professor", button: "View Profile" },
          { img: faculty11, name: "Prof. Prasanna", role: "Assistant Professor", button: "View Profile" },
          { img: faculty12, name: "Dr. Ramesh Babu", role: "Associate Professor", button: "View Profile" },
        ],
        viewAllButton: "View All Mechanical Faculty",
      },
      {
        title: "Civil Engineering Faculty",
        desc: "Dedicated professionals shaping strong foundations for future engineers.",
        cards: [
          { img: faculty13, name: "Dr. Bhaskar Naik", role: "Professor & HOD", button: "View Profile" },
          { img: faculty14, name: "Dr. Noor Mohammed", role: "Associate Professor", button: "View Profile" },
          { img: faculty15, name: "Prof. Prasanna", role: "Assistant Professor", button: "View Profile" },
          { img: faculty16, name: "Dr. Ramesh Babu", role: "Associate Professor", button: "View Profile" },
        ],
        viewAllButton: "View All Civil Faculty",
      },
      {
        title: "Electrical Engineering Faculty",
        desc: "Empowering minds in power systems and renewable energy innovations.",
        cards: [
          { img: faculty17, name: "Dr. Bhaskar Naik", role: "Professor & HOD", button: "View Profile" },
          { img: faculty18, name: "Dr. Noor Mohammed", role: "Associate Professor", button: "View Profile" },
          { img: faculty19, name: "Prof. Prasanna", role: "Assistant Professor", button: "View Profile" },
          { img: faculty20, name: "Dr. Ramesh Babu", role: "Associate Professor", button: "View Profile" },
        ],
        viewAllButton: "View All Electrical Faculty",
      },
    ],
  },
];
const careerSection = [{
  img: careerImg,
  subtitle: "CAREER SUCCESS",
  title: "Exceptional Placement Record",
  desc: "At SSE, we take pride in our outstanding placement record. Our Career Development Centre works tirelessly to ensure our students get placed in top companies.",
  cards: [
    {
      number: "95%",
      text: "Placement Rate",
    },
    {
      number: "50+",
      text: "Recruiting Companies",
    },
    {
      number: "150+",
      text: "Faculty Members",
    },
    {
      number: "15",
      text: "Research Centers",
    },
  ],
  button: [
    {
      text: "Placement Details",
      icon: <FaArrowRight />
    }
  ]
}];
const aboutSection = [
  {
    title: "ABOUT SSE",
    subtitle: "Shaping Engineers for Tomorrow's World",
    desc: "Sanskriti School of Engineering (SSE) is a premier engineering institution in Andhra Pradesh, committed to academic excellence and holistic development of students.",
    img: aboutImg,
    features: [
      {
        icon: <FaAward />,
        heading: "Excellence in Education",
        text: "NAAC accredited curriculum with industry relevance",
      },
      {
        icon: <MdEngineering />,
        heading: "Expert Faculty",
        text: "Experienced educators with industry background",
      },
      {
        icon: <MdScience />,
        heading: "Research Focus",
        text: "Innovation-driven approach to engineering education",
      },
    ],
    button: [
      {
        text: "Learn More",
        icon: <FaArrowRight />
      }
    ]
  },
];



export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ aboutSection, careerSection, facultyFeature, testMoni, virtulTour }}>
      {children}
    </DataContext.Provider>
  );
};


export const useData = () => useContext(DataContext);
