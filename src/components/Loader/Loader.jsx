import { ProgressBar } from 'react-loader-spinner';
import { Backdrop, LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <LoaderContainer>
        <ProgressBar
          height="100"
          width="100"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#FF001B"
          barColor="#FF6B01"
        />
      </LoaderContainer>
    </Backdrop>
  );
};
