# Todo
A simple todo app built with React and Redux.
## Installation
Clone the repository:
git clone https://github.com/MengemPavan/Todo.git
Install dependencies:
cd Todo
npm install
Start the development server:
npm start
Open your browser and navigate to http://localhost:3000 to view the app.
## Usage
The app allows you to add, edit, and delete tasks.
To add a task, enter the task

description in the input field and press Enter or click the "Add" button.

To edit a task, click on the task text to enter edit mode. Make your changes and press Enter or click outside the input field to save.

To delete a task, click the delete button (trash icon) next to the task.

To mark a task as complete, click the checkbox next to the task.

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete
- Filter tasks (All, Active, Completed)
- Clear all completed tasks

## Technologies Used
- React
- Redux
- React Redux
- Redux Toolkit
- CSS Modules

## Project Structure

Todo/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TodoList.js
│   │   ├── TodoItem.js
│   │   ├── AddTodo.js
│   │   └── FilterButtons.js
│   ├── redux/
│   │   ├── store.js
│   │   └── todoSlice.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md


## Redux Setup
The app uses Redux for state management. The main store is configured in `src/redux/store.js`, and the todo slice is defined in `src/redux/todoSlice.js`.

## Components
- `App.js`: The main component that renders the entire application.
- `TodoList.js`: Renders the list of todos and handles filtering.
- `TodoItem.js`: Represents a single todo item with edit and delete functionality.
- `AddTodo.js`: Provides an input field to add new todos.
- `FilterButtons.js`: Renders buttons to filter todos by their status.

## Styling
The app uses CSS Modules for styling, which allows for scoped and modular CSS.


## License
This project is open source and available under the [MIT License](LICENSE).
