import './LoaderInline.css';

const DEFAULT_SIZE = 80;

interface LoaderInlineProps {
  size?: number,
}

export const LoaderInline = ({ size = DEFAULT_SIZE }: LoaderInlineProps) => (
  <div
    className="loader-inline lds-ellipsis"
    style={{ width: `${size}px`, height: `${size}px` }}
    role="progressbar"
  >
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="loader-inline__item"
        style={{
          top: `${size * 0.4125}px`,
          width: `${size * 0.1625}px`,
          height: `${size * 0.1625}px`,
          borderRadius: `${size * 0.5}px`,
        }}
      />
    ))}
  </div>
);
