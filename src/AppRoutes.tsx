import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";

const AppRoutes = () => {
  return (
    <div data-testid="app-routes">
        <Routes >
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/header" element={<Header />} />
        </Route>
    </Routes>
    </div>
  )
}

export default AppRoutes