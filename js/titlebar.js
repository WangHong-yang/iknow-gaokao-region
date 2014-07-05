var titlebar={
	addHandler: function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type] = handler;
		}
	},
	getEvent: function(event){
		return event? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	more: document.getElementById('tb_more'),
	list: document.getElementById('tb_hiddenlist'),
	init: function(){
		titlebar.addHandler(document,"click",titlebar.hiddenlist);
	},
	hiddenlist: function(event){
			event = titlebar.getEvent(event);
			var target = titlebar.getTarget(event);
			target = target.parentNode;
			if(target.id=="tb_more" && target!=document){
				titlebar.more.className = "tb_hidden_hover";
				titlebar.list.style.display = "block";
			}else{
				titlebar.more.className = "";
				titlebar.list.style.display = "none";
			}
	}
}
titlebar.init();