window.onload = function() {
	var storage = 0; // 存储在首页用户点击的是哪一条资料

	var leftInner = document.getElementById("leftInner");
	var rightInner = document.getElementById("rightInner");

	var leftOl = leftInner.getElementsByTagName("li");
	var rightOl = rightInner.getElementsByTagName("li");

	var index; // 当前i值
	for (var i = 0; i < leftOl.length; i++) {
		leftOl[i].index = i;
		leftOl[i].onclick = function() {
			for (var i = 0; i < leftOl.length; i++) {
				leftOl[i].className = "";
			}
			leftOl[this.index].className = "clicked";
			for (var i = 0; i < rightOl.length; i++) {
				rightOl[i].style.display = "none";
			}
			rightOl[this.index].style.display = "block";
		}
	}
}