class ChatSerializer < ActiveModel::Serializer
  attributes :id, :subject
  has_one :band
  has_one :designer
end
