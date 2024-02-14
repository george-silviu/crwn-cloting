import CategoryItem from "./components/category-item/category-item.component";

import "./categories.styles.scss";

function App() {
  const categories = [
    {
      id: 1,
      title: "Aventura",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Clasici",
    },
    {
      id: 3,
      title: "Educatie",
    },
    {
      id: 4,
      title: "Poezie",
    },
    {
      id: 5,
      title: "Nuvele",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default App;
