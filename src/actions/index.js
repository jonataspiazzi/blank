export const selectUser = (user) => {
  console.log('You clicked in ', user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  };
}
