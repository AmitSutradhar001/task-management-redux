import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  toggleDetails,
  setCurrentTodo,
} from "../redux/todoSlice";

const List = () => {
  const todos = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChecked = (id) => {
    dispatch(toggleTodo(id));
  };

  const toggleTheDetails = (id) => {
    dispatch(toggleDetails(id));
  };

  const handleEdit = (todo) => {
    dispatch(setCurrentTodo(todo));
  };

  return (
    <div className="  text-white flex flex-col gap-4">
      {todos?.map((todo) => {
        return (
          <div
            key={todo.id}
            className="bg-slate-600 rounded-md flex flex-row w-96 min-w-max justify-between"
          >
            <div className="flex flex-row w-96 min-w-max justify-between m-3 ">
              <div className={todo.completed ? "line-through flex" : "flex"}>
                <input
                  className="w-4 m-5"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleChecked(todo.id)}
                  disabled={todo.showDetails}
                />
                <div
                  className={
                    todo.showDetails ? "flex-row pl-4 pr-4 " : "flex-col"
                  }
                >
                  <p
                    className={
                      todo.showDetails
                        ? "mt-4 bg-gray-900 px-2 py-1 rounded-lg font-semibold"
                        : "mt-4 bg-gray-900 max-w-32 overflow-hidden px-2 py-1 rounded-lg font-semibold"
                    }
                  >
                    {todo.title}
                  </p>
                  {todo.showDetails && (
                    <>
                      <p className="px-2 py-1">{todo.description}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 p-3">
                <button
                  className="p-4 pt-1 pb-1 rounded-lg "
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteTodo(todo.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 512 512"
                    id="trash"
                    fill="#0f172a"
                  >
                    <path d="M413.7 133.4c-2.4-9-4-14-4-14-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8-8.7-19.6-11.4-31-20.9-31h-103c-9.5 0-12.1 11.4-20.8 31.1-2.6 5.6-2.6 5.6-9.2 6.8l-53.2 6.7c-9.7 1.6-16.7 2.5-19.3 11.8 0 0-1.2 4.1-3.7 13-3.2 11.9-4.5 10.6 6.5 10.6h302.4c11 .1 9.8 1.3 6.5-10.6zM379.4 176H132.6c-16.6 0-17.4 2.2-16.4 14.7l18.7 242.6c1.6 12.3 2.8 14.8 17.5 14.8h207.2c14.7 0 15.9-2.5 17.5-14.8l18.7-242.6c1-12.6.2-14.7-16.4-14.7z"></path>
                  </svg>
                </button>
                <button
                  className="text-white p-4 pt-1 pb-1 rounded-lg hover:text-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEdit(todo);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    id="edit"
                    fill="#0f172a"
                  >
                    <path d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path>
                    <path d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path>
                  </svg>
                </button>
                <button
                  className="text-white p-4  pt-1 pb-1 rounded-lg hover:text-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTheDetails(todo.id);
                  }}
                  disabled={todo.completed}
                >
                  {todo.showDetails ? "See Less" : "See More..."}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
