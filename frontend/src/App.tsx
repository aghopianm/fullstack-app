import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactList from "./components/ContactList";
import AIChat from "./components/AIChat";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";
import { useContacts } from "./hooks/useContacts";
import { useModal } from "./hooks/useModal";

function App() {
  const { contacts, fetchContacts } = useContacts();
  const { isModalOpen, currentContact, openEditModal, closeModal } = useModal();

  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact-book"
          element={
            <ContactList
              contacts={contacts}
              updateContact={openEditModal}
              updateCallback={onUpdate}
            />
          }
        />
        <Route path="/ai-chat" element={<AIChat />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
      </Modal>
    </Router>
  );
}

export default App;
