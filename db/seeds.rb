# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# erin = User.create(first_name: 'Erin', last_name: 'Green', email: 'erin@gmail.com', password: 'test')
# warren = User.create(first_name: 'Warren', last_name: 'Green', email: 'warren@gmail.com', password: 'test')
# johnny = User.create(first_name: 'Johnny', last_name: 'Jopling', email: 'johnny@gmail.com', password: 'test')

# radiolab = Podcast.create(title: 'Radiolab')
# science = Genre.create(name: "Science")

# PodcastGenre.create(podcast_id: 1, genre_id: 1)

erin = User.first
erin.reviews.create(Review.create({content: 'Great science podcast!', podcast_id: 1}))
