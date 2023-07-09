import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const LibraryPage = lazy(() => import('../Pages/LibraryPage/LibraryPage'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
