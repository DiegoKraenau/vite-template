/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { AppState, AppReducerFn } from '@/domain/app-store';
import { AppActions } from '@/domain/app-actions';
import { DispatchObject } from '../domain/app-store';
import { throwUnhandledActionError } from '@/utils/error/unhandled-action';

export const initialState: AppState = {
  isFetching: false,
  pendingFetches: 0,
};

const handleFetching: AppReducerFn = ({ draft }) => {
  draft.pendingFetches += 1;
  draft.isFetching = true;
  draft.error = undefined;
};

const handleFinishedFetching: AppReducerFn = ({ draft }) => {
  draft.pendingFetches -= 1;
  draft.isFetching = false;
};

const handleErrorFetching: AppReducerFn = ({ draft, payload }) => {
  draft.pendingFetches = 0;
  draft.isFetching = false;
  draft.error = payload;
};

const clearError: AppReducerFn = ({ draft }) => {
  draft.error = undefined;
};

const clearData: AppReducerFn = () => initialState;

const handleSetUserProfile: AppReducerFn = ({ draft, payload }) => {
  draft.user = payload;
};

const reducerHandlers: Record<AppActions, AppReducerFn> = {
  [AppActions.IsFetching]: handleFetching,
  [AppActions.FinishedFetching]: handleFinishedFetching,
  [AppActions.ErrorFetching]: handleErrorFetching,
  [AppActions.ClearError]: clearError,
  [AppActions.ClearData]: clearData,
  [AppActions.SetUserProfile]: handleSetUserProfile,
};

export const appReducer = produce(
  (draft: Draft<AppState>, { type, payload }: DispatchObject<AppActions>) => {
    const handler = reducerHandlers[type] ?? throwUnhandledActionError(type);
    return handler({ draft, type, payload });
  },
);
