class CreatePodcastGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :podcast_genres do |t|
      t.integer :podcast_id
      t.integer :user_id
      t.timestamps
    end
  end
end
