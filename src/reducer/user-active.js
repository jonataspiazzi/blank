const emptyState = {
  action: null,
  user: {}
};

const UserActiveReducer = (state = null, action) => {
  switch (action.type) {
    case 'USER_CREATE':
      return {
        action: 'create',
        user: {}
      };
    case 'USER_READ':
      return {
        action: 'read',
        user: action.payload
      };
    case 'USER_UPDATE':
      return {
        action: 'update',
        user: action.payload
      };
    case 'USER_DELETE':
      return state.user.id == action.payload.id ? emptyState : state;
    default:
      return !state ? emptyState : state;
  }
}

export default UserActiveReducer;
