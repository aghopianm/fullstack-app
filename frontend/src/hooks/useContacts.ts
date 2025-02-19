import { useState, useEffect } from "react";
import axios from "axios";

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://127.0.0.1:5000/contact-book");
      setContacts(response.data.contacts);
    } catch (error) {
      setError("Failed to fetch contacts.");
      console.error("Error fetching contacts:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { contacts, isLoading, error, fetchContacts };
};
