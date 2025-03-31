import { AppActions } from '@/domain/app-actions';
import { AppDispatch } from '@/domain/app-store';
import { UserProxy } from '@/proxy/user';

const { IsFetching, FinishedFetching } = AppActions;

const getUserInfo = async (dispatchApp: AppDispatch): Promise<void> => {
  dispatchApp({ type: IsFetching });
  try {
    const result = await UserProxy.getUserInfo();
    dispatchApp({ type: AppActions.SetUserProfile, payload: result });
  } finally {
    dispatchApp({ type: FinishedFetching });
  }
};

export const AppApiActions = {
  getUserInfo,
};
