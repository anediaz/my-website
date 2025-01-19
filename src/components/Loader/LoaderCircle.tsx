import './LoaderCircle.css';

export const LoaderCircle = () => (
  <div className="loader-circle lds-roller" role="progressbar">
    {[...Array(8)].map((_, index) => <div key={index} className="loader-circle__item" />)}
  </div>
);
