import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PathRoutes } from '@/routes/path-routes';

const ModuleOne: FC = () => (
    <Routes>
      <Route path={PathRoutes.MainPath} element={<div>Module One Page</div>} />
    </Routes>
  );

export default ModuleOne;
