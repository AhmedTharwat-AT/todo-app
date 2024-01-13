type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

function TodoStyle({ children, className = "" }: Props) {
  return (
    <div
      className={` bp:px-6 bp:py-5 flex  gap-4 bg-[var(--light-gray-100)] px-5 py-4 capitalize tracking-wider text-[var(--light-gray-600)] dark:bg-[var(--dark-gray-600)] dark:text-[var(--dark-gray-200)] ${className}`}
    >
      {children}
    </div>
  );
}

export default TodoStyle;
