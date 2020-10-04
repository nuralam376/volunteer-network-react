import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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

        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="description"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Event Description"
        />
        {/* errors will return when field validation fails  */}
        {errors.description && <span>This field is required</span>}

        <input
          name="date"
          type="date"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Date"
        />
        {/* errors will return when field validation fails  */}
        {errors.date && <span>This field is required</span>}

        <input type="submit" className="btn btn-primary" />
      </form>
    </Container>
  );
};

export default AddEvent;
