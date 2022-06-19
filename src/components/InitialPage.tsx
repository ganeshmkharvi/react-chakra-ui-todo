import { VStack, Text, Switch, TagLabel, Tag, HStack } from "@chakra-ui/react";
import { useState } from 'react'
import { TodoContent } from "../interfaces/TodoContent";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const InitialPage = () => {

  const todosList: TodoContent[] = [
    { id: '1', description: 'Incomplete task', isCompleted: false },
    { id: '2', description: 'Not completed task', isCompleted: false },
    { id: '3', description: 'Completed task', isCompleted: true }
  ];

  const [todos, setTodos] = useState(todosList);
  const [toggleIsCompleted, setIsToggleCompleted] = useState(true);

  function deleteTodo(id: string) {
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(newTodos)
    console.log(newTodos)
  }

  function toggleIsComplete(e: any) {
    setIsToggleCompleted(e.target.checked);
  }

  function addTodo(newTodo: TodoContent) {
    setTodos([...todos, newTodo]);
    console.log(todos);
  }

  function editTodo(id: string, updatedTodo: TodoContent) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setTodos(updatedItem)
  }

  return (
    <VStack p={5}>
      <Text bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">
        Todo App
      </Text>
      <Tag size='10' colorScheme='cyan'>
      <HStack spacing={4}>
      <TagLabel>Show Completed Tasks</TagLabel>
      <Switch id='completedTasks' defaultChecked onChange={(e)=> {toggleIsComplete(e)}} />
      </HStack>
      </Tag>
    
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleIsCompleted={toggleIsCompleted} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
export default InitialPage;
