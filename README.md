# Task Management App!

## To run this code you need to run the following commands:

### `npm install` / `npm i`

### `npm run dev`

## Summary

- This project is a simple task management app. It allows you to add, delete, and mark tasks as completed. Additionally, it stores all tasks in your LocalStorage so that you can access them even after refreshing the page.

## Features

- Add task.
- Delete tasks.
- Mark tasks as completed or incomplete.
- Validation for empty inputs.
- Store all tasks in your LocalStorage.
- "See More" / "See Less" option for viewing task descriptions.

## Technologies used:

- React.js
- Redux Toolkit
- Tailwind CSS.
- Aceternity Ul

## Working

- Simply add a task and description, then click the "Add" button or press "Enter"; the task will be added.
- In the "Task List," you will find several options:
  - A checkbox to mark the task as complete or incomplete. This action will display a line through the title accordingly.
  - The title of the task.
  - The "Delete" button. Clicking this button allows you to delete the task not only from your Redux Store but also from your Local Storage.
  - The "See More..."/"See Less" button. This button toggles the visibility of the task description.
  - **\*(Note: When the "See More..." button is active, the checkbox for marking the task will be disabled. It will only function when the description is hidden. & When "CheckBox" button is active, the "See More.." will be disabled. )**
