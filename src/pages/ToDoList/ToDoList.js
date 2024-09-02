import React, { useState } from "react";
import Background from "../../Components/Background/Background";
import TaskCard from "../../Components/TaskCard/TaskCard";
import Title from "../../Components/Date/Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./todolist.css";
import Modal from "../../Components/Modal/Modal";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openEditModal = (task) => {
    setEditingTaskId(task.id);
    setNewTaskName(task.name);
    setModalOpen(true);
  };

  const addTask = () => {
    if (editingTaskId) {
      setTasks(tasks.map(task =>
        task.id === editingTaskId ? { ...task, name: newTaskName } : task
      ));
      setEditingTaskId(null);
    } else {
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName || 'Nova tarefa',
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setModalOpen(false);
    setNewTaskName('');
  };

  const filterTasks = (searchTerm) => {
    return tasks.filter(task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <React.Fragment>
      <Background>
        <div className="page-container">
          <div className="task-container">
            <Title />
            <div className="search-bar">
              <FontAwesomeIcon className="search-icon" color="#FCFCFC" icon={faMagnifyingGlass} />
              <input
                type="text"
                placeholder="Procurar tarefa"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="task-list">
              {filterTasks(searchTerm).length === 0 ? (
                <EmptyCard />
              ) : (
                filterTasks(searchTerm).map(task => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    onClick={() => deleteTask(task.id)}
                    onChange={() => toggleTaskCompletion(task.id)}
                    checked={task.completed}
                    onEdit={() => openEditModal(task)}
                  />
                ))
              )}
            </div>
          </div>
          <div className="add-task-container">
            <button className="add-task-btn" onClick={() => {
              setEditingTaskId(null);
              setModalOpen(true);
            }}>Nova tarefa</button>
          </div>
        </div>

        {/* Modal para adicionar ou editar tarefa */}
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>{editingTaskId ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h2>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Nome da tarefa"
          />
          <button className="button-adc" onClick={addTask}>
            {editingTaskId ? 'Salvar' : 'Adicionar'}
          </button>
        </Modal>
      </Background>
    </React.Fragment>
  )
};

export default ToDoList;