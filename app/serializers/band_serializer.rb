class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :instagram, :website, :location, :image, :bio, :on_tour 
  # has_many :posters

  # def completed_posters
  #   self.object.posters.where("status = ?", 'complete').map{|poster| {
  #     id: poster.id, 
  #     image: poster.image, 
  #     date: poster.date,
  #     venue: poster.venue,
  #     location: poster.location,
  #     edition: poster.edition,
  #     dimensions: poster.dimensions,
  #     designer:{
  #       id: poster.designer.id, 
  #       name: poster.designer.name
  #     }
  #   }}
  # end

  # def unassigned_posters
  #   self.object.posters.where("status = ?", 'unassigned')
  # end

end
