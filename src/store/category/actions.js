import { index, show } from "@/api/category";
export const actions = {
  list({ commit }, query) {
    return new Promise((resolve, reject) => {
      index(query, true)
        .then(response => {
          if (query == undefined) {
            commit("SET_MAIN_CATEGORIES", response.data.categories.list);
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  get(category_id) {
    return new Promise((resolve, reject) => {
      show(category_id, true)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
