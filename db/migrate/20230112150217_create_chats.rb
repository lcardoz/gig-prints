class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.belongs_to :band, null: false, foreign_key: true
      t.belongs_to :designer, null: false, foreign_key: true
      t.string :subject

      t.timestamps
    end
  end
end
