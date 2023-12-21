import styles from './TodoItem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
  // todos배열요소 모두(t)에서 todo.id가 같으면 해당 객체의 done을 변경하고
  // todo.id와 같지않은 배열요소는 원래 객체를 리턴해야함.
  function handleDone() {
    setTodos(
      todos.map((t) => {
        return t.id === todo.id ? { ...t, done: !t.done } : t;
      })
    );
  }
  // todos배열요소 모두(t)에서 todo.id가 다른 요소로
  // 새로운 배열 생성하여 setTodos로 todos배열 업데이트
  // todos배열의 모든 요소중 id가 todo.id와 다른 요소로 배열 업데이트
  function handleRemove() {
    setTodos(
      // todos.filter((t) => {
      //   return t.id !== todo.id;
      // })
      // return 생략하고 싶으면 중괄호도 빼야한다.
      todos.filter((t) => t.id !== todo.id)
    );
  }

  return (
    <li className={styles.todo_item}>
      <input id={`check${todo.id}`} type="checkbox" />
      {/* todo.done이 true면 done클래스 걸고 아니면 빈칸 */}
      <label className={todo.done === true ? styles.done : ''} htmlFor={`check${todo.id}`} onClick={handleDone}>
        {todo.text}
      </label>
      <button type="button" onClick={handleRemove}>
        remove
      </button>
    </li>
  );
}
