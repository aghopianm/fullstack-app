import { useState } from "react";

// Define the structure of a contact
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Define the return type of the hook
interface UseModalReturn {
  isModalOpen: boolean;
  currentContact: Contact | null; // Use null to indicate no contact is selected
  openEditModal: (contact: Contact) => void; // Define the function type
  closeModal: () => void;
}

export function useModal(): UseModalReturn {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null); // Initialize as null

  const openEditModal = (contact: Contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact(null); // Reset to null when closing
  };

  return { isModalOpen, currentContact, openEditModal, closeModal };
};