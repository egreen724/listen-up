class Podcast < ApplicationRecord
  has_many :users
  has_many :reviews
  belongs_to :genre, through: :podcast_genres 
end
