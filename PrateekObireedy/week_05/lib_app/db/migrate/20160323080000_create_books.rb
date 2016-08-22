class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :year
      t.text :generates
      t.text :image
      t.timestamps
    end
  end
end
