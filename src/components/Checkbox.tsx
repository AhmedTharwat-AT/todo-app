type Props = {
  children: JSX.Element | JSX.Element[] | string;
  handler: () => void;
  className?: string;
};

// hover:text-white
// hover:border-blue-400 hover:text-blue-200

function Checkbox({ children, handler, className }: Props) {
  return (
    <button
      onClick={handler}
      className={`${className} bp:h-7 bp:w-7 flex h-6 w-6 items-center justify-center rounded-full border  border-gray-300 text-3xl text-gray-300 transition-all dark:border-gray-700 dark:hover:border-blue-400`}
    >
      {children}
    </button>
  );
}

export default Checkbox;
