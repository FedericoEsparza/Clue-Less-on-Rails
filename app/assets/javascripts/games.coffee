# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery(document).on 'turbolinks:load', ->
    game_id = $('#game_heading').data('game-id')
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


    $('#new_message').submit (e) ->
      $this = $(this)
      textarea = $this.find('#message_body')
      if $.trim(textarea.val()).length > 1
        App.global_chat.send_message textarea.val(), messages.data('game-id'), "chat"
        textarea.val('')
      e.preventDefault()
      return false
