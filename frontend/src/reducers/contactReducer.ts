// reducers/contactReducer.ts

import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../actions/contactActions';

// Define the structure of a contact
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Define the structure of the state
interface ContactState {
  contacts: Contact[];
}

// Define action types
interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Contact;
}

interface UpdateContactAction {
  type: typeof UPDATE_CONTACT;
  payload: Contact;
}

interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  payload: number; // Contact ID
}

type ContactActionTypes = AddContactAction | UpdateContactAction | DeleteContactAction;

// Initial state
const initialState: ContactState = {
  contacts: [],
};

// Reducer function with proper typing
function contactReducer(state: ContactState = initialState, action: ContactActionTypes): ContactState {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
}

export default contactReducer;
