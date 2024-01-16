import TodoStyle from "./TodoStyle";

function EmptyList({
  msg = "",
  className = "",
}: {
  msg?: string;
  className?: string;
}) {
  return (
    <TodoStyle
      className={`${className} justify-center rounded-tl-md rounded-tr-md py-5`}
    >
      <h1 className="text-sm normal-case bp:text-base">{msg}</h1>
    </TodoStyle>
  );
}

export default EmptyList;
