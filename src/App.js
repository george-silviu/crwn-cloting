import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
