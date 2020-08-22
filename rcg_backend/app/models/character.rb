class Character < ApplicationRecord
    belongs_to :player
    has_one :background
    validates :player_id, presence: true

    def self.make_new_character(player_id, campaign) 
        rng = RandomNameGenerator.new

        races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"]        
        stats = [8, 10, 12, 13, 14, 15].shuffle

        character = self.create(
            player_id: player_id, 
            campaign: campaign,
            name: "#{rng.compose} #{rng.compose}", 
            gender: Faker::Gender.type, 
            age: rand(10..200), 
            cclass: Faker::Games::DnD.klass, 
            race: races.sample, 
            alignment: Faker::Games::DnD.alignment, 
            strength: stats[0], 
            dexterity: stats[1], 
            constitution: stats[2], 
            intelligence: stats[3], 
            wisdom: stats[4], 
            charisma: stats[5]
        )

        character.background = Background.make_new_background(character.id)
        character
    end 
end
