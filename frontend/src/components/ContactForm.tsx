import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../actions/contactActions"

const FormContainer = styled.form`
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #0052a3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const ContactForm = ({ existingContact = {}, updateCallback }) => {
  const [firstName, setFirstName] = useState(existingContact.firstName || "");
  const [lastName, setLastName] = useState(existingContact.lastName || "");
  const [email, setEmail] = useState(existingContact.email || "");
  const [error, setError] = useState(""); // Error message state

  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(existingContact.firstName || "");
    setLastName(existingContact.lastName || "");
    setEmail(existingContact.email || "");
  }, [existingContact]);

  const updating = Object.entries(existingContact).length !== 0;

  const onSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const contact = {
      id: existingContact.id || Date.now(),
      firstName,
      lastName,
      email,
    };

    try {
      if (updating) {
        dispatch(updateContact(contact));
      } else {
        dispatch(addContact(contact));
      }
      updateCallback(); // Refresh contact list if successful
    } catch (error) {
      setError(error.message); // Set the error message from the backend
    }
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Display error message */}
      <FormGroup>
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">Last Name:</Label>
        <Input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      <SubmitButton type="submit">
        {updating ? "Update" : "Create"}
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;