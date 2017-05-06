# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery(document).on 'turbolinks:load', ->
    players = $('#players')
    alert(players.data('game-id'))
    App.game_play = App.cable.subscriptions.create {
        channel: "GameChannel"
        game_id: players.data('game-id')
      },
      connected: ->
        # Called when the subscription is ready for use on the server

      disconnected: ->
        # Called when the subscription has been terminated by the server

      received: (data) ->
        alert(data.action)
        alert(data)
        switch data.action
          when "make_move"
            move = data.msg
          when "new_player"
            alert()
            players.append data['message']
