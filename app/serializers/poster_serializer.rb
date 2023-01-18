class PosterSerializer < ActiveModel::Serializer
  attributes :id, :image, :date, :venue, :location, :edition, :status, :duedate, :budget, :dimensions, :designer_id, :band_id
  has_one :band
  has_one :designer


end
