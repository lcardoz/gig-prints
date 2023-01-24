puts "Seeding... 🌱"

Band.destroy_all
Designer.destroy_all
Poster.destroy_all

# BAND SEEDS:

phish = Band.create(
  name: "Phish",
  username: "phish1983",
  password: "Phish123!",
  instagram: "phish",
  website: "https://phish.com/",
  location: "Burlington, VT",
  image: "https://consequence.net/wp-content/uploads/2023/01/phish-2023-west-coast-tours.jpg?quality=80&w=1031&h=580&crop=1&resize=1031%2C580&strip",
  bio: "Phish is an American rock band formed in Burlington, Vermont, in 1983. The band is known for musical improvisation, extended jams, blending of genres, and a dedicated fan base.",
  on_tour: true,
  email: "phish@phish.com"
)

metallica = Band.create(
  name: "Metallica",
  username: "metallica1981",
  password: "Metallica123!",
  instagram: "metallica",
  website: "https://www.metallica.com/",
  location: "San Francisco, CA",
  image: "https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dwa8442759/images/homepage/home-hero-m72.jpg",
  bio: "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.",
  on_tour: true,
  email: "metallica@metallica.com"
)

ween = Band.create(
  name: "Ween",
  username: "weenband",
  password: "Ween123!",
  instagram: "weeninfo",
  website: "https://ween.com/",
  location: "New Hope, PA",
  image: "https://apeconcerts.com/wp-content/uploads/2016/05/Ween_1024-1024x576.jpg",
  bio: "Ween is an American rock band from New Hope, Pennsylvania, formed in 1984 by Aaron Freeman and Mickey Melchiondo, better known by their respective stage names, Gene and Dean Ween.",
  on_tour: true,
  email: "ween@ween.com"
)

primus = Band.create(
  name: "Primus",
  username: "primussucks",
  password: "Primus123!",
  instagram: "primusville",
  website: "http://primusville.com/",
  location: "Sebastopol, CA",
  image: "https://m.media-amazon.com/images/M/MV5BM2Q3ZmYxNWYtZjRmZi00MTMwLWFiYjktY2I1ZTRkNTJlZGZiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
  bio: "Primus is an American rock band formed in El Sobrante, California in 1984. The band is currently composed of bassist/vocalist Les Claypool, guitarist Ler LaLonde, and drummer Tim Herb Alexander.",
  on_tour: true,
  email: "primus@primus.com"
)

billy_strings = Band.create(
  name: "Billy Strings",
  username: "billystrings",
  password: "Billy123!",
  instagram: "billystrings",
  website: "https://www.billystrings.com/",
  location: "Nashville, TN",
  image: "https://relix.com/wp-content/uploads/2019/09/1563467689BillyStrings_EmilyButler_3.jpg",
  bio: "Billy Strings is known as an electric performer, keeping the improvisational tradition of bluegrass alive while incorporating elements of several diverse genres.",
  on_tour: true,
  email: "billystrings@billystrings.com"
)

stereolab = Band.create(
  name: "Stereolab",
  username: "stereolab",
  password: "Stereo123!",
  instagram: "stereolabgroop",
  website: "https://stereolab.co.uk/?lang=en_US",
  location: "London, UK",
  image: "https://factmag-images.s3.amazonaws.com/wp-content/uploads/2016/02/03021602/stereolab0216.jpg",
  bio: "Stereolab are an Anglo-French avant-pop band formed in London in 1990. Led by the songwriting team of Tim Gane and Lætitia Sadier, the group's music combines influences from krautrock, lounge and 1960s pop music, often incorporating a repetitive motorik beat with heavy use of vintage electronic keyboards and female vocals sung in English and French. Their lyrics have political and philosophical themes influenced by the Surrealist and Situationist movements. On stage, they play in a more feedback-driven and guitar-oriented style. The band also draw from funk, jazz and Brazilian music, and were one of the first artists to be dubbed post-rock. They are regarded among the most innovative and influential groups of the 1990s.",
  on_tour: true,
  email: "stereolab@stereolab.com"
)

pixies = Band.create(
  name: "Pixies",
  username: "pixies",
  password: "Pixies123!",
  instagram: "pixiesofficial",
  website: "https://www.pixiesmusic.com/",
  location: "Boston, MA",
  image: "https://images.squarespace-cdn.com/content/v1/5cd176efe5f7d1046af3b920/1654707026221-9L2OITU9PI39407JDTQ6/Pixies_16+RGB.jpg?format=2500w",
  bio: "Pixies is an American alternative rock band formed in 1986, in Boston, Massachusetts.",
  on_tour: true,
  email: "pixies@pixies.com"
)

erykah_badu = Band.create(
  name: "Erykah Badu",
  username: "erykahbadu",
  password: "Erykah123!",
  instagram: "erykahbadu",
  website: "https://baduworldmarket.com/",
  location: "Dallas, TX",
  image: "https://media.newyorker.com/photos/590975ff1c7a8e33fb38f63a/16:9/w_1280,c_limit/160425_r28041.jpg",
  bio: "",
  on_tour: true,
  email: "merch@erykahbadu.com"
)

patti_smith = Band.create(
  name: "Patti Smith",
  username: "pattismith",
  password: "Patti123!",
  instagram: "thisispattismith",
  website: "https://www.pattismith.net/intro.html",
  location: "New York, NY",
  image: "https://i.scdn.co/image/44012cfc4fedcbe92ac5e14178061fd3a872417f",
  bio: "Patti Smith is an American singer, songwriter, poet, painter, and author who became an influential component of the New York City punk rock movement with her 1975 debut album Horses. Called the punk poet laureate, Smith fused rock and poetry in her work.",
  on_tour: true,
  email: "pattismith@pattismith.com"
)

the_black_keys = Band.create(
  name: "The Black Keys",
  username: "theblackkeys",
  password: "Theb123!",
  instagram: "theblackkeys",
  website: "https://theblackkeys.com/?frontpage=true",
  location: "Akron, OH",
  image: "https://media.npr.org/assets/img/2014/05/07/the_black_keys-23224d1c385198efbccf3a1d98028858ca1fc774.jpg",
  bio: "The Black Keys are an American rock duo formed in Akron, Ohio, in 2001. The group consists of Dan Auerbach and Patrick Carney.",
  on_tour: true,
  email: "merch@theblackkeys.com"
)

childish_gambino = Band.create(
  name: "Childish Gambino",
  username: "childishgambino",
  password: "Childish123!",
  instagram: "",
  website: "https://awakenmylove.com/",
  location: "Los Angeles, CA",
  image: "https://i.scdn.co/image/ab6761610000e5eb3ef779aa0d271adb2b6a3ded",
  bio: "Donald McKinley Glover Jr., also known by his stage name Childish Gambino, is an American actor, comedian, singer, writer, director, and producer. After working in Derrick Comedy while studying at New York University, Glover was hired at age 23 by Tina Fey as a writer for the NBC sitcom 30 Rock.",
  on_tour: true,
  email: "merch@childishgambino.com"
)

the_flaming_lips = Band.create(
  name: "The Flaming Lips",
  username: "theflaminglips",
  password: "Lips123!",
  instagram: "waynecoyne5",
  website: "https://www.flaminglips.com/",
  location: "Los Angeles, CA",
  image: "https://i.scdn.co/image/ab6761610000e5ebbaf865cbf7ef15f97d6ef1fe",
  bio: "The Flaming Lips are an American psychedelic rock band formed in 1983 in Oklahoma City, Oklahoma. The band currently consists of Wayne Coyne, Steven Drozd, Derek Brown, Matt Duckworth Kirksey and Nicholas Ley.",
  on_tour: true,
  email: "merch@theflaminglips.com"
)


# DESIGNER SEEDS:

miles_tsang = Designer.create(
  name: "Miles Tsang",
  username: "milestsang",
  password: "Miles123!",
  instagram: "milestsang",
  website: "https://www.milestsang.com/",
  location: "Toronto, Canada",
  image: "https://trps.org/wp-content/uploads/2019/04/artist-miles-tsang.jpg",
  bio: "Freelance illustrator (+former screenprinter) specializing in the design-to-creation production of emotive poster art. Operating out of a small studio in downtown Toronto, Canada.",
  open_to_work: true,
  email: "milestsang@gmail.com"
)

sophy_hollington = Designer.create(
  name: "Sophy Hollington",
  username: "sophyhollington",
  password: "Sophy123!",
  instagram: "sophyhollington",
  website: "https://sophyhollington.com/",
  location: "Brighton, UK",
  image: "https://images.squarespace-cdn.com/content/v1/58fd2a4fe6f2e1ad3fd591c4/1606229601922-NTU2UASR6ZSDFOPHO8PI/web+me.jpg?format=750w",
  bio: "Sophy Hollington is an artist living in Brighton, UK. Not being one to cut corners, most of her work is created using the lengthy process of lino-cutting. Her personal work tackles themes from meteoric folklore to alchemical symbolism and she’s interested in wrangling the most arcane ideas to make them totally tangible. Past clients include The New York Times, The New Yorker, Celine, Hermes, A24, Wetransfer, WIRED, Nike, Apple, It's Nice That, The Wall Street Journal, Penguin, Faber & Faber, Beams, Little Brown and McSweeney’s Quarterly Concern. She is the creator of Autonomic Tarot, a collaboration with writer David Keenan, published by Rough Trade books in 2018.",
  open_to_work: true,
  email: "sophyhollington@gmail.com"
)

paul_kreizenbeck = Designer.create(
  name: "Paul Kreizenbeck",
  username: "paulkreizenbeck",
  password: "Paul123!",
  instagram: "pkreizenbeck",
  website: "http://paulkreizenbeck.com/",
  location: "Portland, OR",
  image: "https://i.pinimg.com/280x280_RS/21/8b/75/218b758e5debdde5dbc6f2afb609bf71.jpg",
  bio: "Paul is a graphic designer interested in illustration, printmaking, identity design, and packaging.",
  open_to_work: true,
  email: "paulkreizenbeck@gmail.com"
)

pedro_correa = Designer.create(
  name: "Pedro Correa",
  username: "pedrocorrea",
  password: "Pedro123!",
  instagram: "pedrocorrea84",
  website: "https://pedrocorrea.com/",
  location: "Florianopolis, Brazil",
  image: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1647359259/course-covers/000/001/576/1576-original.jpg?1647359259",
  bio: "MY NAME IS PEDRO CORREA, I GRADUATED IN GRAPHIC DESIGN AND I WORK AS A FREELANCE ILLUSTRATOR IN FLORIANÓPOLIS, SC, BRAZIL. MY STYLE OF ILLUSTRATION IS BASED ON INK (WHETHER ANALOG OR DIGITAL) AND THE USE OF COLORS AND TEXTURES WITH A RETRO AESTHETIC, INHERITED FROM MY PASSION FOR COMIC BOOKS. MY MAIN CLIENTS ARE IN THE ENTERTAINMENT FIELD, SUCH AS ADVERTISING AND TELEVISION, AS WELL AS WORKING ON CREATING POSTERS AND ALBUM COVERS. IN MY CAREER I HAVE HAD THE OPPORTUNITY TO DO PROJECTS FOR SHOWTIME, FX, HEINEKEN, TIGER BEER, NETFLIX, FORD MOTORS, SKY TV, PIZZA HUT, UFC, MOLESKINE, UNIBALL, SECTOR9, LANDYACHTZ, ROLLING STONE, HIGH TIMES MAGAZINE, AND THE INTERCEPT",
  open_to_work: true,
  email: "pedrocorrea@gmail.com"
)

ken_taylor = Designer.create(
  name: "Ken Taylor",
  username: "kentaylorart",
  password: "Taylor123!",
  instagram: "kentaylorart",
  website: "https://kentaylor.com.au/wp/",
  location: "Melbourne, Australia",
  image: "https://posterdrops-images.s3.amazonaws.com/uploads/artist/middle/118.jpg",
  bio: "Known for creating bold heavily detailed illustration & design work, Melbourne based Ken Taylor has been a leading name in the world of concert posters and pop culture artwork for many years. Ken has been fortunate enough to work for many exciting clients in the world of entertainment and pop culture, some of these include: Mondo, Lionsgate, Sony, Activision, Apple, NASA, Nike, Under Armour, Sierra Nevada, AMC, HBO, Tripleclx, Metallica, Pearl Jam, The Pixies, Phish, The National, Queens of The Stone Age, The Avett Brothers, Jack White, Dave Matthews Band, Bob Dylan & The Rolling Stones.",
  open_to_work: true,
  email: "kentaylor@gmail.com"
)

lil_tuffy = Designer.create(
  name: "Lil Tuffy",
  username: "liltuffy",
  password: "Lilt123!",
  instagram: "lil_tuffy",
  website: "https://www.lil-tuffy.com/",
  location: "San Francisco, CA",
  image: "https://n9i5g5z6.stackpathcdn.com/wp-content/pictsnShit/2020/05/Ausform_Tuffy_simmonstobias-2.jpg",
  bio: "Lil Tuffy is an American artist and designer in the field of modern rock/pop poster art, also known as 'gigposter' art, as well as serigraph and fine art production. Tuffy began his career in San Francisco at the Firehouse with Chuck Sperry and Ron Donovan. As a member of the 2000s resurgence of the poster-art scene he has designed posters for a wide variety of musical acts, including Devo, Slayer, Pavement, Queens of the Stone Age, Faith No More, The White Stripes, The Black Keys, Morrissey and many others. His work has been exhibited in the USA, Canada, Mexico, Spain, Portugal, Germany, France, Belgium, the Netherlands, Serbia, and the UK and he regularly appears at music festivals including South by Southwest, Bonnaroo Music Festival, Noise Pop, Primavera Sound, Outside Lands Music and Arts Festival, Reeperbahn Festival and more.",
  open_to_work: true,
  email: "liltuffy@gmail.com"
)

emek = Designer.create(
  name: "Emek",
  username: "emek",
  password: "Emek123!",
  instagram: "emek_studios",
  website: "https://www.emek.net/",
  location: "Fairview, OR",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Emek_with_his_%22High_On_Fire%22_Gig_Poster_in_2006.jpg",
  bio: "Emek is a designer, illustrator and fine art painter. He was called -The Thinking Mans Poster Artist- by punk-rock singer Henry Rollins while working on the album cover for A Rollins in the Wry.",
  open_to_work: true,
  email: "emekstudios@gmail.com"
)

helen_kennedy = Designer.create(
  name: "Helen Kennedy",
  username: "helenkennedy",
  password: "Helen123!",
  instagram: "zazzcorp",
  website: "https://www.zazzcorp.com/",
  location: "Newington, CT",
  image: "https://cdn.shopify.com/s/files/1/0051/4490/3751/files/Screen_Shot_2020-01-11_at_10.52.51_AM_480x480.png?v=1579104253",
  bio: "Helen Kennedy aka ZazzCorp an artist/illustrator with an obsession for drawing skulls. The Zazz Corp motto -Design for Weirdos- embodies the strange, far out, and weird.",
  open_to_work: true,
  email: "zazzcorp@gmail.com"
)

dave_kloc = Designer.create(
  name: "Dave Kloc",
  username: "davekloc",
  password: "Dave123!",
  instagram: "davekloc",
  website: "https://www.davekloc.com/",
  location: "Los Angeles, CA",
  image: "https://i.discogs.com/djDkxxwta4YeuBUBDgXqRhewjqpruRz9w9FhhFoQj8M/rs:fit/g:sm/q:90/h:250/w:346/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM1NTIw/NDUtMTQyMzIzMjc0/My04NjY4LmpwZWc.jpeg",
  bio: "Hi - I'm Dave Kloc. I illustrate posters for bands, comedians TV shows and sometimes hockey teams. This is my website for all of my work. I like making it and I hope you enjoy looking at it. Lets keep this ball rollin eh?",
  open_to_work: true,
  email: "davekloc@gmail.com"
)


# POSTER SEEDS:

Poster.create(
  band_id: phish.id,
  designer_id: miles_tsang.id,
  image: "https://images.squarespace-cdn.com/content/v1/5532bf6fe4b0c604b973cf8c/1656732431913-MRD4F5JHX91K1X9DB0AQ/PHISH-Miles_Tsang-Toronto-2022-alt-Web.png?format=750w",
  date: "August 10, 2022",
  venue: "Budweiser Stage",
  location: "Toronto, Canada",
  edition: 1100,
  status: "complete",
  duedate: "07/10/2022",
  budget: "$27,500",
  dimensions: "18x24"
)

Poster.create(
  band_id: metallica.id,
  designer_id: miles_tsang.id,
  image: "https://images.squarespace-cdn.com/content/5532bf6fe4b0c604b973cf8c/1653618901283-LCND7IWO4QP8YPLA3KCZ/Metallica-Werchter_2022-Final-Web.png?content-type=image%2Fpng",
  date: "July 1, 2022",
  venue: "Rock Werchter Festival",
  location: "Werchter, Belgium",
  edition: 70,
  status: "complete",
  duedate: "06/01/2022",
  budget: "$5,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: primus.id,
  designer_id: miles_tsang.id,
  image: "https://images.squarespace-cdn.com/content/v1/5532bf6fe4b0c604b973cf8c/1631293553767-LXC1OM9AVMD14B25T5IU/Primus-Tribute_To_Kings-Reg.png?format=750w",
  date: "October 13, 2021",
  venue: "Complex Live",
  location: "Salt Lake City, UT",
  edition: 150,
  status: "complete",
  duedate: "09/13/2021",
  budget: "$6,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: phish.id,
  designer_id: sophy_hollington.id,
  image: "https://images.squarespace-cdn.com/content/v1/58fd2a4fe6f2e1ad3fd591c4/1630941837881-09LRG1H5R0JI20B1OWHF/phish+shop.jpg?format=1000w",
  date: "August 3-4, 2021",
  venue: "Ascend Amphitheater",
  location: "Nashville, TN",
  edition: 800,
  status: "complete",
  duedate: "07/03/2021",
  budget: "$20,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: stereolab.id,
  designer_id: sophy_hollington.id,
  image: "https://images.squarespace-cdn.com/content/v1/58fd2a4fe6f2e1ad3fd591c4/1667323039819-ZW4LLK54HD8II7ZO3Y8P/stereo+shop.jpg?format=1000w",
  date: "September 9, 2022",
  venue: "ACL Live",
  location: "Austin, TX",
  edition: 150,
  status: "complete",
  duedate: "08/09/2022",
  budget: "$5,000",
  dimensions: "16x24"
)

Poster.create(
  band_id: ween.id,
  designer_id: pedro_correa.id,
  image: "https://cdn.myportfolio.com/737a4c37a32689ef666204966782f7ee/5ca35e96-43f5-44d9-aa27-424f796f0839_rw_1920.jpg?h=0e98c6f9d1413e494a6ae491e545bf1d",
  date: "June 10, 2022",
  venue: "Borgata",
  location: "Atlantic City, NJ",
  edition: 275,
  status: "complete",
  duedate: "05/10/2022",
  budget: "$7,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: phish.id,
  designer_id: pedro_correa.id,
  image: "https://cdn.myportfolio.com/737a4c37a32689ef666204966782f7ee/8be9cc3b-01b7-4c00-8513-bba010408daa_rw_1920.jpg?h=117312952cd2d1cdf0bf0366fc5bbff0",
  date: "December 28-31, 2019",
  venue: "Madison Square Garden",
  location: "New York, NY",
  edition: 1000,
  status: "complete",
  duedate: "11/28/2019",
  budget: "$25,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: billy_strings.id,
  designer_id: paul_kreizenbeck.id,
  image: "http://paulkreizenbeck.com/wp-content/uploads/2022/03/Billy-Strings-Final.jpg",
  date: "September 17, 2021",
  venue: "Edgefield Amphitheater",
  location: "Troutdale, OR",
  edition: 300,
  status: "complete",
  duedate: "08/17/2021",
  budget: "$7,500",
  dimensions: "18x24"
)

Poster.create(
  band_id: ween.id,
  designer_id: paul_kreizenbeck.id,
  image: "https://assets.bigcartel.com/product_images/338851914/ween+bigcartel.png?auto=format&fit=max&h=1200&w=1200",
  date: "June 20, 2022",
  venue: "Outlaw Field",
  location: "Boise, ID",
  edition: 300,
  status: "complete",
  duedate: "05/20/2022",
  budget: "$7,500",
  dimensions: "18x24"
)

Poster.create(
  band_id: metallica.id,
  designer_id: ken_taylor.id,
  image: "https://pbs.twimg.com/media/FVuoVrJVIAET15S?format=jpg&name=4096x4096",
  date: "July 6, 2022",
  venue: "Mad Cool Festival",
  location: "Madrid, Spain",
  edition: 500,
  status: "complete",
  duedate: "06/06/2022",
  budget: "$15,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: pixies.id,
  designer_id: ken_taylor.id,
  image: "https://cdn.shopify.com/s/files/1/0027/2632/products/IMG_0362_977c9beb-93cc-4ab3-8fda-2407942d7c61_1024x1024.jpg?v=1650394825",
  date: "March 15-17, 2022",
  venue: "Multiple Venues",
  location: "Arizona & California Tour",
  edition: 1000,
  status: "complete",
  duedate: "02/15/2022",
  budget: "$25,000",
  dimensions: "24x18"
)

Poster.create(
  band_id: phish.id,
  date: "April 17-19, 2023",
  venue: "The Greek Theatre",
  location: "Berkeley, CA",
  edition: 1000,
  status: "unassigned",
  duedate: "03/17/2023",
  budget: "$25,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: phish.id,
  date: "April 21-23, 2023",
  venue: "Hollywood Bowl",
  location: "Los Angeles, CA",
  edition: 1200,
  status: "unassigned",
  duedate: "03/21/2023",
  budget: "$30,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: erykah_badu.id,
  designer_id: emek.id,
  image: "https://www.emek.net/rock/b/600/emek_badu_australia_2011.jpg",
  date: "February 08-22, 2011",
  venue: "Multiple Venues",
  location: "Australia",
  edition: 500,
  status: "complete",
  duedate: "01/08/2011",
  budget: "$10,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: patti_smith.id,
  designer_id: emek.id,
  image: "https://www.emek.net/rock/s/600/patti_smith_horseBarbWire_emek.jpg",
  date: "August 6, 2018",
  venue: "Paradiso",
  location: "Amsterdam, Netherlands",
  edition: 150,
  status: "complete",
  duedate: "07/06/2018",
  budget: "$7,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: the_black_keys.id,
  designer_id: helen_kennedy.id,
  image: "https://posterdrops-images.s3.amazonaws.com/art_images/298067863_5353491208074859_1763640267784125751_n_1660152896.jpg",
  date: "July 20, 2022",
  venue: "Saratoga Performing Arts Center",
  location: "Saratoga, NY",
  edition: 50,
  status: "complete",
  duedate: "06/20/2022",
  budget: "$5,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: childish_gambino.id,
  designer_id: dave_kloc.id,
  image: "https://images.squarespace-cdn.com/content/v1/5b1dc302e17ba33fa4d22f2c/1545074080778-KW789POAAMPH4PYLQZ7F/FinalJPG.jpg?format=2500w",
  date: "December 17, 2018",
  venue: "The Forum",
  location: "Los Angeles, CA",
  edition: 500,
  status: "complete",
  duedate: "11/17/2018",
  budget: "$10,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: the_flaming_lips.id,
  designer_id: lil_tuffy.id,
  image: "https://assets.bigcartel.com/product_images/348696622/flamingLips.jpg?auto=format&fit=max&h=1000&w=1000",
  date: "November 18-19, 2022",
  venue: "The Warfield Theatre",
  location: "San Francisco, CA",
  edition: 200,
  status: "complete",
  duedate: "10/18/2022",
  budget: "$10,000",
  dimensions: "18x24"
)

# Poster.create(
#   band_id: ,
#   designer_id: ,
#   image: "",
#   date: "",
#   venue: "",
#   location: "",
#   edition: ,
#   status: "",
#   duedate: "",
#   budget: "",
#   dimensions: ""
# )

# Poster.create(
#   band_id: ,
#   designer_id: ,
#   image: "",
#   date: "",
#   venue: "",
#   location: "",
#   edition: ,
#   status: "",
#   duedate: "",
#   budget: "",
#   dimensions: ""
# )


puts "Done seeding! ✅"