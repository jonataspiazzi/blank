export const createUser = () => {
  return {
    type: 'USER_CREATE'
  }
}

export const readUser = (user) => {
  return {
    type: 'USER_READ',
    payload: user
  };
}

export const updateUser = (user) => {
  return {
    type: 'USER_UPDATE',
    payload: user
  };
}

export const deleteUser = (user) => {
  return {
    type: "USER_DELETE",
    payload: user
  };
}

export const saveUser = (user) => {
  return {
    type: "USER_SAVE",
    payload: user
  };
}
