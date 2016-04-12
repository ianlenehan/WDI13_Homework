# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Book.destroy_all
#
# Book.create({
#   :title => "Stand on Zanzibar",
#   :pub_date => "1968",
#   :cover => "http://d.gr-assets.com/books/1360613921l/41069.jpg"
# })

Author.destroy_all

Author.create({
  :name => "John Brunner",
  :date_of_birth => "1934/9/24",
  :genre => "Science Fiction",
  :image => "https://upload.wikimedia.org/wikipedia/en/c/c8/JBrunnerQS.jpg"
})
