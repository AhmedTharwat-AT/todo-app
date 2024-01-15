import TodoStyle from "./TodoStyle";

function EmptyList({
  msg = "",
  className = "",
}: {
  msg?: string;
  className?: string;
}) {
  return (
    <TodoStyle className={`${className} justify-center rounded-md py-5`}>
      <h1 className="normal-case">{msg}</h1>
    </TodoStyle>
  );
}

export default EmptyList;
