import project1 from "../assets/projects/fbss.png";
import project2 from "../assets/projects/vcss.png";
import project3 from "../assets/projects/fdss.png";

 export const HERO_CONTENT = 
 `I am a passionate Frontend Developer, keen to build user-friendly and modern web applications with my expertise in React.js.
After months of practice and building projects, I have gained strong knowledge of JavaScript, Tailwind CSS, and React itself.
I am now looking forward to diving into backend technologies and bringing out the best in my work
  `;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Facebook Clone",
    image: project1,
    description:
      "Responsive and Facebook alike UI Interfaces, consits of features like Authentication, post, like, comment etc",
    technologies: ["ReactJs", "Firebase", "TailwindCSS"],
    live:'https://myfbwebaap.vercel.app/',
    projectName:'MyFbWebApp',
    gitHub:'https://github.com/jamyousuf005/facebook-clone'
  },
  {
    title: "Video Conferencing App",
    image: project2,
    description:
      "By the help of Zegocloud's Api, integrated this video conferencing feature with a decent UI",
    technologies: ["ReactJs", "TailwindCSS", "Zegocloud"],
    live:'https://video-conferencing-web-app-zeta.vercel.app/',
    projectName:'VideoConfApp',
    gitHub:'https://github.com/jamyousuf005/video-conferencing-webApp'
  },
  {
    title: "Food Delivery App",
    image: project3,
    description:
      "Taking the help of best resources , implemented Redux into this project that contains features like adding to cart, filtering items, billing etc",
    technologies: ["ReactJs", "Redux Toolkit", "TailwindCSS"],
    live:'https://food-delivery-app-seven-indol.vercel.app/',
    projectName:'foodDeliveyApp',
    gitHub:'https://github.com/jamyousuf005/food-delivery-app '
  },
];

export const CONTACT = {
  
  phoneNo: "+92 331-8955679 ",
  email: "jamyousif18@gmail.com",
};
