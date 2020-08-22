class CharacterSerializer
    include FastJsonapi::ObjectSerializer
    attributes :campaign, :name, :age, :gender, :race, :cclass, :alignment, :strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma, :background
  end