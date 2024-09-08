// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

let tasks = [];

function compareDates(dueDate) {
    const formatDueDate = dayjs(dueDate);

    if (formatDueDate.isTomorrow() || formatDueDate.isToday()) {
        return { cardBg: 'bg-warning', btnborder: null};
    }
    if (formatDueDate.isSameorBefore()) {
        return { cardBg: 'bg-danger test-white', btnborder: 'border-white'};
    }
    return { cardBg: null, btnborder: null};
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return Math.floor(Math.random() * 100000).toString();
    
}

// Todo: create a function to create a task card
function createTaskCard( 
    {id, taskTitle, taskDueDate, taskDescription},
    isDone)
{
    const newTaskCard = $(
        `<div class='card task-card mb-3 draggable ${!isDone && compareDates(taskDueDate).cardBg}
        'data-task='${id}'>`
    );
    newTaskCard.html(`<h4 class='card-header'>${taskTitle}</h4>
        <div class='card-body'>
        <p>${taskDescription}</p>
        <p>${dayjs(taskDueDate).format('MM/DD/YYYY')}</p>
        <button class='btn btn-danger'
        ${!isDone && compareDates(taskDueDate).btnborder}'>Delete</button>
        </div>
        `);
        newTaskCard.find('button').on('click', handleDeleteTask);
        return newTaskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
