# Third Party APIs: Task Board

This task board application allows users to manage project tasks by creating and tracking tasks on a Kanban board.  A user has the option to create new tasks to track, set a due date, title and description, and move them across swim lanes to completion. Users can also delete tasks if they were wrongly created. 


## Usage

The following user stories can be accomplished using this task board application

```md
GIVEN a task board to manage a project
WHEN I open the task board
THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)
WHEN I view the task board for the project
THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)
WHEN I click on the button to define a new task
THEN I can enter the title, description and deadline date for the new task into a modal dialog
WHEN I click the save button for that task
THEN the properties for that task are saved in localStorage
WHEN I drag a task to a different progress column
THEN the task's progress state is updated accordingly and will stay in the new column after refreshing
WHEN I click the delete button for a task
THEN the task is removed from the task board and will not be added back after refreshing
WHEN I refresh the page
THEN the saved tasks persist
```

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

