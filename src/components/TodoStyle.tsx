type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  draggable?: boolean;
};

function TodoStyle({ children, draggable = false, className = "" }: Props) {
  return (
    <div
      draggable={draggable}
      className={` flex gap-4 bg-[var(--light-gray-100)]  px-5 py-4 capitalize tracking-wider text-[var(--light-gray-600)] dark:bg-[var(--dark-gray-600)] dark:text-[var(--dark-gray-200)] bp:px-6 bp:py-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default TodoStyle;
