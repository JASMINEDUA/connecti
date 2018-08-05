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

window.addEventListener('load',function(){
	var userEmail = $('current_user_email').html();
  if (userEmail){
  	var socket = io.connect('http://localhost:8000');
    socket.on('connect',function(){
    console.log('handshake completed,connected to chat server');
     socket.emit('join_chat_room', {
      'message':'msg'
      'chatroom_name':'android_room',
      'user_email': userEmail
     });
    });


  }


});