class Api::V1::PlayersController < ApplicationController

    def index
        players = Player.all
        render json: PlayerSerializer.new(players) 
    end

    def show 
        player = Player.find(params[:id])
        render json: PlayerSerializer.new(player)
    end

    def create
        player = Player.new(player_params)
        if player.save 
            players = Player.all
            render json: PlayerSerializer.new(players), status: :accepted
        else 
            render json: {errors: player.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    private 

    def player_params
        params.require(:player).permit(:name, :age, :gender)
    end

    
end
