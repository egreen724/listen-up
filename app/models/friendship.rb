class Friendship < ApplicationRecord
  belongs_to :requestor, class_name: :User, foreign_key: :requestor_id
  belongs_to :acceptor, class_name: :User, foreign_key: :acceptor_id
end
