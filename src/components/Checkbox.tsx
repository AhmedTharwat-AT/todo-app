type Props = {
  children: JSX.Element | JSX.Element[] | string;
  handler: () => void;
  className?: string;
};

function Checkbox({ children, handler, className }: Props) {
  return (
    <button
      onClick={handler}
      className={`${className} flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-3xl  text-gray-300 transition-all dark:border-gray-700 dark:hover:border-blue-400 bp:h-7 bp:w-7`}
    >
      {children}
    </button>
  );
}

export default Checkbox;
