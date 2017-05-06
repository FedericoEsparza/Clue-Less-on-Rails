# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  $('html, body').animate({scrollTop:$(document).height()}, 1000)
  $('#lobby_message_input').focus()

$(document).on 'keypress', '#lobby_message_input', (e) ->
  if e.keyCode == 13 and e.target.value
    App.lobby_chat.send_lobby_message(e.target.value)
    e.target.value = ''
    e.preventDefault()
