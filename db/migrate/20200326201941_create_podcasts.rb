class CreatePodcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :podcasts do |t|
      t.string :title
      t.string :description
      t.string :media_company
      t.timestamps
    end
  end
end
