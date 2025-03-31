import { PathRoutes } from '@/routes/path-routes';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const ModuleTwo: FC = () => {
  return (
    <Routes>
      <Route path={PathRoutes.MainPath} element={<div>Module Two Page</div>} />
    </Routes>
  );
};

export default ModuleTwo;
