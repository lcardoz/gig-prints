class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :instagram
      t.string :website
      t.string :location
      t.string :image
      t.text :bio
      t.boolean :on_tour

      t.timestamps
    end
  end
end
