//back End


//front End
$(document).ready(function() {
  $("form#entryForm").submit(function() {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();
    var phoneInput = $("input#phone").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".email").text(emailInput);
    $(".phone").text(phoneInput);

    $("#contactsList").append('<div class="output card" id="contactOutput"><h2><span class="name"></span></h2><div class="contactInfo"><p><span class="email"></span></p><p><span class="address"></span></p><p><span class="phone"></span></p></div></div>');

    event.preventDefault();


  });

  $(".name").click(function() {
    $(".contactInfo").slideToggle();

  });

});
