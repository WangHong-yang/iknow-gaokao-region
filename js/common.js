	var body = document.getElementsByTagName("body")[0];
	var monsterTopRight = document.getElementById("monsterTopRight");
	var login_2 = document.getElementById("login_2");
	var setting = document.getElementById("setting");

	// 对小于1000px分辨率的屏幕产生横向滚动条
	if(window.screen.availWidth < 1000) {
		//body.style.overflowX = "auto";
		//monsterTopRight.style.right = 300+'px';
	} else if (window.screen.availWidth >= 1000 && window.screen.availWidth < 1300) {
		//monsterTopRight.style.right = 300+'px';
	}

	login_2.onmouseover = setting.onmouseover = function() {
		setting.style.display = "block";
	}
	login_2.onmouseout = setting.onmouseout = function() {
		setting.style.display = "none";
	}