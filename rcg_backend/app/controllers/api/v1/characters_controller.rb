class Api::V1::CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters 
    end

    def create
        character = Character.make_new(params[:player_id])
        if character.save 
            players = Player.all
            render json: PlayerSerializer.new(players), status: :accepted
        else 
            render json: {errors: character.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    # def show 
    #     character = Character.find(params[:characterId])
    #     render json: character
    # end

end
