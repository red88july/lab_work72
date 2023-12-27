import {createSlice} from '@reduxjs/toolkit';
import {deleteContact, getContacts, getFullContacts, postContact} from '../contactsThinks/contactsThinks.ts';
import {Contacts} from '../../types';

interface ContactsState {
  item: Contacts[];
  itemFull: Contacts[];
  postLoading: boolean;
  getLoading: boolean;
  getFullLoading:boolean;
  deleteOneContact: boolean,
  actionModal: boolean;
  selected: string | null,
}

const initialState: ContactsState = {
  item: [],
  itemFull: [],
  postLoading: false,
  getLoading: false,
  getFullLoading:false,
  deleteOneContact: false,
  actionModal: false,
  selected: null,
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    startEventForModal: (state) => {
      state.actionModal = true;
    },
    endEventForModal: (state) => {
      state.actionModal = false;
    },
    contactsId: (state, action) => {
      state.selected = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(postContact.pending, (state) => {
      state.postLoading = true;
    });
    builder.addCase(postContact.fulfilled, (state) => {
      state.postLoading = false;
    });
    builder.addCase(postContact.rejected, (state) => {
      state.postLoading = false;
    });


    builder.addCase(getContacts.pending, (state) => {
      state.getLoading = true;
    });
    builder.addCase(getContacts.fulfilled, (state, {payload: item}) => {
      state.getLoading = false;
      state.item = item;
    });
    builder.addCase(getContacts.rejected, (state) => {
      state.getLoading = false;
    });


    builder.addCase(getFullContacts.pending, (state) => {
      state.getFullLoading = true;
    });
    builder.addCase(getFullContacts.fulfilled, (state, {payload: itemFull}) => {
      state.getFullLoading = false;
      state.itemFull = itemFull;
    });
    builder.addCase(getFullContacts.rejected, (state) => {
      state.getFullLoading = false;
    });


    builder.addCase(deleteContact.pending, (state) => {
      state.deleteOneContact = true;
    });
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.deleteOneContact = false;
    });
    builder.addCase(deleteContact.rejected, (state) => {
      state.deleteOneContact = false;
    });

  }
});

export const contactReducers = contactsSlice.reducer;
export const {
  startEventForModal,
  endEventForModal,
  contactsId
} = contactsSlice.actions;