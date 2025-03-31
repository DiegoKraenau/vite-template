import { FC } from 'react';
import './LoadingScreen.scss';

interface LoadingScreenProps {
  open: boolean;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ open }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="spinner-background">
      <div className="spinner">
        <div className="" />
        <div className="" />
        <div className="" />
      </div>
    </div>
  );
};

export default LoadingScreen;
