class Podcast < ApplicationRecord
  has_many :users_podcasts
  has_many :users, through: :users_podcasts
  has_many :reviews
  has_many :podcast_genres
  has_many :genres, through: :podcast_genres
end
