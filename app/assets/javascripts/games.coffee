# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery(document).on 'turbolinks:load', ->
    players = $('#players')
    App.game_play = App.cable.subscriptions.create {
        channel: "GameChannel"
        game_id: players.data('game-id')
      },
      connected: ->
        # Called when the subscription is ready for use on the server

      disconnected: ->
        # Called when the subscription has been terminated by the server
        
      received: (data) ->
        switch data.action
          when "add_player"
            players.append data['message']
          when "remove_player"
            players.remove data['message']
