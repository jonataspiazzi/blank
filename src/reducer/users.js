const initialState = [
  {
    id: 1,
    first: "John",
    last: "Doe",
    phone: "555 4444"
  },
  {
    id: 2,
    first: "Joanne",
    last: "Doe III",
    phone: "555 9999"
  },
  {
    id: 3,
    first: "Junior",
    last: "Doe II",
    phone: "555 1111"
  },
  {
    id: 4,
    first: "Joker",
    last: "Doe the Thrird",
    phone: "555 2222"
  }
];

const UsersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_SAVE':
    {
      let item = state.filter(i => i.id == action.payload.id)[0];
      
      if (!item) {
        item = {};
        item.id = state.reduce((ac, i) => ac > i.id ? ac : i.id, 0) + 1;
        state.push(item);
      }

      item.first = action.payload.first;
      item.last = action.payload.last;
      item.phone = action.payload.phone;

      return Array.apply([], state);
    }
    case 'USER_DELETE':
    {
      const item = state.filter(i => i.id == action.payload.id)[0];
      const index = state.indexOf(item);

      if (index >= 0) {
        state.splice(index, 1);
        return Array.apply([], state);
      }
      
      return state;
    }
    default:
      return state;
  }
};

export default UsersReducer;
