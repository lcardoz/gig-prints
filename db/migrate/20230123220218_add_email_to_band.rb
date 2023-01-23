class AddEmailToBand < ActiveRecord::Migration[7.0]
  def change
    add_column :bands, :email, :string
  end
end
