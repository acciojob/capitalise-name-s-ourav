//your JS code here. If required.
box=document.getElementById("fname")
box.addEventListener("blur",func1)
function func1(){
	name1=box.value
	name2 = name1.toUpperCase()
	box.value=name2
}
