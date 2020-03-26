class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :requestor_id, references: :users, index: true
      t.integer :acceptor_id, references: :users, index: true
      t.string :status
      t.timestamps
    end
  end
end
