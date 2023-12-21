import { useRef, useState } from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ todos, setTodos }) {
  const inputRef = useRef(null);
  const [nextId, setNextId] = useState(0);

  function handleAddTodo() {
    // 입력필드가 빈칸이 아닐 때 실행하기
    // 입력필드에 값이 있을 경우
    // trim은 스페이스 값 까지 고려
    if (inputRef.current.value.trim()) {
      setNextId(nextId + 1);
      setTodos([...todos, { id: nextId, text: inputRef.current.value, done: false }]);
    }
    inputRef.current.value = '';
  }
  console.log(todos);
  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <div className={styles.todo_add}>
      <input
        onKeyUp={handleEnter}
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
      />
      <button type="button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}
