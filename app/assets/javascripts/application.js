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
//= require turbolinks
//= require_tree .


$(document).ready(function(){
  $('#edibles').hover(function(){
    $('.img').attr('src','/assets/tea.png');
  }, function(){
    $('.img').attr('src','/assets/tea.png');
  });

  $('#non-edibles').hover(function(){
    $('.img').attr('src','/assets/fans.png');
    $('#background').css('background-color','#ebcfdf');
  }, function(){
    $('.img').attr('src','/assets/tea.png');
    $('#background').css('background-color','#eee2d4');
  });

  $('#cards').hover(function(){
    $('.img').attr('src','/assets/cards.png');
    $('#background').css('background-color','#b6d4dc');

  }, function(){
    $('.img').attr('src','/assets/tea.png');
    $('#background').css('background-color','#eee2d4');
  });

  $('#envelopes').hover(function(){
    $('.img').attr('src','/assets/envelopes.png');
    $('#background').css('background-color','#aeb9b5');
  }, function(){
    $('.img').attr('src','/assets/tea.png');
    $('#background').css('background-color','#eee2d4');
  });

});
