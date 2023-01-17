class Chat < ApplicationRecord
  belongs_to :band
  belongs_to :designer
  has_many :messages
end
