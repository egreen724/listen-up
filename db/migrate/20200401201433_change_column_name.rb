class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :podcast_genres, :user_id, :genre_id 
  end
end
