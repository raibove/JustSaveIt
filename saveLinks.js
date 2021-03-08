let addLink = document.getElementById("addLink");
let links = document.getElementById("links");
let isadded = document.getElementById("isadded");
let newLink = document.getElementById("newLink");
let add = document.getElementById("add");
let cancel = document.getElementById("cancel");
let addTitle = document.getElementById("addTitle");
let addURL = document.getElementById("addURL");

let arr = [];
let lin = [];
chrome.storage.local.get(['name','link'], function(response) {
	if(response.name){
		console.log(response.name);
		console.log(response.link);
		arr = response.name;
		lin = response.link;
		disp();
	}
});

function disp(){
	let str = '';
	for(i=0;i<arr.length;i++){
		str += arr[i] + "&nbsp;&nbsp;<a href=#>"+lin[i]+"</a><br>";
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
}

function appendLink(){
	arr.push(addTitle.value);
	lin.push(addURL.value);
	// set storage
	chrome.storage.local.set({'name': arr, 'link': lin});
	disp();
	displayAddDelete();
}

function displayAddDelete(){	
	//get storge
	addTitle.value = '';
	addURL.value = '';
	addLink.classList.remove("hidetxt");
	newLink.classList.add("hidetxt");
	newLink.classList.remove("displaytxt");
}

