class Poster < ApplicationRecord
  belongs_to :band
  belongs_to :designer, optional: true

  validates :date, presence: true
  validates :venue, presence: true
  validates :location, presence: true
  validates :edition, presence: true
  validates :status, presence: true
  validates :duedate, presence: true
  validates :dimensions, presence: true

end
