export const selectCategoriesMap = (state) => {
  return state.categories.categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
};
