class Message < ApplicationRecord
  belongs_to :band
  belongs_to :designer
  belongs_to :chat
end
