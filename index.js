
function addpopup()
{
    document.querySelector("#popup").style.display = "block";
    
}
function closepopup()
{
    document.querySelector("#popup").style.display = "none";
}
function addpopup2()
{
    document.querySelector("#popup2").style.display = "block";
}
function closepopup2()
{
    document.querySelector("#popup2").style.display = "none";
}



const Tasks = [];

function addCard()
{
    
    const inp = document.getElementById('cardname').value;
    const tObject =
    {
        taskname : inp
    }
    Tasks.push(tObject);
    // console.log(Tasks);
    
    addCardson();
}

function addCardson()
{
    document.getElementById("empty").style.display = "none";


    cards = document.createElement("div")
    cards.setAttribute("id","child")
    // cards.className = "child";
    cards.innerText = Tasks[Tasks.length-1].taskname
    const ExtElement = document.getElementById("card")
    ExtElement.appendChild(cards)

    const hor = document.createElement("HR");
    hor.setAttribute("id","hor");
    cards.appendChild(hor);
   
    
    const addIcon = document.createElement("i");
    addIcon.setAttribute("id","addIcon");
    addIcon.innerHTML = '<i class="fa-solid fa-circle-plus">';
    
    addIcon.onclick = addpopup2
    cards.appendChild(addIcon);
    
    

    const trashIcon = document.createElement("i");
    trashIcon.setAttribute("id","trashIcon");
    trashIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    cards.appendChild(trashIcon);
    

    trashIcon.onclick = deleteChild
    

    
   
    
    
    
}
function deleteChild()
{
    const dump = document.getElementById("child");
   
    dump.parentNode.removeChild(dump);
}

const Tasks2 = [];

function addData()
{
    
    const inp2 = document.getElementById('cardInfo').value;
    const tObject2 =
    {
        taskname2 : inp2
    }
    Tasks2.push(tObject2);
    // console.log(Tasks);
    
    addCardson2();
}

function addCardson2()
{
    const e = document.createElement("div")
    e.setAttribute("id","data")
    e.innerText = Tasks2[Tasks2.length-1].taskname2
    const extchild = document.getElementById("child")
    extchild.appendChild(e);



    const checkIcon = document.createElement("i")
    checkIcon.setAttribute("id","checkIcon")
    checkIcon.innerHTML = '<i class="fa-solid fa-square-check"></i>'

    checkIcon.addEventListener("click",function()
    {
        checkIcon.style.color = "white";
        checkIcon.style.fontSize = "20px"
        e.style.textDecoration = "line-through";
        e.style.color = "white";
        
        
    })
    extchild.appendChild(checkIcon);
}