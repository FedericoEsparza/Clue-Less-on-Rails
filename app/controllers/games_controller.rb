class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  # GET /games
  def index
    @games = Game.all
  end

  def show
    Rails.logger.info "***** PARAMS ID: #{params[:id]} ******"
    @game = Game.find_by(id: params[:id])
    Rails.logger.info "***** GAME: #{@game.title} ******"
  end

  def new
    @game = Game.new
  end

  def edit
  end

  def create
    @game = Game.new(game_params)
    @game.user = current_user
    players = Array.new
    players += (Player.create [name:"Miss Scarlett", game:@game])
    players += (Player.create [name:"Colonel Mustard", game:@game])
    players += (Player.create [name:"Mrs. White", game:@game])
    players += (Player.create [name:"Mr. Green", game:@game])
    players += (Player.create [name:"Mrs. Peacock", game:@game])
    players += (Player.create [name:"Professor Plum", game:@game])
    @game.players = players
    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
        format.json { render :show, status: :created, location: @game }
      else
        format.html { render :new }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @game.update(game_params)
        format.html { redirect_to @game, notice: 'Game was successfully updated.' }
        format.json { render :show, status: :ok, location: @game }
      else
        format.html { render :edit }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_game
      @game = Game.find(params[:id])
      @players = @game.players
    end

    def game_params 
      params.require(:game).permit(:title) 
    end 
end
