type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

function Todo({ children, className = "" }: Props) {
  return (
    <div
      className={`${className} rounded-md bg-[var(--dark-gray-600)] px-6 py-5 capitalize tracking-wider text-[var(--dark-gray-200)]`}
    >
      {children}
    </div>
  );
}

export default Todo;
