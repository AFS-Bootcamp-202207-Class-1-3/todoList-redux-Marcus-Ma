import "../css/TodoList.css"
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {useState} from "react"
function TodoList(){
  let [todoItemList, setTodoItemList] = useState([]);
  const updateTodoItemList = function(todo){
    setTodoItemList([...todoItemList,todo]);
  }
  const deleteTodoItem = function(index){
    todoItemList.splice(index,1);
    setTodoItemList([...todoItemList]);
  }
  return(
    <div className="todoListBox">
      <h1>Todo List</h1>
      <TodoGroup todoItemList={todoItemList} deleteTodoItem={deleteTodoItem}/>
      <TodoGenerator updateTodoItemList={updateTodoItemList} />
    </div>
  );
}
export default TodoList;