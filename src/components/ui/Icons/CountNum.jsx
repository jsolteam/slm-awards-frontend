export const CountNum = ({ className, isFill = false }) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {isFill ? (
        <circle cx="3" cy="3" r="3" fill="#EBEBEB" />
      ) : (
        <circle cx="3" cy="3" r="2.5" stroke="#D9D9D9" />
      )}
    </svg>
  );
};
