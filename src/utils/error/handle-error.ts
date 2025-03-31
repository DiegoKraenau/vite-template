import { AppActions } from '@/domain/app-actions';
import { AppDispatch } from '@/domain/app-store';
import { ModalButtonText } from '@/domain/modal-button';
import { noopFunction } from '@/domain/noopFunction';
import { RequestError } from '@/domain/request-error';
import { getErrorPage } from '@/utils/error/get-error-page';

interface HandleErrorProps {
  dispatchApp: AppDispatch;
  error: RequestError<string>;
  onPrimaryActionCallback?: (buttonText: string) => void;
}

export const handleError = ({
  dispatchApp,
  error,
  onPrimaryActionCallback = noopFunction,
}: HandleErrorProps): void => {
  if (!error) {
    return;
  }

  const errorPage = getErrorPage({
    ...error,
    onClickCallback: ({ buttonLabel }: { buttonLabel: string }) => {
      onPrimaryActionCallback(buttonLabel);

      if ([ModalButtonText.Accept].includes(buttonLabel as ModalButtonText)) {
        dispatchApp({ type: AppActions.ClearError });
      }
    },
  });

  dispatchApp({ type: AppActions.ErrorFetching, payload: errorPage });
};
