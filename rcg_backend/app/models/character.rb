class Character < ApplicationRecord
    belongs_to :player
    has_one :background
    validates :player_id, presence: true

    def self.make_new(player_id, campaign) 
        rng = RandomNameGenerator.new

        # campaigns = ["Princes Of The Apocalypse", "Lost Mine Of Phandelver", "Tyranny Of Dragons", "Tales From The Yawning Portal", "The Rod Of Seven Parts", "Temple Of Elemental Evil", "Tomb Of Annihilation", "Out Of The Abyss"]
        races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"]        
        stats = [8, 10, 12, 13, 14, 15].shuffle

        self.new(
            player_id: player_id, 
            campaign: campaign,
            name: "#{rng.compose} #{rng.compose}", 
            gender: Faker::Gender.type, 
            age: rand(10..200), 
            cclass: Faker::Games::DnD.klass, 
            race: races.sample, 
            background: Background.new, 
            alignment: Faker::Games::DnD.alignment, 
            strength: stats[0], 
            dexterity: stats[1], 
            constitution: stats[2], 
            intelligence: stats[3], 
            wisdom: stats[4], 
            charisma: stats[5]
        )
    end 
end
