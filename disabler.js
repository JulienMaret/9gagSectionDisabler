var needcheckbox = (document.getElementsByClassName("Checkbox_disabler").length == 0);
function add_checkboxes() {
	var needcheckbox = false;
	var list = document.getElementsByClassName("nav")[1].getElementsByTagName("li");
	for(var i =0; i < list.length; i++) {
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.className = "Checkbox_disabler";
		checkbox.checked = true;
		list[i].appendChild(checkbox);
	}
}

function disableSpoiler() {
	var disabled = document.getElementsByClassName("Checkbox_disabler");
	var to_disable=[];
	for (var i = 0; i < disabled.length; i++)
		if(!disabled[i].checked)
			to_disable.push(disabled[i].parentElement.getElementsByClassName("label")[0].innerText.concat(" "));
	var x = document.getElementsByClassName("section");
	for (var i = 0; i < x.length; i++)
		if(to_disable.includes(x[i].innerText))
			x[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
}
if (needcheckbox) add_checkboxes();
disableSpoiler();
document.addEventListener("scroll", disableSpoiler);

