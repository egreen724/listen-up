class PodcastGenre < ApplicationRecord
  belongs_to :podcast
  belongs_to :genre 
end
