class CreateBackgrounds < ActiveRecord::Migration[6.0]
  def change
    create_table :backgrounds do |t|
      t.integer :character_id
      t.string :background_title
      t.string :personality_trait
      t.string :ideal
      t.string :alignment
      t.string :bond
      t.string :flaw

      t.timestamps
    end
  end
end
