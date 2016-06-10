$(function() {

    $(".search").click(function(){
    	scholarshipHighschool();
    });

    function scholarshipHighschool() {
    	if ($(".loan-menu").val() == "scholarship" && 
    		$(".school-menu").val() == "highschool"){
    		$("#scholarship-highschoolgrey").css("display", "none")
    		$("#scholarship-highschool").css("display", "inline-block")
    	}
    };
});