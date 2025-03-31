import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { ModuleRoutes } from '@/routes/module-routes';
import { FC, lazy } from 'react';

const ModuleOne = lazy(() => import('@/app/module-one/ModuleOne'));
const ModuleTwo = lazy(() => import('@/app/module-two/ModuleTwo'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={ModuleRoutes.ModuleOne} element={<ModuleOne />} />
      <Route path={ModuleRoutes.ModuleTwo} element={<ModuleTwo />} />
    </Routes>
  );
};

export default App;
