import { PathRoutes } from '@/routes/path-routes';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const ModuleOne: FC = () => {
  return (
    <Routes>
      <Route path={PathRoutes.MainPath} element={<div>Module One Page</div>} />
    </Routes>
  );
};

export default ModuleOne;
