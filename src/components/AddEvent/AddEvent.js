import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    const { title: name, description, date } = data;

    const newEvent = {
      name,
      description,
      date,
    };

    fetch("http://localhost:5000/events/add", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Event created successfully");
          reset();
        } else {
          alert("Event not created");
        }
      })
      .catch(() => alert("Somwthing went wrong"));
  };

  return (
    <Container>
      <h4>Add Event</h4>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          name="title"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Event Title"
        />
        {errors.title && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="description"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Event Description"
        />
        {/* errors will return when field validation fails  */}
        {errors.description && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />
        <input
          name="date"
          type="date"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Date"
        />
        {/* errors will return when field validation fails  */}
        {errors.date && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />
        <input type="submit" className="btn btn-primary" />
      </form>
    </Container>
  );
};

export default AddEvent;
