class Genre < ApplicationRecord
  has_many :podcasts, through: :podcast_genres
end
