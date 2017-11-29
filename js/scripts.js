$(document).ready(function() {
  $("form#some-form").submit(function(event) {
    var someInput = $("input#some-input").val().toUpperCase();

    $("#shout").show();
    event.preventDefault();
    $(".response").text(someInput);




  });
});
