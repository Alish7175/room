import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import BasicTestPage from "./pages/BasicTestPage/BasicTestPage";
import MemoizationPage from "./pages/Memoization/MemoizationPage";
import UseCallBack from "./pages/UseCallBack/UseCallBack";

const AppRoutes = () => {
  return (
    <div data-testid="app-routes">
        <Routes >
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/basicTest" element={<BasicTestPage />} />
            <Route path="/memoize" element={<MemoizationPage />} />
            <Route path="/useCallBack" element={<UseCallBack />} />
        </Route>
    </Routes>
    </div>
  )
}

export default AppRoutes