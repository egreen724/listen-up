class AddListenedToUsersPodcasts < ActiveRecord::Migration[5.2]
  def change
    add_column :users_podcasts, :listened?, :boolean
  end
end
