// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .


function edibles_click(){
  document.getElementById("edibles_dropdown").classList.toggle("show");
}

function non_edibles_click(){
  document.getElementById("non_edibles_dropdown").classList.toggle("show");
}

window.onclick = function(e){
  if (!e.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i=0; i<dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }

}

var ready = function(){
  $('#edibles').hover(function(){
    $('#image_change').fadeOut(function(){
      $(this).attr('src','/assets/tea.png').fadeIn();
    });
    $('#background').css('background-color','#eee2d4');
    $('#description_change').html('An aromatic beverage commonly prepared by everyone. Let your guests enjoy a cup of cured leaves to unwind and relax with either our House or Premium selection for you to choose from.');
  }, function(){
    $('#image_change').attr('src', '/assets/tea.png');
  });

  $('.dropdown_non_edibles').hover(function(){
    $('#image_change').fadeOut(function(){
      $(this).attr('src','/assets/fans.png').fadeIn();
    });
    $('#background').css('background-color','#ebcfdf');
    $('#description_change').html('Beautiful as they are functional, fashioned out of decorative paper and wood. Make it your own by engraving your names and dates on the side to etch your occasion into your guests’ hearts. Paper fans come in a variety of colours.');
  }, function(){
    $('#image_change').attr('src', '/assets/fans.png');
  });

  $('#cards').hover(function(){
    $('#image_change').fadeOut(function(){
      $(this).attr('src','/assets/cards.png').fadeIn();
    });
    $('#background').css('background-color','#b6d4dc');
    $('#description_change').html('Announce your special day to your guests with modern, unique wedding invitations and elegant stationery.');
  }, function(){
    $('#image_change').attr('src', '/assets/cards.png');
  });

  $('#envelopes').hover(function(){
    $('#image_change').fadeOut(function(){
      $(this).attr('src','/assets/envelopes.png').fadeIn();
    });
    $('#background').css('background-color','#aeb9b5');
    $('#description_change').html('Distinct designs, attractive colours and a premium finish that will offer you everything you ever wanted for your wedding invitations.');
  }, function(){
    $('#image_change').attr('src', '/assets/envelopes.png');
  });
}


$(document).ready(ready);

$(document).on('turbolinks:load', ready);
