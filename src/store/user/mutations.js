export const mutations = {
  // Auth user setters
  SET_USER: (state, user) => {
    console.log(user);
    state.user.id = user.id;
    state.user.name = user.name;
    state.user.last_name = user.last_name;
    state.user.email = user.email;
    state.user.phone = user.phone;
  },
  USER_AVATAR: (state, avatar) => {
    state.user.avatar = avatar; // process.env.VUE_APP_BASE_URL + 'images/avatar.png'
  },
  USER_TOKEN: (state, token) => {
    state.user.token = token;
    state.login = true;
  },
  IS_AUTH: (state, login) => {
    state.login = login;
  }
};
