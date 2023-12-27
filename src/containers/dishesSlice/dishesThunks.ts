import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContacts, Contacts} from '../../types';

export const postContact = createAsyncThunk<void, Contacts>(
  'contact/postContact', async (contact) => {
    await axiosApi.post('/contact.json', contact);
  }
);


export const getContacts = createAsyncThunk<Contacts[]>(
  'contact/getContact',
  async () => {
    const response = await axiosApi.get<ApiContacts>('/contact.json');
    const contacts = response.data;

    console.log('Get Contacts', contacts);

    return Object.keys(contacts).map((id) => ({
      ...contacts[id],
      id,
    }));

  });


export const getFullContacts = createAsyncThunk<Contacts[]>(
  'contact/getFullContacts',
  async () => {
    try {
      const response = await axiosApi.get<Contacts>('/contact.json');
      const contactsFull = response.data;

      console.log('Get full contacts (for modal window)', contactsFull);

      const contactsItemValue = Object.values(contactsFull).map((contact) => ({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        photo: contact.photo,
      }));

      return contactsItemValue;
    } catch (error) {
      console.error(`Get request error with ${error}`);
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk<void, string>(
  'contact/deleteContact',
  async (oneContactId) => {
    await axiosApi.delete(`/contact/${oneContactId}.json`);
  }
);