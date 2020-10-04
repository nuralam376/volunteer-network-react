import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EventDetails from "../EventDetails/EventDetails";

const Events = () => {
  const [tasks, setTasks] = useState([]);

  const allTasks = [
    {
      id: 1,
      name: "Child Support",
      image: "/resources/images/childSupport.png",
    },
    {
      id: 2,
      name: "Refuge shelter",
      image: "/resources/images/refuseShelter.png",
    },
    {
      id: 3,
      name: "Food Charity",
      image: "/resources/images/foodCharity.png",
    },
    {
      id: 4,
      name: "Host a clothing swap",
      image: "/resources/images/clothSwap.png",
    },
    {
      id: 5,
      name: "Host a river clean-up",
      image: "/resources/images/riverClean.png",
    },
    {
      id: 6,
      name: "Clean water for children",
      image: "/resources/images/cleanWater.png",
    },
    {
      id: 7,
      name: "Good Education",
      image: "/resources/images/goodEducation.png",
    },
    {
      id: 8,
      name: "New books for children",
      image: "/resources/images/newBooks.png",
    },
    {
      id: 9,
      name: "Host a study plan",
      image: "/resources/images/studyGroup.png",
    },
    {
      id: 10,
      name: "Build birdhouses for your neighbors",
      image: "/resources/images/birdHouse.png",
    },
    {
      id: 11,
      name: "Organize books at the library",
      image: "/resources/images/libraryBooks.png",
    },
    {
      id: 12,
      name: "Give a seminar on driving safety",
      image: "/resources/images/driveSafety.png",
    },
    {
      id: 13,
      name: "Give free music lessons",
      image: "/resources/images/musicLessons.png",
    },
    {
      id: 14,
      name: "Teach people how to register to vote",
      image: "/resources/images/voteRegister.png",
    },
    {
      id: 15,
      name: "Clean up your local park",
      image: "/resources/images/clearnPark.png",
    },
    {
      id: 16,
      name: "Give IT help to local adults",
      image: "/resources/images/ITHelp.png",
    },
    {
      id: 17,
      name: "Foster a shelter animal",
      image: "/resources/images/stuffedAnimals.png",
    },
    {
      id: 18,
      name: "Babysit during PTA meetings",
      image: "/resources/images/babySit.png",
    },
    {
      id: 19,
      name: "Collect stuffed animals",
      image: "/resources/images/stuffedAnimals.png",
    },
    {
      id: 20,
      name: "Collect school supplies",
      image: "/resources/images/schoolSuffiles.png",
    },
  ];

  useEffect(() => {
    setTasks(allTasks);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {tasks.map((task) => (
          <EventDetails key={task.id} task={task} />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
