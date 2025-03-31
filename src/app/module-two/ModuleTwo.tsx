import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PathRoutes } from '@/routes/path-routes';

const ModuleTwo: FC = () => (
    <Routes>
      <Route path={PathRoutes.MainPath} element={<div>Module Two Page</div>} />
    </Routes>
  );

export default ModuleTwo;
