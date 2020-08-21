class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.integer :player_id
      t.string :campaign
      t.string :name
      t.integer :age
      t.string :gender
      t.string :race
      t.string :cclass
      t.integer :background_id
      t.string :alignment
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma

      t.timestamps
    end
  end
end
