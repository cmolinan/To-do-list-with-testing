import './style.css';
import {
  getData, addToDo, saveEdit, displayToDo, getIsEditing,
  clearAllCompleted, todoEdit,
} from './modules/library.js';

const desc = document.getElementById('addToDo');
desc.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!getIsEditing()) addToDo(desc.value);
    else saveEdit(desc.value, todoEdit.index);
  }
});

const clearbutton = document.getElementById('clearAllBtn');
clearbutton.addEventListener('click', () => {
  clearAllCompleted();
});

window.onload = () => {
  getData();
  displayToDo();
};
