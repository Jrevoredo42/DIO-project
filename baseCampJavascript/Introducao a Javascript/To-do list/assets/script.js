var listOfTask = [];
var task = document.querySelector("#add");

    task.addEventListener("click", function(e) {
        e.preventDefault();

        const text = document.querySelector("#text");

            const value = text.value;

            listOfTask.push(value);


    })

for(let i; i < listOfTask.length; i++){
    console.log(listOfTask[i]);
}
