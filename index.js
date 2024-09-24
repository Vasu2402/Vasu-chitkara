document.getElementById('addTaskForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    // Create a new task element
    const li = document.createElement('li');
    li.innerText = taskText;

    // Create a complete button
    const completeButton = document.createElement('button');
    completeButton.innerText = '✔';
    completeButton.addEventListener('click', function () {
        li.classList.toggle('completed');
    });
    li.appendChild(completeButton);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', function () {
        li.remove();
    });
    li.appendChild(deleteButton);

    // Append the task to the task list
    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear the input
});
