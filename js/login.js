$(document).ready(function() {
  $('.show-pw').on({'click': function() {
      if ($('#password').attr('type') === "password") {
          $('#password').attr('type',"text");
          $(this).text('Hide');
      } else {
          $('#password').attr('type',"password");
          $(this).text('Show');
      };
  }});

  $('#login-form').submit(function(e) {
      // e.preventDefault();
      alert("form submit Event");

      if($('#remember').prop('checked')) {
          localStorage.setItem("id", $('#username').val());
      }else {
          localStorage.removeItem("id");
      };
  });
});

window.onload = function () {
  var id = localStorage.getItem("id");
  if (id !== null ) {
      document.getElementById("username").value = id;
      document.getElementById("remember").checked = true;
  };
};