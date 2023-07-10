import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const LibraryPage = lazy(() => import('../Pages/LibraryPage/LibraryPage'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));
const WatchedPage = lazy(() => import('../Pages/WatchedPage/WatchedPage'));
const QueuePage = lazy(() => import('../Pages/QueuePage/QueuePage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/library" element={<LibraryPage />}>
          <Route path="watched" element={<WatchedPage />} />
          <Route path="queue" element={<QueuePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
