export const getters = {
  // Auth user getters
  USER: state => state.user,
  USER_TOKEN: state => state.user.token,
  USER_AVATAR: state => state.user.avatar,
  USER_FIRST_NAME: state => state.user.first_name,
  IS_AUTH: state => state.login
};
