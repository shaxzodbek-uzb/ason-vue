import { home } from "@/api/page";
export const actions = {
  home({ commit }, query) {
    return new Promise((resolve, reject) => {
      home(query, true)
        .then(response => {
          commit("SET_HOME_PAGE", response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
