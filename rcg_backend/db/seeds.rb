# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rng = RandomNameGenerator.new
campaigns = ["Princes Of The Apocalypse", "Lost Mine Of Phandelver", "Tyranny Of Dragons", "Tales From The Yawning Portal", "The Rod Of Seven Parts", "Temple Of Elemental Evil", "Tomb Of Annihilation", "Out Of The Abyss"]

jack = Player.create(name: "Jack", age: 25, gender: "Agender")
michelle = Player.create(name: "Michelle", age: 25, gender: "Female")
becca = Player.create(name: "Becca", age: 23, gender: "Non-binary")
paul = Player.create(name: "Paul", age: 23, gender: "Agender")
devon = Player.create(name: "Devon", age: 25, gender: "Non-binary")

2.times {
    Character.make_new_character(jack.id, campaigns.sample).save
}
2.times {
    Character.make_new_character(michelle.id, campaigns.sample).save
}
2.times {
    Character.make_new_character(becca.id, campaigns.sample).save
}
2.times {
    Character.make_new_character(paul.id, campaigns.sample).save
}
2.times {
    Character.make_new_character(devon.id, campaigns.sample).save
}


