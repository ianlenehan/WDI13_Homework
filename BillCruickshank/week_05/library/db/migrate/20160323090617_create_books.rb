class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :pub_date
      t.text :cover
      t.timestamps
    end
  end
end
