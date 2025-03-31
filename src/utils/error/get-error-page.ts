import { ErrorPageInterface } from '@/domain/error-page';
import { ErrorPresentation } from '@/domain/error-presentation';
import { ModalButtonText } from '@/domain/modal-button';
import { RequestError } from '@/domain/request-error';
import { StatusCode } from '@/domain/status-code';

interface OnClickCallback {
  buttonLabel: string;
}

interface GetErrorPageInterface extends RequestError<string> {
  onClickCallback: ({ buttonLabel }: OnClickCallback) => void;
}

export interface ErrorPageInput {
  code: string;
  onPrimaryActionCallback: (butonText: string) => void;
  status?: number;
  message?: string;
  title?: string;
  isModal?: boolean;
}

export const getErrorPage = ({
  code,
  onClickCallback,
  status,
  message,
  title = '',
}: GetErrorPageInterface): ErrorPageInterface => {
  const defaultErrorProps: ErrorPageInterface = {
    code: code as string,
    title,
    subtitle: message,
    presentation: ErrorPresentation.Modal,
    Icon: null,
    primaryText: ModalButtonText.Accept,
    primaryAction: () => {
      onClickCallback({ buttonLabel: ModalButtonText.Accept });
    },
  };

  switch (status) {
    case StatusCode.InternalServerError:
    case StatusCode.BadRequest:
      return defaultErrorProps;
    default:
      return {
        ...defaultErrorProps,
        title: 'Ocurrio un error inesperado',
        subtitle: 'Intentelo mas tarde.',
      };
  }
};
