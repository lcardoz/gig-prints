class DesignerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :instagram, :website, :location, :image, :bio, :open_to_work, :email
  has_many :posters

end
