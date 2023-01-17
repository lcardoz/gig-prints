class PosterSerializer < ActiveModel::Serializer
  attributes :id, :image, :date, :venue, :location, :edition, :status, :duedate, :budget, :dimensions, :designer, :band
  has_one :band
  has_one :designer


end
