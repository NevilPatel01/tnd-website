import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Section = ({ title, description, image, extra }) => {
  return (
    <motion.section
      className="mb-8 p-6 rounded-lg hover:border-2 shadow-md mx-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 ">
          <img
            src={image}
            alt={title}
            className="w-full h-auto hover:scale-110 object-contain rounded-md max-h-80"
          />
        </div>
        <div className="md:w-1/2 px-4">
          <h2 className="text-3xl text-green-400 hover:shadow-2xl hover:scale-110 font-bold mb-14">
            {title}
          </h2>
          <p className="text-white text-xl hover:scale-110 text-justify">
            {description}
          </p>
          {extra && <div className="mt-4">{extra}</div>}
        </div>
      </div>
    </motion.section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extra: PropTypes.node,
  imageOnLeft: PropTypes.bool,
};

const WhoWeAre = () => {
  return (
    <Section
      title="Who we are"
      description="The New Developers are a student-led, student-centered group at Mohawk College dedicated to empowering programmers to achieve their career goals. We aim to fill the gaps in the curriculum, helping students stand out in their search for co-op jobs or positions after graduation."
      image="./gif/programmers.gif"
    />
  );
};

const WhatWeDo = () => {
  return (
    <Section
      title="What we do"
      description="We hold workshops with industry guests, alumni, faculty, and fellow students leading discussions on topics ranging from building your professional network to open source projects and more!"
      image="./gif/programmers.gif"
    />
  );
};

const About = () => {
  return (
    <div className="container bg-gradient-to-r from-gray-900 to-green-950 mx-auto px-20 py-10">
      <div className="bg:animate-spin">
        <WhoWeAre />
      </div>
      <div className="bg:animate-spin">
        <WhatWeDo />
      </div>
    </div>
  );
};

export default About;
