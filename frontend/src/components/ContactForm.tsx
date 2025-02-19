import { useState } from "react";
import styled from "styled-components";

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

    const updating = Object.entries(existingContact).length !== 0;

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        const data = {
            firstName,
            lastName,
            email
        };
        const url = `http://127.0.0.1:5000/${updating ? `update_contact/${existingContact.id}` : "create_contact"}`;
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || "An error occurred.");
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
