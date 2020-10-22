# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Book.destroy_all
User.destroy_all

@user = User.create!([
  {username: "guest2", email: "guest1@email.com", password: "password" },
  {username: "guest4", email: "guest4@email.com", password: "password" },
  {username: "guest6", email: "guest6@email.com", password: "password" },
  {username: "guest7", email: "guest7@email.com", password: "password" },
  {username: "guest8", email: "guest8@email.com", password: "password" },
  {username: "guest3", email: "guest3@email.com", password: "password" },
  {username: "guest5", email: "guest5@email.com", password: "password" },
  {username: "guest1", email: "guest1@email.com", password: "password" }
])
puts "#{User.count} users created"

@book = Book.create!([
  {title: "Snow Crash", author: "Neal Stephenson", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/snow-crash_swtiiu.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore'},
  {title: "The Road", author: "Cormac McCarthy", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/the-road_abo3mp.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore'},
  {title: "Out", author: "Natsuo Kirino", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/out_va0qua.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "I Am Legend", author: "Richard Matheson", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/i-am-legend_ggcvbm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Oryx and Crake", author: "Margaret Atwood", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/oryx-crake_hvbrcg.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Flatland", author: "Edwin A. Abbot", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/flatland_yl95zx.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Gunslinger", author: "Stephen King", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/gunslinger_vrz1tz.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "House of Leaves", author: "Mark Z. Danielewski", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/house-of-leaves_ywmz2t.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Singularity is Near: When Humans Transcend Biology", author: "Ray Kurzweil", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/singularity-is-near_klp56x.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Language Instinct: How the Mind Creates Language", author: "Steven Pinker", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/language-instinct_gcsnar.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Things They Carried", author: "Tim O'Brien", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/things-they-carried_kumxze.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Waste Lands", author: "Stephen King", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/the-waste-lands_rojoxw.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Hobbit", author: "J.R.R. Tolkien", img_url: "https://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/hobbit_oae6eg.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "The Pillars of the Earth", author: "Ken Follett", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140376/pillars-earth_zdlzqm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything", author: "Steven D. Levitt, Stephen J. Dubner", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140373/freakonomics_jrtpy5.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Bossypants", author: "Tina Fey", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140373/9476337_ytc5qi.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Stiff: The Curious Lives of Human Cadavers", author: "Mary Roach", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/stiff_u2tkuu.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Lost Horizon", author: "James Hilton", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/lost-horizon_kvowc2.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "2666", author: " Roberto Bolaño", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140373/2666_etylvd.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "In Cold Blood", author: "Truman Capote", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/in-cold-blood_ldhwya.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Spin", author: "Robert Charles Wilson", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140377/spin_iqqklm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "We Have Always Lived in the Castle", author: "Shirley Jackson", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/always-lived-in-castle_pdldkm.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Dune", author: "Frank Herbert", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140374/dune_xmkeal.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Joan of Arc", author: "Helen Castor", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506140375/joan-of-arc_ozpjzn.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "Twilight", author: "Stephenie Meyer", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641252/twilight_alxawy.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "New Moon", author: "Stephenie Meyer", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641252/new-moon_qjjbeq.jpg", page: 12, content: "A tad creepier than I anticipated?", location: "Powell Bookstore"},
  {title: "City of Bones", author: "Cassandra Clare", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641259/city-of-bones_mwjbhw.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore'},
  {title: "Never Cry Werewolf", author: "Heather Davis", img_url: "http://res.cloudinary.com/dve2z73dr/image/upload/v1506641259/never-cry-werewolf_xv6qcg.jpg", page: 12, content: 'A tad creepier than I anticipated?', location: 'Powell Bookstore'}
])
puts "#{Book.count} books in your shelf"

@comment = Comment.create!([
  {content: "Not my cup of tea.", user_id: "5" },
  {content: "Thought it was entertaining.", user_id: "1" }
])
puts "#{Comment.count} comments created"
