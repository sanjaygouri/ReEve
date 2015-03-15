

window.onload = shownotes1;



window.onhashchange = function () {
	  if(location.hash == "#newnote")
   		document.getElementById("taskcreator").style.display = "block";
   else if(location.hash == "#addnote")
   		addnote();
   else if(location.hash == "#delall")
   		delall();
	
   location.hash = "";
};



var tarea = function (title,descripcion,link,date,done) {
	this.title = title;
	this.descripcion = descripcion;
	this.link = link;
	this.date = date;
	this.done = done;
};



var tareas = [];


function addnote() {
	var title = document.getElementById('title');
	var desc = document.getElementById('desc');
	var link = document.getElementById('link');
	var date = document.getElementById('date');

	if(title.value != "" || desc.value != "" || link.value!="" || date.value!="") {
	   tareas.push(new tarea(title.value, desc.value, link.value,date.value,false));

	   shownotes1();

	   document.getElementById("taskcreator").style.display = "none";

	   title.value = "";
	   desc.value = "";
		link.value = "";
		date.value = "";
	} else
		alert("please fill something about your event");
}

function delnote(e, note){
	
			tareas[note].done = true;
	
	if(tareas[note].done){
		if(confirm("Do you want to delete this event?")){
		   e.parentNode.parentNode.removeChild(e.parentNode);
			tareas.splice(note, 1);
			shownotes1();
		}
	} 
	
}




function delall(){
	if(confirm("are you sure you want to delete all?")) {
		tareas = [];
		shownotes1();
	}
}


function shownotes1() {
	var results = "";

	for(var i in tareas)
		results += " <li><a href=\"#\" onclick=\"delnote(this,"+i+");\">X</a><h1 "+(tareas[i].done ? "class=\"sub\"" : "")+">"+ tareas[i].title+"</h1><br><h4>Description</h4><br><p "+(tareas[i].done ? "class=\"sub\"" : "")+">"+ tareas[i].descripcion+ "</p><br><h4>link</h4><br><p "+(tareas[i].done ? "class=\"sub\"" : "")+">"+ tareas[i].link+ "</p><br><h4>date</h4><br><p "+(tareas[i].done ? "class=\"sub\"" : "")+">"+ tareas[i].date+ "</p><br></li>";

		document.getElementById('taskcontainer').innerHTML = results;
	
}

