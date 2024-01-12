type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

function TodoStyle({ children, className = "" }: Props) {
  return (
    <div
      className={`${className} flex  gap-4 bg-[var(--dark-gray-600)] capitalize tracking-wider text-[var(--dark-gray-200)]`}
    >
      {children}
    </div>
  );
}

export default TodoStyle;
