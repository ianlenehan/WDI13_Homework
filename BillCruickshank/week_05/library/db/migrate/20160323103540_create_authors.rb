class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.text :name
      t.date :date_of_birth
      t.text :genre
      t.text :image
      t.timestamps
    end
  end
end
