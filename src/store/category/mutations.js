export const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_SLUG: (state, slug) => {
    state.slug = slug;
  },
  SET_MAIN_CATEGORIES: (state, categories) => {
    state.main_categories = categories;
  }
};
