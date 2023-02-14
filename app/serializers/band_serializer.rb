class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :instagram, :website, :location, :image, :bio, :on_tour, :email

end
