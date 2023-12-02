import { createSlice } from "@reduxjs/toolkit";
const propertyModel = {
  host_id: "",
  propertyType: "",
  stayType: "",
  country: "",
  address: "",
  maxGuests: "",
  bedRooms: "",
  beds: "",
  bathrooms: "",
  amenities: [],
  images: [],
  title: "",
  description: "",
  price: "",
};

const INITIAL_STATE = {
  usersData: [],
  property: propertyModel,
  state: false,
  listings: [],
};
const staysSlice = createSlice({
  name: "stays",
  initialState: INITIAL_STATE,
  reducers: {
    addProperty: (state, action) => {
      const key = action.payload.property;

      state.property[key] = action.payload.data;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    addListings: (state, action) => {
      state.listings.push(action.payload);
    },
  },
});
export const { addProperty, setState, addListings } = staysSlice.actions;
export default staysSlice.reducer;
