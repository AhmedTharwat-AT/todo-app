type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

function TodoStyle({ children, className = "" }: Props) {
  return (
    <div
      className={` bp:px-6 bp:py-5 flex  gap-4 bg-[var(--dark-gray-600)] px-5 py-4 capitalize tracking-wider text-[var(--dark-gray-200)] ${className}`}
    >
      {children}
    </div>
  );
}

export default TodoStyle;
