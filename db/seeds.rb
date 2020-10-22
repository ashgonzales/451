# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars') { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Book.destroy_all
User.destroy_all

@user2 = User.create!(username: "guest2", email: "guest2@email.com", password: "password")
@user4 = User.create!(username: "guest4", email: "guest4@email.com", password: "password")
@user6 = User.create!(username: "guest6", email: "guest6@email.com", password: "password")
@user7 = User.create!(username: "guest7", email: "guest7@email.com", password: "password")
@user8 = User.create!(username: "guest8", email: "guest8@email.com", password: "password")
@user3 = User.create!(username: "guest3", email: "guest3@email.com", password: "password")
@user5 = User.create!(username: "guest5", email: "guest5@email.com", password: "password")
@user1 = User.create!(username: "guest1", email: "guest1@email.com", password: "password")
puts "#{User.count} users created"

@book1 = Book.create!(title: "Snow Crash", author: "Neal Stephenson", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/snow-crash_swtiiu.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore', user: @user1)
@book1 = Book.create!(title: "The Road", author: "Cormac McCarthy", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/the-road_abo3mp.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore', user: @user1)
@book2 = Book.create!(title: "Out", author: "Natsuo Kirino", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/out_va0qua.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book3 = Book.create!(title: "I Am Legend", author: "Richard Matheson", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/i-am-legend_ggcvbm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book4 = Book.create!(title: "Oryx and Crake", author: "Margaret Atwood", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/oryx-crake_hvbrcg.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book5 = Book.create!(title: "Flatland", author: "Edwin A. Abbot", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/flatland_yl95zx.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book6 = Book.create!(title: "The Gunslinger", author: "Stephen King", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/gunslinger_vrz1tz.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book7 = Book.create!(title: "House of Leaves", author: "Mark Z. Danielewski", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/house-of-leaves_ywmz2t.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book8 = Book.create!(title: "The Singularity is Near: When Humans Transcend Biology", author: "Ray Kurzweil", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/singularity-is-near_klp56x.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book9 = Book.create!(title: "The Language Instinct: How the Mind Creates Language", author: "Steven Pinker", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/language-instinct_gcsnar.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book10 = Book.create!(title: "The Things They Carried", author: "Tim O'Brien", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/things-they-carried_kumxze.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book11 = Book.create!(title: "The Waste Lands", author: "Stephen King", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/the-waste-lands_rojoxw.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book12 = Book.create!(title: "The Hobbit", author: "J.R.R. Tolkien", img: "https://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/hobbit_oae6eg.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book13 = Book.create!(title: "The Pillars of the Earth", author: "Ken Follett", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/pillars-earth_zdlzqm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book14 = Book.create!(title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything", author: "Steven D. Levitt, Stephen J. Dubner", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140373/freakonomics_jrtpy5.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book15 = Book.create!(title: "Bossypants", author: "Tina Fey", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140373/9476337_ytc5qi.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book16 = Book.create!(title: "Stiff: The Curious Lives of Human Cadavers", author: "Mary Roach", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/stiff_u2tkuu.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book17 = Book.create!(title: "Lost Horizon", author: "James Hilton", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/lost-horizon_kvowc2.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book18 = Book.create!(title: "2666", author: " Roberto Bolaño", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140373/2666_etylvd.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book19 = Book.create!(title: "In Cold Blood", author: "Truman Capote", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/in-cold-blood_ldhwya.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book20 = Book.create!(title: "Spin", author: "Robert Charles Wilson", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/spin_iqqklm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book21 = Book.create!(title: "We Have Always Lived in the Castle", author: "Shirley Jackson", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/always-lived-in-castle_pdldkm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book22 = Book.create!(title: "Dune", author: "Frank Herbert", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/dune_xmkeal.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book23 = Book.create!(title: "Joan of Arc", author: "Helen Castor", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/joan-of-arc_ozpjzn.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book24 = Book.create!(title: "Stardust", author: "Neil Gaiman", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641252/twilight_alxawy.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book25 = Book.create!(title: "American Gods", author: "Neil Gaiman", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641252/new-moon_qjjbeq.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore", user: @user1),
@book26 = Book.create!(title: "City of Bones", author: "Cassandra Clare", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641259/city-of-bones_mwjbhw.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore', user: @user1),
@book27 = Book.create!(title: "Never Cry Werewolf", author: "Heather Davis", img: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641259/never-cry-werewolf_xv6qcg.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore', user: @user1)

puts "#{Book.count} books in your shelf"


@comment = Comment.create!(user_id: 1, book_id: 1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum commodo eros eget accumsan. Aenean mauris neque, aliquet elementum quam eget, aliquet placerat mauris. Pellentesque fermentum, nisl at placerat vulputate, nunc diam mattis velit, eget pulvinar odio magna in enim. Vestibulum convallis tristique neque at rutrum. Phasellus ultrices mattis feugiat. Aenean elementum lectus non sapien commodo interdum.")
@comment = Comment.create!(user_id: 1, book_id: 2, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum commodo eros eget accumsan. ")
@comment = Comment.create!(user_id: 1, book_id: 3,content: "Lorem ipsum dolor sit amet, consectetur ")
@comment = Comment.create!(user_id: 1, book_id: 4,content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum commodo eros eget accumsan. Aenean mauris neque, aliquet elementum quam eget, aliquet placerat mauris. Pellentesque fermentum, nisl at placerat vulputate, nunc diam mattis velit, eget pulvinar odio magna in enim. Vestibulum convallis tristique neque at rutrum. Phasellus ultrices mattis feugiat. Aenean elementum lectus non sapien commodo interdum.")
@comment = Comment.create!(user_id: 1, book_id: 5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum commodo eros eget accumsan. Aenean mauris neque, aliquet elementum quam eget.")
@comment = Comment.create!(user_id: 1, book_id: 6, content: "Donec tempor laoreet maximus. Phasellus posuere purus et finibus consectetur. Sed aliquet, mi id sollicitudin elementum, eros tellus sollicitudin ante, sit amet volutpat velit dui vitae magna. Nam elementum velit nibh, vel gravida nulla vulputate eget. ")
@comment = Comment.create!(user_id: 1, book_id: @book27,content: "wish the internet was like this")
@comment = Comment.create!(user_id: 1, book_id: @book27,content: "Donec tempor laoreet maximus. Phasellus posuere purus et finibus consectetur. Sed aliquet, mi id sollicitudin elementum, eros tellus sollicitudin ante, sit amet volutpat velit dui vitae magna. Nam elementum velit nibh, vel gravida nulla vulputate eget. Donec lobortis justo quis ipsum cursus, in fermentum justo viverra. Pellentesque lacus massa, elementum a felis at, pellentesque volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur ultricies neque, sagittis congue erat finibus varius. Maecenas viverra varius orci, ac eleifend mi dapibus eu. In hac habitasse platea dictumst. Duis felis libero, consequat sit amet blandit vel, consectetur maximus metus.")
@comment = Comment.create!(user_id: 1, book_id: @book27,content: "Donec tempor laoreet maximus. Phasellus posuere purus et finibus consectetur. Sed aliquet, mi id sollicitudin elementum, eros tellus sollicitudin ante, sit amet volutpat velit dui vitae magna. Nam elementum velit nibh, vel gravida nulla vulputate eget. Donec lobortis justo quis ipsum cursus, in fermentum justo viverra. ")
@comment = Comment.create!(user_id: 3, book_id: @book27,content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum commodo eros eget accumsan. Aenean mauris neque, aliquet elementum quam eget, aliquet placerat mauris. Pellentesque fermentum, nisl at placerat vulputate, nunc diam mattis velit, eget pulvinar odio magna in enim. Vestibulum convallis tristique neque at rutrum. Phasellus ultrices mattis feugiat. Aenean elementum lectus non sapien commodo interdum. Quisque eu lectus nibh. Morbi id consectetur tortor.\n\nSed vitae metus nisl. In luctus volutpat turpis id ultrices. Vestibulum sed volutpat dolor. Nulla bibendum nisi a elit porttitor mollis. Aliquam sodales commodo mi, at finibus ante. Maecenas feugiat elit commodo metus accumsan hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.")
@comment = Comment.create!(user_id: 3, book_id: @book27,content: "vampires didn't even sparkle!")
@comment = Comment.create!(user_id: 3, book_id: @book27,content: "Sed vitae metus nisl. In luctus volutpat turpis id ultrices. Vestibulum sed volutpat dolor. Nulla bibendum nisi a elit porttitor mollis. Aliquam sodales commodo mi, at finibus ante. Maecenas feugiat elit commodo metus accumsan hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.")
@comment = Comment.create!(user_id: 5, book_id: @book27,content: "Sed vitae metus nisl. In luctus volutpat turpis id ultrices. Vestibulum sed volutpat dolor. Nulla bibendum nisi a elit porttitor mollis. Aliquam sodales commodo mi, at finibus ante. Maecenas feugiat elit commodo metus accumsan hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae metus nisl. In luctus volutpat turpis id ultrices. Vestibulum sed volutpat dolor. Nulla bibendum nisi a elit porttitor mollis. Aliquam sodales commodo mi, at finibus ante. Maecenas feugiat elit commodo metus accumsan hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.")
@comment = Comment.create!(user_id: 5, book_id: @book27,content: "lots of drama in this book.")
@comment = Comment.create!(user_id: 5, book_id: @book27,content: "Phasellus quis purus fermentum, rutrum lacus et, blandit neque. Praesent non mattis ante, vel porta lectus.")
puts "#{Comment.count} comments created"

Book.all.each do |post|
  puts "Book:            " + book.title
  puts "Author:      " + book.author
  puts "Last comment on: " + post.comments.first.created_on
end
