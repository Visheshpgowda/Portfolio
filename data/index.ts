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
    title: "Software As a Service Website(Saas)",
    des: "Utilized ChatGPT API, Replit, Next.js, TypeScript, Tailwind CSS, and Clerk authentication for a robust tech stack. Integrated real-time chat, image, and music generation, code execution, and enhanced user engagement",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Clogo.svg", "/fm.svg"],
    link: "https://github.com/vishesh1525/ai-saas",
  },
  {
    id: 2,
    title: "Image Insight: ML-Based Classification Model ",
    des: "•	Developed an image classification model using predefined datasets, applying OpenCV for image and eye detection, and conducting feature engineering for optimal accuracy ",
    img: "/ml.png",
    iconLists: ["/python.svg", "/tenser.jpeg", "/html.png"],
    link: "https://github.com/vishesh1525/ai-saas",
  },
  {
    id: 3,
    title: "FULLSTACK DEVLOPMENT OF HOTEL BOOKING WEBSITE",
    des: "Engineered a robust booking website with the MERN stack, emphasizing MVC architecture. Built a secure MongoDB database with Mongoose ODM, integrated third-party APIs for geolocation, authentication, and seamless functionality display.",
    img: "/p2.png",
    iconLists: ["/elogo.svg", "/mlogo.svg", "/ts.svg", "/nlogo.svg", "/c.svg"],
    link: "https://github.com/vishesh1525/MERN-stack-project",
  },
  {
    id: 4,
    title: "Next.js Music Class App",
    des: "Utilized Accenture UI components to craft a visually stunning UI for the music app, implemented seamless Next.js routing for easy navigation across music class categories, schedules, and registration, ensuring responsiveness across all devices.",
    img: "/image.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Clogo.svg"],
    link: "https://github.com/vishesh1525/next-js-project",
  },
  {
    id: 5,
    title: "Custom Authentication System with JWT Tokens, Sessions, and AI Integration",
    des: "Developed a custom authentication system with JWT tokens, sessions, and AI integration, showcasing expertise in backend development and security protocols. Seamlessly combined technologies to deliver a robust and intelligent solution, highlighting versatility and innovation.",
    img: "/p5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/vishesh1525/next-js-fullstack",
  },
  {
    id: 6,
    title: "Parking Lot Mangement System",
    des: "The Parking Lot Management System(Book My Spot) project is designed to streamline andenhance the process of managing parking facilities within the college campus. This systemleverages the MERN stack (MongoDB,Express,React and Node.js), which provide a comprehensive, efficient, and user-friendly solution for parking lot management.",
    img: "/p6.jpg",
    iconLists: ["/react.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/express.svg"],
    link: "https://github.com/vishesh1525/ParkingslotsProject",
  },
  {
    id: 7,
    title: "FrontEnd design of the Fantasy 11",
    des: "The Cricket Booking Website's frontend is designed using HTML, CSS, and JavaScript to create a user-friendly and visually appealing interface. HTML structures the content, CSS styles it with responsive layouts and vibrant designs, and JavaScript adds interactivity, allowing users to easily browse, filter, and book cricket grounds or matches. The design ensures a smooth and efficient booking experience for users.",
    img: "/cricket.png",
    iconLists: ["/html.png", "/tail.svg", "/js.svg"],
    link: "https://github.com/vishesh1525/ParkingslotsProject",
  },
  {
    id: 8,
    title: "Socket Programing",
    des: "Socket programming is a way to enable two-way communication between the client and the server over a network. In this case, WebSockets can be used to maintain an open connection between the user's browser (client) and the server, allowing for real-time updates without the need to constantly refresh the page",
    img: "/unixp.png",
    iconLists: ["/unix.jpeg","c-1.svg"],
    link: "/socket.pdf",
  }
];

export const testimonials = [
  
  {
    quote:
      "Certified",
    name: "Certifcate",
    title: "Google Cloud Computing Foundations Certification",
    img:"/google.png"
  },
  {
    quote:
      "Certified",
    name: "Certifcate",
    title: "Supervised Machine Learning: Regression and Classification",
    img:"/mlcert1.jpeg"
  },
  {
    quote:
      "Certified",
    name: "Certifcate",
    title: "Advanced Learning Algorithms",
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
    name: "python",
    img: "/python.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "js.",
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
    name: "react",
    img: "/react.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "nextjs",
    img: "/nextjs.webp",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "mongodb",
    img: "/mongodb.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "mysql",
    img: "/mysql.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 11,
    name: "express",
    img: "/express.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 12,
    name: "tenserflow",
    img: "/tenser.jpeg",
    nameImg: "/dockerName.svg",
  }
];

export const workExperience = [
  {
    id: 1,
    title: " Backend Developer||Big Foundation,Bmsce’s E-Cell.",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 2,
    title: "Software Engineer Intern| Tejas Technological Co",
    desc: "Contributing to the Saksham website project that facilitates seamlessmanagement of academic data such as marks, timetables, andmanagement of academic activities and institutional management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
