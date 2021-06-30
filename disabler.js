if (localStorage.getItem("disab_list") === null)
   var disab_list = [];
else
   var disab_list = JSON.parse(localStorage.getItem("disab_list"));
var needcheckbox = (document.getElementsByClassName("Checkbox_disabler").length == 0);

function disablerClicked(checkbox) {
    if (!checkbox.checked)
        disab_list.push(checkbox.parentElement.getElementsByClassName("label")[0].innerText);
    else
        disab_list.splice(disab_list.indexOf(checkbox.parentElement.getElementsByClassName("label")[0].innerText), 1);
    localStorage.setItem("disab_list", JSON.stringify(disab_list));
}

function add_checkboxes() {
	var needcheckbox = false;
	var list = document.getElementsByClassName("drawer-container")[0].getElementsByTagName("section")[1].getElementsByTagName("li");
	for(var i =0; i < list.length; i++) {
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.className = "Checkbox_disabler";
                checkbox.setAttribute("onchange", "disablerClicked(this)");
 		checkbox.checked = !disab_list.includes(list[i].getElementsByClassName("label")[0].innerText);
                
		list[i].appendChild(checkbox);
	}
        var list = document.getElementsByClassName("drawer-container")[0].getElementsByTagName("section")[2].getElementsByTagName("li");
	for(var i =0; i < list.length; i++) {
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.className = "Checkbox_disabler";
                checkbox.setAttribute("onchange", "disablerClicked(this)");
		checkbox.checked = !disab_list.includes(list[i].getElementsByClassName("label")[0].innerText);
		list[i].appendChild(checkbox);
	}
}

function disableSpoiler() {
	var disabled = document.getElementsByClassName("Checkbox_disabler");
	var to_disable=[];
	for (var i = 0; i < disabled.length; i++)
		if(!disabled[i].checked)
			to_disable.push(disabled[i].parentElement.getElementsByClassName("label")[0].innerText);
	var x = document.getElementsByClassName("section");
	for (var i = 0; i < x.length; i++)
		if(to_disable.includes(x[i].innerText))
			x[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
}

function enableControls() {
  for (video of document.getElementsByTagName("video"))
    if (!video.hasAttribute("controls"))
      video.setAttribute("controls","controls");  
}

if (needcheckbox) add_checkboxes();
disableSpoiler();
document.addEventListener("scroll", disableSpoiler);
document.addEventListener("scroll", enableControls);

document.querySelector("#jsid-app > div > div.cp-background").remove();
