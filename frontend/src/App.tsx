import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ContactList from './components/ContactList';
import AIChat from './components/AIChat';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contact-book");
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
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-book" element={
          <ContactList 
            contacts={contacts} 
            updateContact={openEditModal} 
            updateCallback={onUpdate} 
          />
        } />
        <Route path="/ai-chat" element={<AIChat />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm 
          existingContact={currentContact} 
          updateCallback={onUpdate} 
        />
      </Modal>
    </Router>
  );
}

export default App;
