const tasks = document.getElementsByClassName('tasks');

const addNewTasksBtn = document.getElementById('addNewTaskBtn');
addNewTasksBtn.addEventListener('click', addNewTaskFunc);
let taskNumberWhichIsVisible = 0;
function addNewTaskFunc() {
    if (taskNumberWhichIsVisible < 5) {
        if (taskNumberWhichIsVisible != 0) {
            if (!(tasks[taskNumberWhichIsVisible - 1].firstElementChild.value)) {
                console.log('piichla wala bharo pehle')
                return;
            }
        }
        tasks[taskNumberWhichIsVisible].style.visibility = 'visible';
        tasks[taskNumberWhichIsVisible].firstElementChild.focus();
        taskNumberWhichIsVisible++;
        // }
    };
};

const clearAllBtn = document.getElementById('clearAllBtn');
clearAllBtn.addEventListener('click', clearAllFunc);
function clearAllFunc() {
    if (taskNumberWhichIsVisible > 0) {
        for (let i = 0; i < taskNumberWhichIsVisible; i++) {
            tasks[i].firstElementChild.value = '';
            tasks[i].style.visibility = 'hidden';
        };
        taskNumberWhichIsVisible = 0;
        // console.log('taskNumberWhichIsVisible', taskNumberWhichIsVisible);
    }
};

// need to add three more types of buttons to the task element container: add button, edit button, check button
// add button (visible just after addtask button click) (onclick: remove focus from input field)
// edit button (visible just after add button click) (onclick: focus on the input element) (textchangeto done button)
// check button (visible after add button click) (onclick: grey the input text, make it readonly)

// const addBtns = document.getElementsByClassName('addBtns');
const editBtns = document.getElementsByClassName('editBtns');
const checkBtns = document.getElementsByClassName('checkBtns');

// Array.from(addBtns).forEach(function(elem){
//     elem.addEventListener('click',addBtnsFunc);
// })

// Array.from(editBtns).forEach(function(elem){
//     elem.addEventListener('click',editBtnsFunc);
// })

// Array.from(checkBtns).forEach(function(elem){
//     elem.addEventListener('click',checkBtnsFunc);
// })

function addBtnsFunc(e) {
    console.log(e.target.parentElement);
};
// function editBtnsFunc(e){
//     console.log(e.target.parentElement);
// };
// function checkBtnsFunc(e){
//     console.log(e.target.parentElement);
// };
