function ThisAlertFunction()
{
    alert("hello everyone! can you see me?");
}

function ChangeSize()
{
    document.getElementById("EnterThing").style.fontSize = "24px";
}

function FancyFancy()
{
    document.getElementById("EnterThing").style.fontWeight = 'bold';
    document.getElementById("EnterThing").style.color = "blue";
    document.getElementById("EnterThing").style.textDecoration = "underline";
}

function BoringBoring()
{
    document.getElementById("EnterThing").style.fontWeight = '400';
    document.getElementById("EnterThing").style.color = "black";
    document.getElementById("EnterThing").style.textDecoration = "none";
}

function Moo()
{
    //document.getElementById("EnterThing").style.textTransform = "uppercase";
    var userInput = document.getElementById("EnterThing").value;
    userInput = userInput.split(".");
    userInput - userInput.join("-moo");
    //document.getElementById("EnterThing").value = userInput;
}