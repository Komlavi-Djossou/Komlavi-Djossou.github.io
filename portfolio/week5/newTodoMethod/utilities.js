'use strict';


// Display the number of to-do tasks remaining.
export function displayTasksRemaining(taskList) {
    let length = taskList.filter(task => !task.completed).length;

    document.getElementById("remainTask").innerText = 
        length == 1 ? `${length} task remaining.`:`${length} tasks remaining.`;
}
