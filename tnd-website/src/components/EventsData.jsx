import Events from "./Events";

const EventsData = () => {
  const upcomingEvents = [
    {
      image: "tnd1.png",
      title: "TND",
      description: ``,
      linkedinLink: "/",
    },
  ];

  const pastEvents = [
    {
      image: "tnd1.png",
      title: "TND",
      description: ``,
      linkedinLink: "/",
    },
    {
      image: "tnd1.png",
      title: "TND",
      description: ``,
      linkedinLink: "/",
    },
    {
      image: "tnd1.png",
      title: "TND",
      description: ``,
      linkedinLink: "/",
    },
    {
      image: "tnd1.png",
      title: "TND",
      description: ``,
      linkedinLink: "/",
    },
  ];

  return (
    <>
      <Events events={upcomingEvents} heading=" Upcoming Events" />
      <Events events={pastEvents} heading="Past Events" />
    </>
  );
};

export default EventsData;
