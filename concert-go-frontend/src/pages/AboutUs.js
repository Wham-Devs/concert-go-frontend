import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
} from "reactstrap";

const AboutUs = () => {
  const aboutUs = [
    {
      id: 1,
      name: "James Lee",
      role: "Project Manager",
      image: "picture.url",
      about:
        "Meet James Lee, an army veteran turned full stack developer. With a background in network engineering, he fearlessly embarked on a career change to pursue his passion for technology. James leverages his military discipline and technical expertise to create impactful solutions that push the boundaries of innovation.",
    },
    {
      id: 2,
      name: "Jake Dahlgren",
      role: "Product Manager",
      image: "https://i.imgur.com/EI7b741.png",
      about:
        "Meet Jake, a versatile web developer with a medical background and a passion for creativity. Exceptional communication skills, expertise in coordinating workflow, and a commitment to quality define Jake's previous role as an Orthotics and Prosthetics Fabrication Supervisor. With a BFA in ceramics, Jake embraces artistic environments, continuously learning and refining processes. Nature lover, devoted to loved ones, and driven by innovation, Jake brings a unique blend of skills and dedication to every web development project. Ready to make a significant impact.",
    },
    {
      id: 3,
      name: "Mark Nou",
      role: "Design Lead",
      image: "https://i.imgur.com/95NUh7L.png",
      about:
        "Mark, a talented graffiti artist and graphic designer, dedicated five years to the logistics industry, honing his skills in problem-solving and efficiency. However, driven by a desire to merge his logical thinking with his artistic flair, he made transition into web development. Embracing this new chapter, Mark now channels his creativity into crafting captivating digital experiences, combining his keen eye for design with his technical expertise. With a diverse background spanning multiple disciplines, Mark brings a unique perspective to his work, blending innovation, aesthetics, and functionality to deliver solutions that leave a lasting impression.",
    },
    {
      id: 4,
      name: "Felix Lopez",
      role: "Technology Lead",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qErOFBRMi3LlAjnDIf0uLdi-Ai259VunPMmBQehoi1-wUJzxBoqq05Zq_CTYYuIyhVU3BJVSa2IdSZnhA9tHKPsU-ZAQ=s1600",
      about:
        "Meet Felix, an experienced professional in optical customer service for over a decade. Now venturing into web development, he's fueled by a passion for problem-solving and embraces challenges. With honed skills in active listening and effective communication, Felix thrives in team environments, utilizing his analytical abilities and attention to detail to achieve common goals under pressure. A collaborative team player, he fosters a positive work environment, driving towards collective success. Excited to apply his problem-solving expertise and experience to new projects, Felix brings creativity and innovation to the table.                                        ",
    },
  ];
  return (
    <>
      <div className="bg-black grid grid-cols-4 gap-8 h-screen w-screen pt-20 px-4">
        {aboutUs.map(({ aboutUs, id, name, role, image, about }) => {
          return (
            <Card
              key={id}
              className="bg-transparent transform hover:scale-105 transition-transform duration-300 hover:text-gray-400"
            >
              <CardBody
                className="bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 hover:border-red-500"
                key={id}
              >
                <img src={image} />
                <CardTitle
                  className="text-red-500 font-anton italic text-4xl text-center "
                  tag="h5"
                >
                  {name}
                </CardTitle>
                <CardSubtitle
                  className="text-gray-400 italic text-center"
                  tag="h6"
                >
                  {role}
                </CardSubtitle>
              </CardBody>

              <CardBody>
                <CardText>{about}</CardText>
                <CardLink className="text-center" href="#">
                  GitHub
                </CardLink>
                <CardLink href="#">LinkedIn</CardLink>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
