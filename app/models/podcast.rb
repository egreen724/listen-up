class Podcast < ApplicationRecord
  has_many :users
  has_many :reviews
  has_many :podcast_genres
  has_many :genres, through: :podcast_genres
end
