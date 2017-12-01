
var name;
var addres;
var age;

$(document).ready(function() {
  $("form#aboutYou").validator().on('submit', function(event) {
    name = $("#name").val();
    addres = $("#addres").val();
    age = $("#age").val();
    $("#aboutYouInfo").toggle();
    $("#surveyQuestionsInfo").toggle();
    event.preventDefault();
  });
  $("form#surveyQuestions").validator().on('submit', function(event) {
    var hobby = $("#hobby").val();
    var math = $("input:radio[name=math]:checked").val();
    var curious = $("input:radio[name=curious]:checked").val();
    var developer = $("input:radio[name=developer]:checked").val();
    var mathSkills = $("input:radio[name=mathSkills]:checked").val();

    if((math === "2" || math === "1") && mathSkills === "1" && developer ==="1"){  
      $("#php").hide();
      $("#ruby").hide();
      $("#definitionPL").hide();
      $("#java").show();
    }
    else if(curious === "1" && developer === "0"){
      $("#java").hide();
      $("#ruby").hide();
      $("#definitionPL").hide();
      $("#php").show();
    }
    else if(!(math === "0") && developer ==="1" && mathSkills===0){
      $("#php").hide();
      $("#java").hide();
      $("#definitionPL").hide();
      $("#ruby").show();
    }
    else{
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
      $("#definitionPL").show();
    }
    event.preventDefault();
  });
});
