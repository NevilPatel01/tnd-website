import PropTypes from "prop-types";
import { motion } from "framer-motion";

const EventCard = ({ event, index }) => {
  const linkedInLink = event.linkedinLink || "#";

  return (
    <motion.div
      className="event-card inline-block mx-2 mb-25 relative w-full md:w-1/2 lg:w-1/3"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-md">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <img
            src={`./assets/${event.image}`}
            alt={event.title}
            className="w-full h-full object-cover rounded-md"
          />
        </a>
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
          <a
            href={linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </motion.div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkedinLink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Events = ({ events, heading }) => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 to-green-950">
      <div className="container mx-auto mb-8">
        <h2 className="max-w-3xl mx-auto my-auto text-5xl font-semibold mb-8 text-center bg-white px-4 py-4 text-green-800 rounded-lg">
          {heading}
        </h2>
        <div className="flex flex-wrap peer-hover:scale-110 justify-center text-white text-2xl gap-4">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkedinLink: PropTypes.string,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
};

export default Events;
