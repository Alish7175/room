//dev dependencies
import React, {useState, Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';

//components lazy loaded
import { Layout } from "./pages/Layout";
const Home = lazy(() => import ("./pages/Home/Home"));
const Header = lazy(() => import ("./pages/Header/Header"));
const BasicTestPage = lazy(() => import ("./pages/BasicTestPage/BasicTestPage"));
const MemoizationPage = lazy(() => import ("./pages/Memoization/MemoizationPage"));
const UseCallBack = lazy(() => import ("./pages/UseCallBack/UseCallBack"));
const CarouselShowPage = lazy(() => import ("./pages/CarouselShowPage/CarouselShowPage"));

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const BuggyComponent: React.FC = () => {
  throw new Error('I crashed!');
};
const AppRoutes: React.FC = () => {
  const [key, setKey] = useState(0);
  return (
    <div data-testid="app-routes">
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            console.log('Resetting error boundary');
            setKey(prevKey => {
              const newKey = prevKey + 1;
              console.log('New key:', newKey);
              return newKey;
            });
          }}
        >
          <Routes key={key}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/header" element={<Header />} />
                <Route path="/basicTest" element={<BasicTestPage />} />
                <Route path="/memoize" element={<MemoizationPage />} />
                <Route path="/useCallBack" element={<UseCallBack />} />
                <Route path="/carousel" element={<CarouselShowPage />} />
                <Route path="/buggy" element={<BuggyComponent />} /> {/* Deliberately causing an error */}
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
       
    </div>
  )
}

export default AppRoutes