App.lobby_chat = App.cable.subscriptions.create "LobbyChatChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    $lobbymessages = $('#lobby_messages')
    $lobbymessages.append data
    $lobbymessages.scrollTop $lobbymessages.prop('scrollHeight')

  send_lobby_message: (message) ->
    @perform 'send_lobby_message', lobby_message: message
