export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Driven by curiosity, fueled by innovation, and inspired by possibilities.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] relative", // Ensure the grid cell is positioned relatively
    imgClassName: "absolute inset-0 w-full h-full object-cover", // Make the image cover the entire grid cell
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: " flexible to work with any time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Technology.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Enhancing technical skills through hands-on projects with advanced libraries.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Join Your Team and Work in Innovative Projects",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  
  {
    id: 1,
    category: "Generative AI",
    title: "FusionGenAI: A SaaS Project",
    des: "Implemented real-time functionalities for image and music generation, code execution, and conversation capabilities, while also integrating video uploads via Cloudinary and an image converter optimized for social media.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Clogo.svg", "/fm.svg"],
    timeline: "2024",
    link: "https://github.com/Visheshpgowda/sample1.git",
  },
  {
    id: 2,
    category: "Machine Learning",
    title: "Predictive Disease Diagnosis using Neural Networks and Ensemble Techniques",
    des: "Developed a predictive model using artificial neural networks combined with boosting and voting techniques to diagnose multiple diseases. Utilized a comprehensive patient dataset to train the model and deployed a web interface for user-friendly predictions using Python and scikit-learn.",
    img: "/MLg.png",
    iconLists: ["/python.svg", "/react.svg", "/tenser.jpeg"],
    timeline: "2024",
    link: "https://github.com/Visheshpgowda/disease-prediction-app",
  },
  {
    id: 3,
    category: "Development",
    title: "Custom Authentication System with JWT, Sessions, and AI Integration",
    des: "Engineered a secure custom authentication system that integrates JWT tokens, session management, and AI capabilities. Combined modern backend technologies to deliver a robust and intelligent security solution.",
    img: "/p5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    timeline: "2024",
    link: "https://github.com/vishesh1525/next-js-fullstack",
  },
  {
    id: 4,
    category: "Development",
    title: "Comprehensive School Management Dashboard",
    des: "Developed a feature-rich dashboard for teachers and administrators featuring advanced attendance tracking, dynamic timetable management, school-wide announcements, and user role management. Ensured a responsive design for optimal accessibility across all devices.",
    img: "/time_table.jpg",
    iconLists: ["/html.svg", "/next.svg", "/html.png"],
    timeline: "2025",
    link: "https://github.com/Visheshpgowda/Hackthon.git",
  },
  {
    id: 5,
    category: "Development",
    title: "Parking Lot Management System",
    des: "Developed 'Book My Spot', a Parking Lot Management System for college campuses using the MERN stack. This solution streamlines parking management with an efficient and user-friendly interface.",
    img: "/p6.jpg",
    iconLists: ["/react.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/express.svg"],
    timeline: "2024",
    link: "https://github.com/vishesh1525/ParkingslotsProject",
  },{
    id: 6,
    category: "Generative AI",
    title: "Interactive AI Agent for SQL Query Generation",
    des: "Built an AI agent that interprets natural language and generates accurate SQL queries, enabling seamless interaction with databases. Leveraged LangChain and OpenAI models for context handling and dynamic query formation.",
    img: "/sqlai.png",
    iconLists: ["/python.svg", "/langchain.webp", "/mysql.svg"],
    timeline: "2025",
    link: "https://github.com/Visheshpgowda/Langchain",
  },
  {
    id: 7,
    category: "Generative AI",
    title: "Excel Problem Solver AI Agent",
    des: "Engineered an AI agent using Python and LangChain to solve spreadsheet problems through natural language commands. Users can upload Excel files and interact with the agent to perform analysis, transformation, and visualization.",
    img: "/excelai.png",
    iconLists: ["/python.svg", "/langchain.svg", "/excel.webp"],
    timeline: "2025",
    link: "https://github.com/Visheshpgowda/Langchain",
  },
  {
    id: 8,
    category: "Development",
    title: "Fullstack Development of Hotel Booking Website",
    des: "Developed a robust hotel booking website using the MERN stack with an emphasis on MVC architecture. Implemented a secure MongoDB database with Mongoose ODM and integrated third-party APIs for geolocation and authentication to ensure seamless functionality.",
    img: "/p2.png",
    iconLists: ["/elogo.svg", "/mlogo.svg", "/ts.svg", "/nlogo.svg", "/c.svg"],
    timeline: "2022",
    link: "https://github.com/vishesh1525/MERN-stack-project",
  },
  {
    id: 9,
    category: "Development",
    title: "Next.js Music Class App",
    des: "Designed and developed a music class application using Next.js and Accenture UI components. Implemented seamless routing and a responsive design to enhance the user experience across all devices.",
    img: "/image.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Clogo.svg"],
    timeline: "2023",
    link: "https://github.com/vishesh1525/next-js-project",
  },
  {
    id: 10,
    category: "Data Analysis",
    title: "Insurance Company Data Analysis",
    des: "Conducted an in-depth data analysis for an insurance company using Python libraries like pandas and matplotlib. Analyzed customer, policy, and claims data to identify trends and generate actionable insights with interactive visualizations in Jupyter Notebook.",
    img: "/data.png",
    iconLists: ["/python.svg", "/tenser.jpeg", "/html.png"],
    timeline: "2024",
    link: "https://github.com/Visheshpgowda/data-visualisation.git",
  },
  {
    id: 11,
    category: "Machine Learning",
    title: "Image Insight: ML-Based Classification Model",
    des: "Developed an image classification model using predefined datasets. Leveraged OpenCV for image and eye detection while applying feature engineering to optimize accuracy.",
    img: "/ML.png",
    iconLists: ["/python.svg", "/tenser.jpeg", "/htML.png"],
    timeline: "2023",
    link: "https://github.com/vishesh1525/ai-saas",
  },
  {
    id: 12,
    category: "Development",
    title: "Fantasy 11 Cricket Booking Frontend Design",
    des: "Crafted an intuitive frontend for a cricket booking website using HTML, CSS, and JavaScript. Designed responsive layouts and interactive elements to facilitate easy booking of cricket grounds and matches.",
    img: "/cricket.png",
    iconLists: ["/html.png", "/tail.svg", "/js.svg"],
    timeline: "2023",
    link: "https://github.com/vishesh1525/ParkingslotsProject",
  },
  {
    id: 13,
    category: "UNIX",
    title: "Socket Programming",
    des: "Implemented socket programming to enable two-way real-time communication between the client and server using WebSockets. This approach allows live updates without the need for constant page refreshes.",
    img: "/unixp.png",
    iconLists: ["/unix.jpeg", "/c-1.svg"],
    timeline: "2023",
    link: "/socket.pdf",
  },
];


export const testimonials = [
  
  {
    quote:
      "Certified",
    name: "Certifcate",
    title: "Google Cloud Computing Foundations Certification",
    issuer:"Google",
    date: "2023",
    text:"Google Cloud Computing Foundations Certification is a beginner-level certification that introduces you to the basics of cloud computing and Google Cloud Platform. This certification is designed for individuals who want to learn more about cloud computing and Google Cloud Platform.",
    img:"/google.png"
  },
  {
    quote:
      "Certified",
    name: "Certifcate",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer:"Coursera",
    text:"This course is part of the Machine Learning Specialization. In this course, you will learn about supervised machine learning, starting with basic concepts and then moving on to more advanced topics. You will learn about regression and classification, two of the most important types of supervised machine learning algorithms.",
    date: "2023",
    img:"/mlcert1.jpeg"
  },
  {
    quote:
      "Certified",
    name: "Certifcate",
    title: "Advanced Learning Algorithms",
    issuer:"Coursera",
    text:" This course is part of the Machine Learning Specialization. In this course, you will learn about advanced learning algorithms, starting with basic concepts and then moving on to more advanced topics. You will learn about deep learning, reinforcement learning, and other advanced topics in machine learning.",
    date: "2023",
    img:"/ml2.jpeg"
  },{
    quote:
      "Certified",
    name: "Certifcate",
    title: "Advanced Learning Algorithms",
    issuer:"Coursera",
    text:" This course is part of the Machine Learning Specialization. In this course, you will learn about advanced learning algorithms, starting with basic concepts and then moving on to more advanced topics. You will learn about deep learning, reinforcement learning, and other advanced topics in machine learning.",
    date: "2023",
    img:"/ml2.jpeg"
  },
  
  // {
  //   quote:
  //     "Certified",
  //   name: "Certifcate",
  //   title: "Google Cloud Computing Foundations Certification",
  //   img:"/google.png"
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of Development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "C++",
    img: "/cp.svg",
    // nameImg: "/cp.svg",
  },
  {
    id: 2,
    name: "Java",
    img: "/java.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "C",
    img: "/c-1.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Python",
    img: "/python.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Js.",
    img: "/js.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "Html.",
    img: "/html.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "React",
    img: "/react.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "Nextjs",
    img: "/nextjs.webp",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "Mongodb",
    img: "/mongodb.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "Mysql",
    img: "/mysql.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 11,
    name: "Express",
    img: "/express.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 12,
    name: "Tenserflow",
    img: "/tenser.jpeg",
    nameImg: "/dockerName.svg",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tejas Technological Co",
    period: "Jan 2023 - Present",
    desc: "Contributing to the Saksham website project that facilitates seamless management of academic data such as marks, timetables, and management of academic activities and institutional management.",
    skills: ["Next.js", "Node.js", "Jest"],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-slate-800/70",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Big Foundation, BMSCE's E-Cell",
    period: "Jun 2022 - Dec 2022",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity. Implemented backend solutions for data management and user authentication, improving overall system performance.",
    skills: ["React.js", "Node.js", "MongoDb", "UI/UX"],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-slate-800/70",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Crush Holidays Bangalore",
    period: "Mar 2022 - May 2022",
    desc: "Contributing to the creation of database models and API endpoints for the website. Successfully deployed the website on the server, ensuring smooth operation and performance optimization for travel booking functionalities.",
    skills: ["Node.js", "MongoDB", "REST API", "Deployment"],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-slate-800/70",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/vishesh1525"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:""
  },
  {
    id: 3,
    img: "/link.svg",
    link:"http://www.linkedin.com/in/vishesh-p-gowda"
  },
  {
    id: 4,
    img: "/leetcode.svg",
    link:"https://leetcode.com/u/vishesh_tech/"
  },
  {
    id: 5,
    img: "/gfg.svg",
    link:"https://www.geeksforgeeks.org/user/coder_hacker/"
  },
];
