App.lobby_chat = App.cable.subscriptions.create "LobbyChatChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel

  send_lobby_message: ->
    @perform 'send_lobby_message'
