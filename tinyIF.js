var Rooms = [];

	//one room for each line, remove empty ones
	r = document.getElementById("rooms").innerHTML.split(/[\r\n]+/).filter(function(e){return e});
	for (i=0;i <r.length;i++) { //slice lines by the separator and turn them into Rooms
		bits = r[i].split("|"); 
		Rooms.push(new Room(bits[0],bits[1],bits[2]));
	}

var You = Rooms[0].name; //put the player in the first Room

function parse(desc) { //does the links in each Room
	var out = desc.match(/\[(.*?)\]/g); // find each square-bracketed pair
	if (out == null) {return desc}; // if there are none
	for (i=0;i <out.length;i++) { 
		bits = out[i].split(":"); //split each square bracketed pair into an array of two			
		bits[0] = bits[0].replace('[','');  //remove the square brackets
		bits[1] = bits[1].replace(']','');
		var d = ('<b data-to="' + bits[1] + '">' + bits[0] + '</b>'); //generate HTML
		desc = desc.replace(out[i],d); //replace the brackets with HTML
	} 
	return desc;
}	

function move(a) {
	You = a.getAttribute("data-to");	
	look();
}


function Room(n, t, d) { 
    this.name = n;
    this.title = t;
    this.desc = d;
}

function look() {
	for (var i = 0; i < Rooms.length; i++) {	
	   if (Rooms[i].name == You) {
			document.getElementById('game').innerHTML=("<h3>" + Rooms[i].title + "</h3><P>" + parse(Rooms[i].desc) )
	   }	
	}
	var e = document.getElementsByTagName('b'); //make the links clickable
	for(var i = 0, len = e.length; i < len; i++) {
		e[i].onclick = function () {
			move(this);
		}
	}
}

look();