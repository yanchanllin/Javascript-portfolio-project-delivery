class CommentSerializer < ActiveModel::Serializer
    attributes :id, :content
  
    belongs_to :order
  end