class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :band
  has_one :designer
  has_one :chat
end
