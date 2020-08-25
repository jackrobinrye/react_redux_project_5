class Api::V1::CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: CharacterSerializer.new(characters) 
    end

    def create
        # byebug
        player_id = Player.all.find_by(name: params[:player_name]).id
        character = Character.make_new_character(player_id, params[:campaign])
        if character.save 
            players = Player.all
            render json: PlayerSerializer.new(players), status: :accepted
        else 
            render json: {errors: character.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def show 
        character = Character.find(params[:id])
        render json: CharacterSerializer.new(character)
    end

end
