class CreatePodcastUserJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users_podcasts do |t|
      t.integer :user_id
      t.integer :podcast_id
    end
  end
end
