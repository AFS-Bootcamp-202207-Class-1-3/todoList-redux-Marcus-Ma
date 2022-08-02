import "../css/TodoGroup.css"
import TodoItem from "./TodoItem";
import {useSelector} from 'react-redux'
function TodoGroup(){
  const todos = useSelector(state => state.todo.todos);
  const todoList = todos.map((todo,index) => <TodoItem  
      key={todo.id}
      index={index} 
      todo={todo.context} 
  />);

  return(
    <div className="todo-group-box">
      {todoList}
    </div>
  )
}
export default TodoGroup;