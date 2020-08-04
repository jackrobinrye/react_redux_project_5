# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rng = RandomNameGenerator.new

jack = Player.create(name: "Jack", age: 25, gender: "Agender")
michelle = Player.create(name: "Michelle", age: 25, gender: "Female")
becca = Player.create(name: "Becca", age: 23, gender: "Non-binary")
paul = Player.create(name: "Paul", age: 23, gender: "Agender")
grace = Player.create(name: "Grace", age: 23, gender: "Female")

2.times {
    Character.make_new(jack.id).save
}
2.times {
    Character.make_new(michelle.id).save
}
2.times {
    Character.make_new(becca.id).save
}
2.times {
    Character.make_new(paul.id).save
}
2.times {
    Character.make_new(grace.id).save
}


