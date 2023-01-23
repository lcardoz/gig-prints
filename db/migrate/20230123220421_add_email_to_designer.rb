class AddEmailToDesigner < ActiveRecord::Migration[7.0]
  def change
    add_column :designers, :email, :string
  end
end
