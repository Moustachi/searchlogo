$(function() {
	$(".search").click(function(){
		scholarshipHighschool();
	});

	function scholarshipHighschool(){
		if ($(".loan-menu").val() == "scholarship" &&
			$(".school-menu").val() == "highschool"){
			reset()
			$(".scholarship-highschool").removeClass("gray");
		} else if 
			($(".loan-menu").val() == "loan" &&
			$(".school-menu").val() == "k1"){
			reset()
			$(".loan-k1").removeClass("gray");
		} else if 
			($(".loan-menu").val() == "allProgram" &&
			$(".school-menu").val() == "allSchool"){
			reset()
			$("img").removeClass("gray");
		};
	};

	function reset(){
		$("img").addClass("gray");
	};
});