import { FC, PropsWithChildren } from 'react';
import Modal, { Styles } from 'react-modal';
import { ErrorPageInterface } from '@/domain/error-page';
import { ErrorPresentation } from '@/domain/error-presentation';

Modal.setAppElement('#root');

const modalStyle: Styles = {
  content: {
    width: '400px',
    height: '140px',
    maxWidth: '90%',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  },
};

interface ErrorBoundaryProps {
  onClearError: () => void;
  error?: ErrorPageInterface;
}

const ErrorBoundary: FC<PropsWithChildren<ErrorBoundaryProps>> = ({
  error,
  onClearError,
  children,
}) => {
  if (error) {
    const { presentation, title, subtitle } = error;
    if (presentation === ErrorPresentation.Modal) {
      return (
        <>
          <Modal isOpen style={modalStyle}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button onClick={onClearError}>Cerrar</button>
          </Modal>
          {children}
        </>
      );
    } 
      return (
        <div>
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
        </div>
      );
    
  }

  return children;
};

export default ErrorBoundary;
