class Api::V1::CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters 
    end

    def create
        player_id = Player.all.find_by(name: params[:player_name]).id
        character = Character.make_new(player_id, params[:campaign])
        if character.save 
            players = Player.all
            render json: PlayerSerializer.new(players), status: :accepted
        else 
            render json: {errors: character.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def show 
        character = Character.find(params[:id])
        render json: character
    end

end
