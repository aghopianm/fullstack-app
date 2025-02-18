import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
  margin: 0;
  font-size: 24px;
`;

const CreateButton = styled.button`
  background-color: #10b981;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #059669;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const Th = styled.th`
  background-color: #f5f5f5;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  color: #666;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f8f8f8;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:last-child {
    margin-right: 0;
  }
`;

const UpdateButton = styled(ActionButton)`
  background-color: #0066cc;
  color: white;

  &:hover {
    background-color: #0052a3;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #bd2130;
  }
`;

const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("Failed to delete");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Container>
            <HeaderContainer>
                <Title>Contacts</Title>
                <CreateButton onClick={() => updateContact({})}>
                    Create New Contact
                </CreateButton>
            </HeaderContainer>
            <Table>
                <thead>
                    <tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Email</Th>
                        <Th>Actions</Th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Tr key={contact.id}>
                            <Td>{contact.firstName}</Td>
                            <Td>{contact.lastName}</Td>
                            <Td>{contact.email}</Td>
                            <Td>
                                <UpdateButton onClick={() => updateContact(contact)}>
                                    Update
                                </UpdateButton>
                                <DeleteButton onClick={() => onDelete(contact.id)}>
                                    Delete
                                </DeleteButton>
                            </Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ContactList;