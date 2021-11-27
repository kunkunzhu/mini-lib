import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Field } from "react-final-form";
import Select from "react-select";
import { 
  BookWrapper,  
  SubmitButton,
  ModalContent,
  ModalHeader,
  ProgressGroup
} from "../Header/headerStyles";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'var(--sun)' : 'var(--flora)',
    padding: 10,
    fontFamily: "var(--txt-font)",
    fontSize: 18,
  }),
  menu: (provided, state) => ({
    ...provided,
    width: 200,
    borderBottom: '1px dotted pink',
    color: 'red',
    padding: 20,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  }
}

export const BookButton = () => {
  
  const [bookModalShow, setBookModalShow] = useState(false);

  const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  const progressOptions = [
    { value: "not-started", label: "Not Started 💡" },
    { value: "in-progress", label: "In progress 🚧" },
    { value: "finished", label: "Finished ✅" }
  ];

  return (
    <BookWrapper>
      <button onClick={() => setBookModalShow(true)}>add a new book.</button>
      <Modal
        show={bookModalShow} 
        onHide={() => setBookModalShow(false)}
        centered
      >
        <ModalHeader className="header" closeButton>
          <Modal.Title className="title">add a new book.</Modal.Title>
        </ModalHeader>
        <ModalContent>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Field name="title">
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="title" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="author">
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type="text" placeholder="author" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="progress">
                  {({ input, meta }) => {
                    const defaultValue = progressOptions.find(
                      item => item.value === input.value
                    );
                    return (
                      <ProgressGroup>
                        <label>progress.</label>
                        <Select
                          {...input}
                          onChange={e => {
                            input.onChange(e.value);
                          }}
                          defaultValue={progressOptions[1]}
                          styles={customStyles}
                          options={progressOptions}
                          className={
                            meta.invalid && meta.touched && meta.error
                              ? "is-invalid"
                              : ""
                          }
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 10,
                            colors: {
                              ...theme.colors,
                              primary25: 'var(--sun)',
                              primary: 'var(--melon)',
                            },
                          })}
                          value={defaultValue}
                        />
                      </ProgressGroup>
                    );
                  }}
                </Field>
                <SubmitButton type="submit" disabled={submitting}>
                  Submit
                </SubmitButton>
              </form>
            )}
          />
        </ModalContent>
      </Modal>
    </BookWrapper>
  );
};
