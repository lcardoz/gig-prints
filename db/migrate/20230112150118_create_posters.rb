class CreatePosters < ActiveRecord::Migration[7.0]
  def change
    create_table :posters do |t|
      t.belongs_to :band, null: false, foreign_key: true
      t.belongs_to :designer, null: true, foreign_key: true
      t.string :image
      t.string :date
      t.string :venue
      t.string :location
      t.integer :edition
      t.string :status
      t.string :duedate
      t.string :budget
      t.string :dimensions

      t.timestamps
    end
  end
end
