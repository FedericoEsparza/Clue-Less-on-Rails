# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery(document).on 'turbolinks:load', ->
    game_id = $('#game_heading').data('game-id')
    players = $('#players')
    App.global_chat = App.cable.subscriptions.create {
        channel: "GameChannel"
        id: game_id
      },
      connected: ->
        # Called when the subscription is ready for use on the server
      disconnected: ->
        # Called when the subscription has been terminated by the server
      received: (data) ->
        switch data.action
          when "make_move"
            move = data.msg

          when "new_player"
            players.append data['message']

      send_message: (message, game_id, action) ->
        @perform 'send_message', message: message, game_id: game_id, action: action
