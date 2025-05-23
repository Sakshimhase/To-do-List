function taskAdd() {
    const taskInput = document.getElementById("taskInput");
    const Text = taskInput.value.trim();

    if (Text !== "") {
      const taskList = document.getElementById("taskList");

      // Create new list item
      const listItem = document.createElement("li");

      //span is used to display the text for the task
      const taskSpan = document.createElement("span");
      taskSpan.textContent = Text;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        taskList.removeChild(listItem); // Remove the task when clicked
      };

      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = "";
    }else {
      alert("Please enter a task!");
    }
  }


