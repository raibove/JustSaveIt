let addLink = document.getElementById("addLink");
let deleteLink = document.getElementById("deleteLink");
let links = document.getElementById("links");
let isadded = document.getElementById("isadded");
let newLink = document.getElementById("newLink");
let add = document.getElementById("add");
let cancel = document.getElementById("cancel");
let addTitle = document.getElementById("addTitle");
let addURL = document.getElementById("addURL");

let arr = [];
chrome.storage.local.get('arr', function(response) {
	if(response.arr){
		console.log(response.arr);
		arr = response.arr;
	}
});
disp();
function disp(){
	let str = '';
	for(i=0;i<arr.length;i++){
		str += arr[i] + "&nbsp;&nbsp;<a href=#><i class='fas fa-copy'></i></a>" + "<br>";
	}
	links.innerHTML = str;
	checkEmpty();
}

function checkEmpty(){
	if(links.innerHTML==""){
		isadded.classList.add("displaytxt");
	}
	else{
		isadded.classList.remove("displaytxt");
		isadded.classList.add("hidetxt");
	}
}


addLink.addEventListener("click", addNew);
add.addEventListener("click", appendLink);
cancel.addEventListener("click",displayAddDelete);


function addNew(){
	newLink.classList.remove("hidetxt");
	newLink.classList.add("displaytxt");
	hideAddDelete();
}

function hideAddDelete(){
	addLink.classList.add("hidetxt");
	deleteLink.classList.add("hidetxt");	
}

function appendLink(){
	arr.push(addTitle.value);
	// set storage
	chrome.storage.local.set({arr});
	disp();
	displayAddDelete();
}

function displayAddDelete(){	
	//get storge
	addTitle.value = '';
	addURL.value = '';
	addLink.classList.remove("hidetxt");
	deleteLink.classList.remove("hidetxt");
	newLink.classList.add("hidetxt");
	newLink.classList.remove("displaytxt");
}

