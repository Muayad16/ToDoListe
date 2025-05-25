function Addtask() {
    const input = document.getElementById("aufgabenfeld");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const list = document.getElementById("listeTodo");
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Erledigt";
    doneBtn.onclick = () => {
    li.classList.toggle("done");
    updateTaskCounter();
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Löschen";
    deleteBtn.onclick = () =>{
     list.removeChild(li);
     updateTaskCounter();
    }

    const Bearbeitenbtn = document.createElement("button");
    Bearbeitenbtn.textContent= "Bearbeiten" ;
    
    Bearbeitenbtn.onclick = () => {
        
  if (li.querySelector("input")) {
    const input = li.querySelector("input");
    span.textContent = input.value;
    li.removeChild(input);
    Bearbeitenbtn.textContent = "Bearbeiten";
    li.insertBefore(span, Bearbeitenbtn);

  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    li.insertBefore(input, Bearbeitenbtn);
    li.removeChild(span);
    Bearbeitenbtn.textContent = "Speichern";
  }
};
    



    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    li.appendChild(Bearbeitenbtn);

    list.appendChild(li);
   

   

    input.value = "";

   updateTaskCounter();
    
}

function zeigeDaily() {
  document.getElementById("normalSection").style.display = "none";
  document.getElementById("dailySection").style.display = "block";
  erledigeTäglicheAufgaben();  
}

function erledigeTäglicheAufgaben() {
  const dailyList = document.getElementById("dailyTodo");
  const items = dailyList.querySelectorAll("li");

  items.forEach(li => {
    
    if (li.querySelector("button")) return;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Erledigt";
    doneBtn.className = "done-btn";

    doneBtn.onclick = () => {
      li.classList.toggle("done"); 
       updateTaskCounter();
    };

    li.appendChild(doneBtn);
  });
}
function zeigeNormal() {
  document.getElementById("dailySection").style.display = "none";
  document.getElementById("normalSection").style.display = "block";
}

function updateTaskCounter() {
  const list = document.getElementById("listeTodo");
  const tasks = list.querySelectorAll("li");
  
  let erledigt = 0;
  let offen = 0;

  tasks.forEach(task => {
    if (task.classList.contains("done")) {
      erledigt++;
    } else {
      offen++;
    }
  });

  const counter = document.getElementById("taskCounter");
  counter.textContent = `Offene Aufgaben: ${offen} | Erledigte Aufgaben: ${erledigt}`;
}