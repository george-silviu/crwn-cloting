/** DEPRECATED
 *
 * This file is deprecated and replaced by redux in src\store\categories
 *
 */

// import { createContext, useState, useEffect } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";

// // import SHOP_DATA from "../shop-data.js";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   const value = { categoriesMap };

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesMap();
//   }, []);

//   //upload data from js file into firebase db when the product context first loads
//   // useEffect(() => {
//   //   addCollectionAndDocuments("categories", SHOP_DATA);
//   // }, []);

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
