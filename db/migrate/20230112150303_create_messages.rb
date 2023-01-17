class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.belongs_to :band, null: false, foreign_key: true
      t.belongs_to :designer, null: false, foreign_key: true
      t.belongs_to :chat, null: false, foreign_key: true
      t.text :body

      t.timestamps
    end
  end
end
