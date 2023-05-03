const images = require.context("../../assets/side-projects", true);
const Projects = [

  {
    img: images("./kaivo.png"),
    title: "Kaivo" ,
    description:
      "An ecommerce website made using react.",
    skills: "React, CSS, JavaScript",
    skillsArray: ["All","JavaScript", "React", "CSS"],
    link: "https://ayxxn-shxrif.me/Kaivo/",
  },
 {
    img: images("./bella.png"),
    title: "Bellabeat-Analysis",
    description:
      "This is a case study conducted as part of the Google Data Analytics Professional Certificate capstone course.",
    skills: "Python, SQL,R",
    skillsArray: ["All", "Python", "SQL", "R"],
    link: "http://ayxxn-shxrif.me/Bellabeat-Analysis/",
  },

  {
    img: images("./front.png"),
    title: "ProjectX",
    description:
      "A personal project keeper using Node,Mongodb and Express. ",
    skills: "Node, Express, MongoDB, Pug",
    skillsArray: ["All","Express","Node", "MongoDB","Pug","Bash","CSS"],
    link: "https://projectx-r5tf.onrender.com/",
  },
   
  {
    img: images("./BERT-CLASSIFICATION.png"),
    title: "BERT-CLASSIFICATION",
    description: "The model uses tf.data api as input data pipeline and perform classification of the desired cases.",
    skills: "Python, Jupyter Notebook, Tensorflow, Text Classification, Fine Tuning",
    skillsArray: ["All","Python","Tensorflow","Jupyter Notebook","Text Classification",'Fine Tuning'],
    link: "https://github.com/ayxxn-shxrif/BERT-TEXT-CLASSIFICATION",
  },
  {
    img: images("./portfolio.png"),
    title: "Personal Website",
    description:"minimal showcase of talent on a minimal personal website",
    skills: "React, CSS",
    skillsArray: ["All", "JavaScript", "React", "CSS"],
    link: "https://ayxxn-shxrif.me",
  },
 {
    img: images("./scraping-stackoverflow.png"),
    title: "Scraping Stackoverflow",
    description:
      "Web crawler using Mongodb and Scrapy ",
    skills: "Python, MongoDB",
    skillsArray: ["All", "Python", "Webscraping", "MongoDB"],
    link: "https://github.com/ayxxn-shxrif/scraping_stackoverflow",
  },

  {
    img: images("./airbnb.png"),
    title: "AIRBNB-CLONE",
    description:"static airbnb clone using React",
    skills: "React, CSS",
    skillsArray: ["All", "JavaScript", "React"],
    link: "https://github.com/ayxxn-shxrif/AIRBNB-STATIC-CLONE-REACT",
  },
  {
    img: images("./face-recognition.png"),
    title: "Face-Recognizer",
    description:
      "python script to detect face in real time using OpenCV.",
    skills:
      "Python, Computer Vision",
    skillsArray: ["All", "Python", "Object-Detection"],
    link: "https://github.com/ayxxn-shxrif/face-recog-with-webcam",
  },
 ];

export default Projects;
