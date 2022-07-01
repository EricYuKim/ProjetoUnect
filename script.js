
let addTaskCriar = document.querySelector(".task-criar");




function addTask(){
    const nome = document.getElementsByClassName("txttitulo")[0].value;
    const desc = document.getElementsByClassName("desc")[0].value;
    if(nome!=""){

    var counter = 0;
    createTask(nome,desc, counter);
     nome.value = "";

}}

function createTask(nome, desc,counter){
    var estado;
    switch(counter){
        case 0:
            estado = document.getElementsByClassName("afazer")[0]
        break;
        case 1:
            estado = document.getElementsByClassName("emandamento")[0]

        break;
        case 2:
            estado = document.getElementsByClassName("feito")[0]
            counter=-1;
        break;
    }

    
    let task = document.createElement('div');
    task.setAttribute('class','task');
    estado.appendChild(task);

    let td = document.createElement('div');
    td.setAttribute('class','td');
    task.appendChild(td);

    let tituloTask = document.createElement("h1");
    tituloTask.setAttribute('class','taskTitulo')
    tituloTask.innerHTML = nome;
    td.appendChild(tituloTask);



    let descTask = document.createElement("div");
    descTask.setAttribute('class','desc');
    descTask.innerHTML = '<h1 class="taskDesc">Descricao</h1>';
    td.appendChild(descTask);

    
    let descNome = document.createElement("p");
    descNome.setAttribute('class','pDesc')
    descNome.innerHTML = desc;
    descTask.appendChild(descNome);


    let buttonD = document.createElement("button");
    buttonD.setAttribute('class','buttonD')
    buttonD.innerHTML = '<i class="material-icons lixeira ">delete_outline</i>';
    task.appendChild(buttonD);
    buttonD.addEventListener('click', function(){removeTask(task)})

 
   
    let next = document.createElement("button");
    switch(counter){
        case 0: 
        next.innerHTML = '<i class="material-icons  ">navigate_next</i>';
        break;
        case 1:
        next.innerHTML= '<i class="material-icons  ">navigate_next</i>';
        case -1:
        next.innerHTML = '<i class="material-icons  ">navigate_next</i>';
        break;
    }
   
    next.addEventListener('click', function(){moveTask(nome,desc,counter,task)})
    task.appendChild(next);

   counter++;

}



function moveTask(nome,desc,counter,task){
    createTask(nome,desc,counter,task);
    task.remove()
}

function removeTask(task){ 
    task.remove();


}



//Modal
function showmodal(){
    const element = document.getElementsByClassName("modal")[0];
    element.classList.add("show-modal");
}

function closemodal(){
    const element = document.getElementsByClassName("modal")[0];
    element.classList.remove("show-modal");
}

function showmodalDelete(){
    const element = document.getElementsByClassName("modalDelete")[0];
    element.classList.add("show-modalDelete");
}

function closemodalDelete(){
    const element = document.getElementsByClassName("modalDelete")[0];
    element.classList.remove("show-modalDelete");
}





