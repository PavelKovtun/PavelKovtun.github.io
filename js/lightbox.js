var modal = document.getElementById('modal');
var modalImg = document.getElementById("img01");
var somethingShowed = false;
var requestNum;
var imgCount = 5;
var loaded = [false, false, false, false, false];

for (var i = 1; i < 6; i++)
{
	document.getElementById('photo' + i).onclick = requestToShow;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
	somethingShowed = false;
}

addEventListener("keydown", function(event) {
    if (event.keyCode == 27)
	{
      span.onclick();
	  somethingShowed = false;
	}
	if (event.keyCode == 39 && somethingShowed == true)
	{
		if (requestNum == imgCount) { requestNum = 0; }
		requestNum += 1;
		document.getElementById("photo" + requestNum).click();
	}
	if (event.keyCode == 37 && somethingShowed == true)
	{
		if (requestNum == 0) { requestNum = imgCount; }
		if (requestNum == 1) { requestNum = imgCount + 1}
		requestNum -= 1;
		document.getElementById("photo" + requestNum).click();
	}
  });
 
function createFullPhoto(num){
    var modal = document.getElementById("modal");
    var modalImg = document.createElement("img");
    modalImg.src = "img/photo" + num + ".jpeg";
    modalImg.className = "modal-content";
    modalImg.style.display = "none";
    modalImg.id = "full" + num.toString();
    modalImg.onload = showLoad;
    modal.insertBefore(modalImg, modal.firstChild);
}

function requestToShow(event){
	target = event.target || event.srcElement;
	requestNum = parseInt(target.id[5]);
    modal.style.display = "block";
	if (loaded[target.id[5] - 1] == true) 
	{
    modalImg.src = "img/photo" + target.id[5] + ".jpeg";
	somethingShowed = true;
	return true;
	}
	else
	{
	modalImg.src = 'img/loader.gif';
	modalImg.style.width = '315px';
	modalImg.style.height = '318px';
	}
	createFullPhoto(target.id[5])
}

function showLoad(event)
{
	target = event.target || event.srcElement;
	loaded[target.id[4] - 1] = true;
	modalImg.src = "img/photo" + target.id[4] + ".jpeg";
	somethingShowed = true;
	modalImg.style.width = '700px';
	modalImg.style.height = '700px';
}
