/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yasin Hamiza",
  title: "Hi all, I'm Yasin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yasin315",
  linkedin: "https://www.linkedin.com/in/yasin-h-a3205b282",
  gmail: "yasinhamza315@gmail.com",
  gitlab: "https://gitlab.com/yasin315",
  /*facebook: "#",
  medium: "#",
  stackoverflow: "#",*/
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    /*{
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },*/
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }/*,
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    }*/,
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    /*{
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gondar University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Electrical and Computer Engineering",
      duration: "September 2018 - April 2020",
      desc: "Built award-winning projects in traffic control and energy systems.",
      descBullets: [
        "Developed traffic control and energy systems projects",
  "Won 1st place in a national engineering competition",
  "Collaborated with university researchers on innovative solutions",
  "Contributed to award-winning research projects"

      ]
    },
    {
      schoolName: "Admas University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Busines Managment",
      duration: "September 2019 - April 2023",
      desc: "Studied core business management principles with a focus on leadership, finance, and operations.",
      descBullets: [
        "Gained expertise in business strategy and operations",
    "Developed skills in financial management and analysis",
    "Completed projects in organizational leadership and management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Digital Electronics",
      progressPercentage: "75%"
    },
    {
      Stack: "Graphics Design",
      progressPercentage: "65%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Supervisor",
      company: "Emarosh Engineering",
      companylogo: require("./assets/images/emarosh.jpeg"),
      date: "Sep 2023 – Nov 2023",
      desc: "Managed and supervised telecom product operations, while delivering innovative solutions for construction projects.",
      descBullets: [
        "Created innovative solutions for construction industry needs",
    "Ensured efficient project management and product delivery"
      ]
    },
    {
      role: "Electronics Trainer & Technician",
      company: "Self Employed",
      companylogo: require("./assets/images/electronics.png"),
      date: "Nov 2021 – May 2022",
      desc: "Provided training in electronics while offering technical repair and maintenance services for various electronic devices.",
      descBullets: [
        "Trained individuals in electronics fundamentals and repair techniques",
    "Repaired and maintained a variety of electronic devices",
    "Developed custom electronic solutions for client needs"]
    }/*,
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }*/
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Innovative Engineering Solutions",
  subtitle: "Showcasing a Selection from Over 35+ Projects in Electrical and Software Engineering",
  projects: [
    {
      image: require("./assets/images/school.jpeg"),
      projectName: "School Control System",
      projectDesc: "An advanced device to manage school operations, track student attendance, and enhance communication with features like exam result access, lighting control, and campus phones.",
      /*footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]*/
    },
    {
      image: require("./assets/images/trafic.png"),
      projectName: "Traffic Control System",
      projectDesc: "A safety-focused system that prevents traffic accidents by controlling vehicle speeds and integrating with smart wearables to detect pedestrians, reducing collisions.",
     /* footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    },{
      image: require("./assets/images/electric.jpeg"),
      projectName: "Electric Line Fault Locator",
      projectDesc: "An advanced diagnostic tool designed to precisely locate faults in extensive electrical lines, such as 200 km long, reducing time and effort needed for repairs by identifying the exact fault location.",
      /*footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    },{
      image: require("./assets/images/light.png"),
      projectName: "Self-Charging Light for Rural Areas and Schools",
      projectDesc: "A versatile, self-sustaining light system designed to provide reliable energy for rural areas and schools, offering essential lighting and power where traditional electricity sources are unavailable or unreliable.",
      /*footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    },{
      image: require("./assets/images/phone.jpeg"),
      projectName: "Network-Free Community Phone Solution",
      projectDesc: "Created a wireless phone system that enables communication in areas without network infrastructure. This solution offers a cost-free way for communities to stay connected, overcoming local connectivity issues.",
      /*footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gold Medal for Outstanding Innovative Work on Signal WiFi",
      subtitle:
        "Awarded a gold medal and certificate for outstanding innovative work on Signal WiFi in 2018. This recognition highlighted exceptional contributions to wireless communication technology.",
      image: require("./assets/images/mintlogo.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }/*,
        {
          name: "Award Letter",
          url: "#"
        },
        {
          name: "Google Code-in Blog",
          url: "#"
        }*/
      ]
    },
    {
      title: "1st Place in the Region for Educational Contributions",
      subtitle:
        "Honored with 1st place in the region for outstanding performance and significant contributions to educational activities during the 2017 fiscal year. This accolade recognized exceptional impact and dedication to enhancing educational effectiveness.",
      image: require("./assets/images/educationlogo.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    },

    {
      title: "2nd Place in National Science Fair",
      subtitle: "Received recognition for 2nd place in the Engineering project category at the National Science Fair competition. This award was given in collaboration with STEM Synergy, during the third round of the competition held on November 10, 2018, at the Ministry of Innovation and Technology.",
      image: require("./assets/images/stemlogo.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""}
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "#",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 176 45294725",
  email_address: "Yasinhamza315@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
