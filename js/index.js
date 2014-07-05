window.onload = function() {
	var leftTag = document.getElementById("leftTag");
	var leftTagDown = document.getElementById("leftTagDown");
	var leftArrow = document.getElementById("leftArrow");
	var newBD = document.getElementById("newBD");

	var rightTag = document.getElementById("rightTag");
	var rightTagDown = document.getElementById("rightTagDown");
	var rightArrow = document.getElementById("rightArrow");
	var selectBD = document.getElementById("selectBD");

	var fixPosition = document.getElementById("fixPosition");
	var fixPositionSelect = document.getElementById("fixPositionSelect");

	leftTag.onclick = function() {
		leftTag.style.display = "none";
		leftTagDown.style.display = "block";
		rightTag.style.display = "block";
		rightTagDown.style.display = "none";
		leftArrow.style.display = "block";
		rightArrow.style.display = "none";
		newBD.style.display = "block";
		selectBD.style.display = "none";
		fixPosition.style.display = "block";
		fixPositionSelect.style.display = "none";
	}
	rightTag.onclick = function() {
		leftTag.style.display = "block";
		leftTagDown.style.display = "none";
		rightTag.style.display = "none";
		rightTagDown.style.display = "block";
		leftArrow.style.display = "none";
		rightArrow.style.display = "block";
		newBD.style.display = "none";
		selectBD.style.display = "block";
		fixPosition.style.display = "none";
		fixPositionSelect.style.display = "block";
	}
}