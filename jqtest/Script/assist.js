// $(document).ready(function() {
// 	$("#reset").click(function(){
// 		$("*").removeAttr("style");
// 		$("div[class=none]").css({"display":"none"});
// 	});
// 	$("input[type=button]").click(function(){
// 		if($("#isreset").is(":checked")){
// 			$("#reset").click();
// 		}
// 	});
// 	function animateIt(){
// 		$("#mover").slideToggle("slow",animateIt)
// 	}
// 	animateIt();
// })
$(document).ready(function(){
	//手动重置页面元素
	$("#reset").click(function(){
		$("*").removeAttr("style");
		$("div[class=none]").css({"display":"none"}); 
	});
	$("input[type=button]").click(function(){
		if($("#isreset").is(":checked")){
			$("#reset").click();
		}
	});
	//给id为mover的元素添加动画.
	function animateIt() {
		$("#mover").slideToggle("slow", animateIt);
	}
	animateIt();
})
