import Todo from "./Todo";
import { Todo as TodoType } from "../types/App.types";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface Props {
  filteredTodos: TodoType[];
  filter: string;
}

function TodosList({ filteredTodos, filter }: Props) {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <section
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="max-h-[275px] divide-y divide-gray-300 overflow-y-auto shadow-2xl dark:divide-gray-700 bp:max-h-[509px]"
        >
          {filteredTodos.map((todo, index) => (
            <Draggable
              key={todo.id}
              draggableId={String(todo.id)}
              isDragDisabled={filter != "all" || filteredTodos.length == 1}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Todo isDragging={snapshot.isDragging} todo={todo} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}

export default TodosList;
