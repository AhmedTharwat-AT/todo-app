function TodosFilter({
  setFilter,
  filter,
  className,
}: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  className?: string;
}) {
  return (
    <ul
      className={`${className} bp:text-base flex gap-5 text-sm font-semibold`}
    >
      <li
        className={`text-gray-500 ${
          filter == "all" ? "!text-blue-500 dark:text-blue-400" : ""
        } cursor-pointer  hover:underline`}
        onClick={() => setFilter("all")}
      >
        All
      </li>
      <li
        className={`text-gray-500 ${
          filter == "active" ? "!text-blue-500 dark:text-blue-400" : ""
        } cursor-pointer  hover:underline`}
        onClick={() => setFilter("active")}
      >
        Active
      </li>
      <li
        className={`text-gray-500 ${
          filter == "completed" ? "!text-blue-500 dark:text-blue-400" : ""
        } cursor-pointer  hover:underline`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </li>
    </ul>
  );
}

export default TodosFilter;
