import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Modal from "./Modal";
import Avatar from "./components/Avatar";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <>
      <Avatar src="/favicon.ico" size="small" />
      <ContactList 
        contacts={contacts} 
        updateContact={openEditModal} 
        updateCallback={onUpdate} 
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm 
          existingContact={currentContact} 
          updateCallback={onUpdate} 
        />
      </Modal>
    </>
  );
}

export default App;