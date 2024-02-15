import CategoryItem from "../category-item/category-item.component";

import "./category-list.styles.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-list-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryList;
