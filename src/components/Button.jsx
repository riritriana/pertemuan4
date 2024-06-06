/* eslint-disable react/prop-types */
export default function Button({ onClick, children, className }) {
  return (
    <div>
      <button
        className={`bg-white p-1 ${className} shadow-xl hover:bg-slate-300`}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
}
