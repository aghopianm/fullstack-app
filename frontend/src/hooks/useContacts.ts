import { useState, useEffect } from "react";
import axios from "axios";

// Define the structure of a contact
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Define the return type of the hook
interface UseContactsReturn {
  contacts: Contact[];
  isLoading: boolean;
  error: string;
  fetchContacts: () => Promise<void>; // Define the fetchContacts function type
}

export const useContacts = (): UseContactsReturn => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await axios.get<{ contacts: Contact[] }>("http://127.0.0.1:5000/contact-book");
      setContacts(response.data.contacts);
    } catch (error) {
      setError("Failed to fetch contacts.");
      console.error("Error fetching contacts:", error instanceof Error ? error.message : error);
    } finally {
      setIsLoading(false);
    }
  };

  return { contacts, isLoading, error, fetchContacts };
};