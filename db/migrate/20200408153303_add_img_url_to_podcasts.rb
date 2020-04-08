class AddImgUrlToPodcasts < ActiveRecord::Migration[5.2]
  def change
    add_column :podcasts, :img_url, :string
  end
end
