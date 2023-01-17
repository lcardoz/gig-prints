class DesignerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :instagram, :website, :location, :image, :bio, :open_to_work, :completed_posters
  has_many :posters

  def completed_posters
    self.object.posters.where("status = ?", 'complete').map{|poster| {
      id: poster.id, 
      image: poster.image, 
      date: poster.date,
      venue: poster.venue,
      location: poster.location,
      edition: poster.edition,
      dimensions: poster.dimensions,
      band:{
        id: poster.band.id, 
        name: poster.band.name
      }
    }}
  end

end
