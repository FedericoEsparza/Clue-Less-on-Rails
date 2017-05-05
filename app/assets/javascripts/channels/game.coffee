App.game = App.cable.subscriptions.create "GameChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    switch data.action
      when "game_start"
        App.gamePlay = new Game('#game-container', data.msg)

      when "take_turn"
        App.gamePlay.performTurn()

      when "new_game"
        App.gamePlay.newGame()    
