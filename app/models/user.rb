class User < ApplicationRecord
  has_many :users_podcasts
  has_many :podcasts, through: :users_podcasts
  has_many :friendships
  has_many :reviews
  has_secure_password

  # might need to add refernences to friendship relationships? foreign key?

  # validates :name, presence: true
  # validates :email, uniqueness: true, presence: true
  # validates :password, presence: true, on: :create
end
