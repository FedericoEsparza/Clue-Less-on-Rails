class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  # GET /games
  def index
    @games = Game.all
  end

  def show
    @game = Game.find_by(id: params[:id])
    @user = current_user
    @players = @game.players
    @players.each do |p|
      if p.user == @user
        @player = p
      end
    end
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
    locations = Array.new
    l1 = (Location.create [name: "Study", game: @game, hallway: false]).first
    l2 = (Location.create [name: "Hallway 1", game: @game, hallway: true]).first
    l3 = (Location.create [name: "Hall", game: @game, hallway: false]).first
    l4 = (Location.create [name: "Hallway 2", game: @game, hallway: true]).first
    l5 = (Location.create [name: "Lounge", game: @game, hallway: false]).first
    l6 = (Location.create [name: "Hallway 3", game: @game, hallway: true]).first
    l7 = (Location.create [name: "Hallway 4", game: @game, hallway: true]).first
    l8 = (Location.create [name: "Hallway 5", game: @game, hallway: true]).first
    l9 = (Location.create [name: "Library", game: @game, hallway: false]).first
    l10 = (Location.create [name: "Hallway 6", game: @game, hallway: true]).first
    l11 = (Location.create [name: "Billiard Room", game: @game, hallway: false]).first
    l12 = (Location.create [name: "Hallway 7", game: @game, hallway: true]).first
    l13 = (Location.create [name: "Dining Room", game: @game, hallway: false]).first
    l14 = (Location.create [name: "Hallway 8", game: @game, hallway: true]).first
    l15 = (Location.create [name: "Hallway 9", game: @game, hallway: true]).first
    l16 = (Location.create [name: "Hallway 10", game: @game, hallway: true]).first
    l17 = (Location.create [name: "Conservatory", game: @game, hallway: false]).first
    l18 = (Location.create [name: "Hallway 11", game: @game, hallway: true]).first
    l19 = (Location.create [name: "Ballroom", game: @game, hallway: false]).first
    l20 = (Location.create [name: "Hallway 12", game: @game, hallway: true]).first
    l21 = (Location.create [name: "Kitchen", game: @game, hallway: false]).first
    l1.doors = [l2, l6, l21]
    l1.save
    l2.doors = [l1, l3]
    l2.save
    l3.doors = [l2, l4, l7,]
    l3.save
    l4.doors = [l3, l5]
    l4.save 
    l5.doors = [l4, l8, l17]
    l5.save
    l6.doors = [l1, l9]
    l6.save
    l7.doors = [l3, l11]
    l7.save
    l8.doors = [l5, l13]
    l8.save
    l9.doors = [l6, l10, l17]
    l9.save
    l10.doors = [l9, l11]
    l10.save
    l11.doors = [l7, l10, l12, l15]
    l11.save
    l12.doors = [l11, l13]
    l12.save
    l13.doors = [l8, l12, l16]
    l13.save
    l14.doors = [l9, l17]
    l14.save
    l15.doors = [l11, l19]
    l15.save
    l16.doors = [l13, l21]
    l16.save
    l17.doors = [l5, l14, l18]
    l17.save
    l18.doors = [l17, l18]
    l18.save
    l19.doors = [l15, l18, l20]
    l19.save
    l20.doors = [l19, l21]
    l20.save
    l21.doors = [l1, l16, l20]
    l21.save
    locations = [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21]
    @game.locations = locations
    
    @game.status = true
    
    @game.players.each do |p|
      case p.name
        when "Miss Scarlett"
	  loc = @game.locations.where(name: "Hallway 2").first
          p.location= loc
	  p.location_id = loc.id       
          p.save
        when "Colonel Mustard"
	  loc = @game.locations.where(name: "Hallway 5").first
          p.location= loc
	  p.location_id = loc.id       
          p.save
        when "Mrs. White"
	  loc = @game.locations.where(name: "Hallway 12").first
          p.location= loc
	  p.location_id = loc.id       
          p.save
        when "Mr. Green"
	  loc = @game.locations.where(name: "Hallway 11").first
          p.location= loc
	  p.location_id = loc.id       
          p.save
        when "Mrs. Peacock"
	  loc = @game.locations.where(name: "Hallway 8").first
          p.location= loc
	  p.location_id = loc.id       
          p.save
        when "Professor Plum"
	  loc = @game.locations.where(name: "Hallway 3").first
          p.location= loc
	  p.location_id = loc.id       
          p.save
        else
          p.location=@game.locations.first
          p.save
      end
    end
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

  def game_play
    winner = false
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
