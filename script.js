
        function addTask() {
            const inputElement = document.querySelector('.task-input');
            const taskInput = inputElement.value;
            const newToDo = document.createElement('li');
            const taskList = document.querySelector('.tasks-list');
            newToDo.textContent = taskInput;
            taskList.appendChild(newToDo);
            inputElement.value = "";

            newToDo.addEventListener('click', function () {
                newToDo.style.textDecoration = "line-through";
                document.querySelector('.completed-list').appendChild(newToDo);

            })
            
            


        }

        function refresh(button) { 
            const section = button.parentElement;
            const lists = section.querySelectorAll('ol, ul');
            lists.forEach(function(list) {
                 list.innerHTML = "";
                });

        }

        function addNotes() {
            const inputElement = document.querySelector('.notes-input');
            const taskInput = inputElement.value;
            const newToDo = document.createElement('li');
            const taskList = document.querySelector('.notes-list');
            newToDo.textContent = taskInput;
            taskList.appendChild(newToDo);
            inputElement.value = "";

         
        }
    let timeLeft;
    let countdown
        function timer() {
            const duration = Number(
                document.querySelector('.duration-input').value
            );

             timeLeft = duration * 60;
            
             countdown = setInterval(function(){

                const min = Math.floor(timeLeft / 60);
                const sec = timeLeft % 60;

                document.querySelector('.timer-display').textContent = 
                min + ":" + sec;
                timeLeft--;

                if(timeLeft <= 0){
                    clearInterval(countdown);
                }
            }, 1000)

        }

        function refreshTimer(){
            clearInterval(countdown);
            timeLeft = 0;
            document.querySelector('.timer-display').textContent = "0:00";
            document.querySelector('.duration-input').value = "";
            document.querySelector('.subject-input').value = "";
        }

        


