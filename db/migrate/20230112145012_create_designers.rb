class CreateDesigners < ActiveRecord::Migration[7.0]
  def change
    create_table :designers do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :instagram
      t.string :website
      t.string :location
      t.string :image
      t.text :bio
      t.boolean :open_to_work

      t.timestamps
    end
  end
end
