import { Route, Routes } from 'react-router-dom';
import { FC, lazy, useEffect } from 'react';
import { ModuleRoutes } from '@/routes/module-routes';
import { useGlobalAppDispatch, useGlobalAppState } from '@/store/app-context';
import { AppApiActions } from '@/store/actions';
import { handleError } from '@/utils/error/handle-error';
import { RequestError } from '@/domain/request-error';
import { AppActions } from '@/domain/app-actions';
import ErrorBoundary from '@/shared/ErrorBoundary/ErrorBoundary';
import LoadingScreen from '@/shared/LoadingScreen/LoadingScreen';

const ModuleOne = lazy(() => import('@/app/module-one/ModuleOne'));
const ModuleTwo = lazy(() => import('@/app/module-two/ModuleTwo'));

const App: FC = () => {
  const { error, pendingFetches } = useGlobalAppState();
  const dispatchApp = useGlobalAppDispatch();

  useEffect(() => {
    const loadUserData = async (): Promise<void> => {
      try {
        await AppApiActions.getUserInfo(dispatchApp);
      } catch (requestError) {
        handleError({ dispatchApp, error: requestError as RequestError<string> });
      }
    };

    loadUserData();
  }, [dispatchApp]);

  const onClearError = (): void => {
    dispatchApp({ type: AppActions.ClearError });
  };

  return (
    <>
      <LoadingScreen open={pendingFetches > 0} />
      <ErrorBoundary error={error} onClearError={onClearError}>
        <Routes>
          <Route path={ModuleRoutes.ModuleOne} element={<ModuleOne />} />
          <Route path={ModuleRoutes.ModuleTwo} element={<ModuleTwo />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
