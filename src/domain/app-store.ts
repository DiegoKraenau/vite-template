import { Dispatch, PropsWithChildren } from 'react';
import { Draft } from 'immer';
import { AppActions } from '@/domain/app-actions';
import { User } from '@/domain/user';
import { ErrorPageInterface } from '@/domain/error-page';

export interface DispatchObject<T> {
  type: T;
  payload?: any;
}

export type AppDispatch = Dispatch<DispatchObject<AppActions>>;

export interface AppState {
  isFetching: boolean;
  pendingFetches: number;
  user?: User;
  error?: ErrorPageInterface;
}

export interface ReducerFnProps<T, K> extends DispatchObject<K> {
  draft: Draft<T>;
}

export interface AppReducerFn {
  (props: ReducerFnProps<AppState, AppActions>): void;
}

export type AppGlobalContextProviderProps = PropsWithChildren<{
  testStateProps?: Partial<AppState>;
  testDispatch?: AppDispatch;
}>;
