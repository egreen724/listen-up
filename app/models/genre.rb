class Genre < ApplicationRecord
  has_many :podcast_genres
  has_many :podcasts, through: :podcast_genres
end
