$(document).ready(function() { 

  let resultsArray = [];
  let flavorsArray = [];


  $("#flavorsForm").submit(function(event) {
    event.preventDefault();
    $(".results").show();

    resultsArray = [$("#flavorOne").val(),$("#flavorTwo").val(),$("#flavorThree").val(),$("#flavorFour").val(),$("#flavorFive").val()];
    
    resultsArray.forEach(function(element) {
      if (element !== "") {
        flavorsArray.push(element);
      }
    })
  
    console.log(flavorsArray);

    flavorsArray.forEach(function (element) {
      $("#list").append("<li>" + element + "</li>");
    })

  });
});