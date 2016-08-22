# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Ocean.destroy_all

Ocean.create({
  :name => "Pacific Ocean",
  :area => 165250000,
  :deepest => 10911,
  :percentage => 46
  })

Ocean.create({
  :name => "Indian Ocean",
  :area => 70560000,
  :deepest => 7906,
  :percentage => 20
  })
