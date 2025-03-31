import { JSX } from 'react';
import { ErrorPresentation } from '@/domain/error-presentation';

export interface ErrorPageInterface {
  code: string;
  title: string;
  presentation: ErrorPresentation;
  Icon: JSX.Element | null;
  primaryText: string;
  primaryAction: () => void;
  subtitle?: string;
}
