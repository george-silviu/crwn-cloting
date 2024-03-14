import { createSelector } from "reselect"; //memoization = cache the previous result and return the cached result if the arguments are the same

const selectCategoryReducer = (state) => {
  // console.log("selectCategoryReducer selector fired...");
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer], //input selectors
  (categoriesSlice) => {
    // console.log("selectCategories selector fired...");
    return categoriesSlice.categories; //output selectors
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories], //as long as the input selectors are the same, the output selector will return the cached result
  (categories) => {
    // console.log("categoriesMap selector fired...");
    return categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {});
  }
);
