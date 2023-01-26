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
  on_tour: false,
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
  on_tour: false,
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
  on_tour: false,
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
  on_tour: false,
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

sleep = Band.create(
  name: "Sleep",
  username: "sleep",
  password: "Sleep123!",
  instagram: "sleeptheband",
  website: "https://www.weedian.com/",
  location: "San Jose, CA",
  image: "https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2021/04/sleep-iommic-life.jpeg?fit=2048%2C1024&ssl=1",
  bio: "Even during their near two-decade studio absence, SLEEP's influence loomed large over metal and stoner rock. Formed in 1990 in San Jose, CA, the power trio found immediate acclaim after the release of their debut album Volume One in 1991, and the accolades never ceased.",
  on_tour: false,
  email: "weed@sleep.com"
)

dead_and_co = Band.create(
  name: "Dead & Company",
  username: "deadandco",
  password: "Dead123!",
  instagram: "deadandcompany",
  website: "https://deadandcompany.com/",
  location: "San Francisco, CA",
  image: "https://www.billboard.com/wp-content/uploads/media/dead-and-company-2017-cr-danny-clinch-billboard-1548.jpg?w=942&h=623&crop=1",
  bio: "Dead & Company is: Mickey Hart - Drums / Percussion, Bill Kreutzmann - Drums / Percussion, John Mayer - Guitar / Vocals, Bob Weir - Guitar / Vocals, Oteil Burbridge - Bass, Jeff Chimenti - Keys",
  on_tour: true,
  email: "merch@deadandcompany.com"
)

king_gizzard = Band.create(
  name: "King Gizzard & The Lizard Wizard",
  username: "kinggizzard",
  password: "King123!",
  instagram: "kinggizzard",
  website: "https://kinggizzardandthelizardwizard.com/",
  location: "Melbourne, Australia",
  image: "https://i.guim.co.uk/img/media/db22c0cfda08cc9873252c128d50304e1ea3abed/0_88_3000_1800/master/3000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=fccdc0a08c382ae0150135384b1dad2a",
  bio: "King Gizzard & the Lizard Wizard are an Australian rock band formed in 2010 in Melbourne, Victoria. The band's current lineup consists of Stu Mackenzie, Ambrose Kenny-Smith, Cook Craig, Joey Walker, Lucas Harwood and Michael Cavanagh.",
  on_tour: true,
  email: "merch@kinggizzard.com"
)

kendrick_lamar = Band.create(
  name: "Kendrick Lamar",
  username: "kendricklamar",
  password: "Kendrick123!",
  instagram: "kendricklamar",
  website: "https://oklama.com/",
  location: "Los Angeles, CA",
  image: "https://arc-anglerfish-washpost-prod-washpost.s3.us-east-1.amazonaws.com/public/AKTWGWAU6YI63BECA3A4QTHI6I_size-normalized.jpg",
  bio: "Indisputably the most acclaimed rap artist of his generation, Kendrick Lamar is one of those rare MCs who has achieved critical and commercial success while earning the respect and support of those who inspired him. After several years of development, Lamar hit his creative and chart-topping stride in the 2010s. Good Kid, M.A.A.D City (2012), the Grammy-winning To Pimp a Butterfly (2015), the Grammy- and Pulitzer Prize-winning DAMN. (2017), and Mr. Morale & The Big Steppers (2022), his four proper major-label albums, have displayed an unmatched mix of inventive wordplay and compelling conceptual narratives, examining internal conflict, flaunting success, and uplifting his community.",
  on_tour: true,
  email: "merch@oklama.com"
)

the_who = Band.create(
  name: "The Who",
  username: "thewho",
  password: "Thewho123!",
  instagram: "officialthewho",
  website: "https://thewho.com/",
  location: "London, UK",
  image: "https://i.scdn.co/image/e70c8cbc5eb682b35da8dbc90c5c3631f4df9e23",
  bio: "The Who are an English rock band formed in London in 1964. Their core lineup consisted of lead vocalist Roger Daltrey, guitarist Pete Townshend, bassist John Entwistle and drummer Keith Moon.",
  on_tour: true,
  email: "merch@thewho.com"
)

khruangbin = Band.create(
  name: "Khruangbin",
  username: "khruangbin",
  password: "Khru123!",
  instagram: "khruangbin",
  website: "https://www.khruangbin.com/",
  location: "Houston, TX",
  image: "https://img.texasmonthly.com/2020/02/Khruangbin-LeonBridges-Texas-Sun.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=1400&ixlib=php-3.3.1&q=45&w=1400",
  bio: "Khruangbin is an American musical trio from Houston, Texas. The band comprises Laura Lee on bass, Mark Speer on guitar, and Donald 'DJ' Johnson Jr. on drums. The band is known for blending global music influences, such as classic soul, dub, rock and psychedelia.",
  on_tour: false,
  email: "merch@khruangbin.com"
)

foo_fighters = Band.create(
  name: "Foo Fighters",
  username: "foofighters",
  password: "Foof123!",
  instagram: "foofighters",
  website: "https://foofighters.com/",
  location: "Seattle, WA",
  image: "https://i.scdn.co/image/ab6761610000e5eb9a43b87b50cd3d03544bb3e5",
  bio: "Melding heavy rock guitars, driving punk sensibilities, and pretty melodies, Foo Fighters rose to become one of the biggest acts to emerge out of the alt-rock boom of the 1990s. Led by singer Dave Grohl, the former powerhouse drummer for Nirvana, Foo Fighters initially debuted as a solo project in 1995.",
  on_tour: true,
  email: "merch@foofighters.com"
)

skrillex = Band.create(
  name: "Skrillex",
  username: "skrillex",
  password: "Skrill123!",
  instagram: "skrillex",
  website: "https://www.skrillex.com/",
  location: "Los Angeles, CA",
  image: "https://yt3.googleusercontent.com/NgDCsOjvd9c0Z0zWObIHeFLiyyxWvUq2jQn-aWPu45VOMOWNGDsyA4_a7HYLvUs3QSpK_rIEvvc=s900-c-k-c0x00ffffff-no-rj",
  bio: "Sonny Moore found club and mainstream stardom in 2008, when he swapped his gig as the frontman in post-hardcore band From First to Last for the dancefloor-oriented project Skrillex. He originally used the name for live DJ sets, but at the beginning of the 2010s he moved the project into the studio where he remixed prominent acts like Lady Gaga and Bruno Mars. Over the next decade, Skrillex became a high-profile artist himself with a string of Grammy Awards for EPs like Scary Monsters and Bangarang as well as the full-length Jack Ü, a collaborative project with fellow DJ/producer Diplo.",
  on_tour: true,
  email: "merch@skrillex.com"
)

deadmau5 = Band.create(
  name: "Deadmau5",
  username: "deadmau5",
  password: "Dead123!",
  instagram: "deadmau5",
  website: "https://deadmau5.com/",
  location: "Niagara Falls, Canada",
  image: "https://www.billboard.com/wp-content/uploads/2022/06/deadmau5-cr-Leah-Sems-press-2022-billboard-1548.jpg?w=1024",
  bio: "Born in Ontario, Canada a young Joel, who already showed a knack for electronics, began work in Animation and Web Design before eventually shifting to working on music, first experimenting with Chiptune sounds. He took on the moniker Deadmau5 after he found the body of a frozen rodent in a computer he had built.",
  on_tour: true,
  email: "merch@deadmau5.com"
)

eden = Band.create(
  name: "EDEN",
  username: "eden",
  password: "Eden123!",
  instagram: "iameden",
  website: "https://iameden.eu/",
  location: "Dublin, Ireland",
  image: "https://heremag-prod-app-deps-s3heremagassets-bfie27mzpk03.s3.amazonaws.com/wp-content/uploads/2019/12/18133056/EDEN_PRESS_31-DREW-ESCRIVA-1200x800.jpg",
  bio: "What started as the dance-oriented Eden Project morphed into something different for Irish singer/songwriter Jonathon Ng, who shifted into more song-based indie electronic territory under the name EDEN during the latter half of the 2010s. With his 2018 album Vertigo, he earned acclaim and a notable amount of chart success on both sides of the Atlantic. Likewise, his next LP, 2020's No Future, hit number 26 on the Billboard 200. EDEN returned in 2022 with ICYMI, a pensive album wrought with themes of loss and ephemerality.",
  on_tour: true,
  email: "edenireland@gmail.com"
)

the_rolling_stones = Band.create(
  name: "The Rolling Stones",
  username: "therollingstones",
  password: "Stones123!",
  instagram: "therollingstones",
  website: "https://rollingstones.com/",
  location: "London, UK",
  image: "https://i.scdn.co/image/ab6761610000e5ebd3cb15a8570cce5a63af63d8",
  bio: "The Rolling Stones are an English rock band formed in London in 1962. Active for six decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the Rolling Stones pioneered the gritty, rhythmically driven sound that came to define hard rock.",
  on_tour: false,
  email: "merch@therollingstones.com"
)

sigur_ros = Band.create(
  name: "Sigur Rós",
  username: "sigurros",
  password: "Sigur123!",
  instagram: "sigurros",
  website: "https://sigurros.com/",
  location: "Reykjavík, Iceland",
  image: "https://media.pitchfork.com/photos/633dcba518fa9c97ca35ca58/4:3/w_2016,h_1512,c_limit/Sigur-Ros.jpg",
  bio: "Sigur Rós is an Icelandic post-rock band from Reykjavík, active since 1994. The band comprises singer and guitarist Jón Þór 'Jónsi' Birgisson, bassist Georg Hólm, and keyboardist Kjartan Sveinsson.",
  on_tour: true,
  email: "merch@sigurros.com"
)

alabama_shakes = Band.create(
  name: "Alabama Shakes",
  username: "alabamashakes",
  password: "Shakes123!",
  instagram: "alabama_shakes",
  website: "https://www.alabamashakes.com/",
  location: "Athens, AL",
  image: "https://cdn.britannica.com/29/185429-050-DBE65C2B/Alabama-Shakes-rock-band-members-Heath-Fogg-Zac.jpg",
  bio: "Alabama Shakes are an American rock band formed in Athens, Alabama, in 2009. The band consists of lead singer and guitarist Brittany Howard, guitarist Heath Fogg, bassist Zac Cockrell, and drummer Steve Johnson.",
  on_tour: false,
  email: "merch@alabamashakes.com"
)

radiohead = Band.create(
  name: "Radiohead",
  username: "radiohead",
  password: "Radio123!",
  instagram: "radiohead",
  website: "https://radiohead.com/",
  location: "London, UK",
  image: "https://www.nme.com/wp-content/uploads/2019/03/radiohead_2000.jpg",
  bio: "Radiohead are an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke; brothers Jonny Greenwood and Colin Greenwood; Ed O'Brien; and Philip Selway. They have worked with the producer Nigel Godrich and the cover artist Stanley Donwood since 1994.",
  on_tour: false,
  email: "tour@radiohead.com"
)

dave_matthews_band = Band.create(
  name: "Dave Matthews Band",
  username: "davematthewsband",
  password: "Dave123!",
  instagram: "davematthewsband",
  website: "https://davematthewsband.com/",
  location: "Charlottesville, VA",
  image: "https://www.313presents.com/assets/img/313-Presents-Dave-Matthews-Band-600x600-451918ecf9.jpg",
  bio: "Dave Matthews Band is an American rock band formed in Charlottesville, Virginia, in 1991. The band's founding members were singer-songwriter and guitarist Dave Matthews, bassist Stefan Lessard, drummer and backing vocalist Carter Beauford, violinist and backing vocalist Boyd Tinsley, and saxophonist LeRoi Moore.",
  on_tour: true,
  email: "merch@davematthewsband.com"
)

future_islands = Band.create(
  name: "Future Islands",
  username: "futureislands",
  password: "Future123!",
  instagram: "futureislands",
  website: "https://future-islands.com/",
  location: "Baltimore, MD",
  image: "https://static.independent.co.uk/2020/10/06/15/newFile-6.jpg?quality=75&width=982&height=726&auto=webp",
  bio: "Future Islands is an American synth-pop band based in Baltimore, Maryland, comprising Gerrit Welmers, William Cashion, Samuel T. Herring, and Michael Lowry.",
  on_tour: true,
  email: "tour@futureislands.com"
)

# Band.create(
#   name: "",
#   username: "",
#   password: "",
#   instagram: "",
#   website: "",
#   location: "",
#   image: "",
#   bio: "",
#   on_tour: true,
#   email: ""
# )


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
  bio: "Sophy Hollington is an artist living in Brighton, UK. Not being one to cut corners, most of her work is created using the lengthy process of lino-cutting. Her personal work tackles themes from meteoric folklore to alchemical symbolism and she's interested in wrangling the most arcane ideas to make them totally tangible. Past clients include The New York Times, The New Yorker, Celine, Hermes, A24, Wetransfer, WIRED, Nike, Apple, It's Nice That, The Wall Street Journal, Penguin, Faber & Faber, Beams, Little Brown and McSweeney's Quarterly Concern. She is the creator of Autonomic Tarot, a collaboration with writer David Keenan, published by Rough Trade books in 2018.",
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
  bio: "Emek is a designer, illustrator and fine art painter. He was called 'The Thinking Mans Poster Artist' by punk-rock singer Henry Rollins while working on the album cover for 'A Rollins in the Wry'.",
  open_to_work: false,
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
  bio: "Helen Kennedy aka ZazzCorp an artist/illustrator with an obsession for drawing skulls. The Zazz Corp motto 'Design for Weirdos' embodies the strange, far out, and weird.",
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

luke_martin = Designer.create(
  name: "Luke Martin",
  username: "lukemartin",
  password: "Luke123!",
  instagram: "suburban_avenger",
  website: "https://www.suburbanavengerart.com/",
  location: "Baltimore, MD",
  image: "https://media.bizj.us/view/img/10651903/bbj-martin-1393*750xx5568-3132-0-290.jpg",
  bio: "Hi - My name is Luke. I grew up on the eastern shore of Maryland in Greensboro, a rural farm town with one gas station and two whole stoplights. I attended North Caroline High School, where I spent most of my time cutting class and drawing in the margins of my bio notes. The most valuable thing I learned in high school was that there’s only one ear of corn per stalk. In 2015 I attended college at Towson University, where I enrolled in a screen printing class - then fell in love with the medium instantly. I learned as much as possible and dropped out after a year and a half. I started doing gig posters in 2017, and since then have gotten the opportunity to work with some of my favorite bands on this planet.",
  open_to_work: true,
  email: "suburbanavengerart@gmail.com"
)

brian_blomerth = Designer.create(
  name: "Brian Blomerth",
  username: "pupsintrouble",
  password: "Pups123!",
  instagram: "pupsintrouble",
  website: "https://www.brianblomerth.com/",
  location: "Brooklyn, NY",
  image: "https://dcxvepib5r3t6.cloudfront.net/attachments/file_s3s/5d09/1260/56b5/e400/08af/428d/original/0-Portrait_Brian.jpg?1560875615",
  bio: "Illustrator, musician and self-described “comic stripper” Brian Blomerth has spent years combining classic underground art styles with his bitingly irreverent visual wit in concert posters, zines, comics, and album covers.",
  open_to_work: true,
  email: "pupsintrouble@gmail.com"
)

jason_galea = Designer.create(
  name: "Jason Galea",
  username: "jasongalea",
  password: "Jason123!",
  instagram: "jj_cool_juice",
  website: "https://www.jasongalea.com/",
  location: "Melbourne, Australia",
  image: "https://decybeledizajnu.com/wp-content/uploads/2017/12/foto2.jpg",
  bio: "Jason Galea is a multi-disciplined artist based in Melbourne, Australia. Illustration, design, video and animation are at the centre of his work, which has been shown through exhibitions, live performance and design. Jason plays with dense layers of texture, form and colour to deal with themes of the subconscious and foreign dreamlike experiences. In 2010 Galea's artwork started bubbling around Melbourne, Sydney and Canberra as apart of audio visual collective 'Zonk Vision'. During this time Galea's arsenal of saturated glitchy visuals, data moshed with found footage, his heavily worked paintings and numerous self published zines saw his work planted firmly in the early days of blogs, book fairs and artist run exhibitions local, and abroad before reaching the attention of local bands around Melbourne. Most notably King Gizzard and the Lizard Wizard which has become a decade long collaboration of album art, music videos, posters and more than 400+ live visual performances thru out the world. Alongside his output with King Gizzard, Galea has managed to work with a huge array of musicians such as The Murlocs, Mac Demarco, Gum, The Growlers, Wolfmother, Saskwatch and Thee Oh Sees.",
  open_to_work: true,
  email: "jasongalea@gmail.com"
)

tyler_stout = Designer.create(
  name: "Tyler Stout",
  username: "tylerstout",
  password: "Tyler123!",
  instagram: "kolfacekilla",
  website: "https://www.tstout.com/",
  location: "Seattle, WA",
  image: "https://s3.gomedia.us/wp-content/uploads/2010/01/tylerstout.jpg",
  bio: "Tyler Stout, was born in Washington State, USA, in 1977. He spent two years at Clark Community College in Vancouver, then completed a New Media bachelors degree at Western Washington University in Bellingham. Staying in Bellingham, around 2001, Stout began illustrating flyers and posters for bands and shows in the area, along with the Seattle and Portland area. Some of the more well-known bands included Mars Volta, Death Cab for Cutie, and The Shins. He got his first professional big break when he was asked to contribute illustrations for a poster advertising a Tenacious D show at Higher Ground in Winooski, Vermont.",
  open_to_work: true,
  email: "tstout@gmail.com"
)

james_eads = Designer.create(
  name: "James Eads",
  username: "jameseads",
  password: "James123!",
  instagram: "james.r.eads.art",
  website: "https://www.jamesreadsmerch.com/",
  location: "Los Angeles, CA",
  image: "https://cdn.filestackcontent.com/OiSwZtSOTq6YiflFEQus",
  bio: "James R. Eads was born in Los Angeles, he went to college at Skidmore in upstate New York and then lived in Brooklyn for a few years before relocating to Los Angeles. He lives and works at the Brewery Arts in Los Angeles. His studio is open to the public during the bi-annual artwalks. Despite his modern method, it’s easy to see traces of past painters and movements in his pieces. Van Gogh is an obvious inspiration, though there are nuances of numerous other impressionist artists' styles in each and every piece.",
  open_to_work: true,
  email: "hello@jamesreads.com"
)

emma_roulette = Designer.create(
  name: "Emma Roulette",
  username: "emmaroulette",
  password: "Emma123!",
  instagram: "emma_roulette",
  website: "https://emmaroulette.com/",
  location: "Barcelona, Spain",
  image: "https://freight.cargo.site/w/800/q/75/i/04f5caac8a7e5ea1c5d2abc3d0162ee82468ffdc4510025d127bfdbd6975d66d/tumblr_pw9vrib3Na1vurn8lo1_1280-1.jpg",
  bio: "Hi! I'm an artist from south Florida, and currently based in Barcelona.",
  open_to_work: true,
  email: "emmaroulette@gmail.com"
)

malleus = Designer.create(
  name: "Malleus",
  username: "malleus",
  password: "Malleus123!",
  instagram: "malleusdelic",
  website: "https://www.malleusdelic.com/home/",
  location: "Tortona, Italy",
  image: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/malleusdelic/products/729970/shirt-1535364148-906a1230af9cc5c4aad498030d556531.jpg?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19",
  bio: "Malleus is an Italian three headed collective spreading its tentacles through all kind of visual art, from illustration to videos, passing through handpulled screen prints. The iconography at the base of their work originates from a vast scenery including figurative arts, in particular Expressionism and Symbolism, Art Nouveau and Surrealism, Pop Art and Psychedelic Art, and also comics, photography, cinema and literature.",
  open_to_work: true,
  email: "malleus@malleusdelic.com"
)

tim_doyle = Designer.create(
  name: "Tim Doyle",
  username: "timdoyle",
  password: "Timothy123!",
  instagram: "timothypdoyle",
  website: "https://www.timdoyle.com/",
  location: "Austin, TX",
  image: "https://images.nakatomiinc.com/wp-content/uploads/sites/4/2020/02/24220036/face.jpg",
  bio: "Tim Doyle is an illustrator and print-maker working out of Austin, Texas. Born in Claymont, Delaware and raised in Plano, Texas, Doyle never really felt like he belonged anywhere. After moving to Austin, Texas in 1999 to fulfill a life-long dream of not living in Dallas, Doyle began showing in local galleries in 2001. He self-published a diary zine, 'Amazing Adult Fantasy' from 2001-2003. Doyle has held many nerd-friendly jobs, including running a small chain of comic-book stores, as well as being the art director/ lead designer for MONDO from 2004-2009. Doyle launched Nakatomi Inc in January of 2009. That Summer, Doyle started his own screenprint shop, Nakatomi Print, in which he and many other artists work out of, as well as commercial printing for clients.",
  open_to_work: true,
  email: "timothydoyle@gmail.com"
)

tara_mcpherson = Designer.create(
  name: "Tara McPherson",
  username: "taramcpherson",
  password: "Tara123!",
  instagram: "taramcpherson",
  website: "https://www.taramcpherson.com/",
  location: "Los Angeles, CA",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/4.16.16TaraMcPhersonByLuigiNovi1.jpg/1200px-4.16.16TaraMcPhersonByLuigiNovi1.jpg",
  bio: "Tara McPherson is an American contemporary artist exploring concepts surrounding the human condition. With a focus on powerful female archetypes, her otherworldly characters hold a compelling tension in their gaze. Inspired by astrophysics, nature, mythology, comics, music, love, loss, and good old life experience. Her portraits delve into the realms of our psychological states, giving us a peek into the complexities of the human psyche. She exhibits her paintings and serigraphs internationally in galleries and museums. Named the crown princess of poster art by ELLE Magazine, she has created numerous music posters for bands such as Beck, The Pixies, and Metallica. She has worked with Sony Pictures Animation doing character designs & creative development for an animated feature production. Her array of art also includes a variety of designer toys with KidRobot, painted comic covers for DC Vertigo, advertising illustrations for Wyden+Kennedy, Barton F Graf, Publicis, and Bernstein Andrulli. She taught in the Illustration department at Parsons in NYC, and has done many painting workshops in museums and universities worldwide.",
  open_to_work: true,
  email: "taramcpherson@gmail.com"
)

erica_williams = Designer.create(
  name: "Erica Williams",
  username: "ericawilliams",
  password: "Erica123!",
  instagram: "hookieduke",
  website: "https://ericawilliamsillustration.com/",
  location: "Colorado Springs, CO",
  image: "https://growlermag-media.s3.amazonaws.com/Erica_WilliamsArtistProfile_KDK_10.15.16-2-2-1024x1024.jpg",
  bio: "Erica Williams, also known as HookieDuke, is an illustrator known for their intricate mark-making and illustrations of flora and fauna. Tangled with fantastic and often macabre tones much of their work focuses on the forgotten, endangered, the occult and lore. Erica attended Kansas City Art Institute (KCAI), and became a freelance illustrator in 2012. Since starting they have created posters, album art, apparel, identity, print advertisements, book covers, skateboards, and various merchandise for a variety of clients and industries. Their work has been included in Spectrum Fantastic Art, Curvy, Alternative Movie Posters, and others.",
  open_to_work: true,
  email: "ericawilliamsart@gmail.com"
)

michelle_urra = Designer.create(
  name: "Michelle Urra",
  username: "michelleurra",
  password: "Michelle123!",
  instagram: "silverpartypants",
  website: "https://michelleurra.com/",
  location: "Cologne, Germany",
  image: "https://freight.cargo.site/w/800/q/94/i/8d455a40bfb743150cd02408fbf834da4cdb5b3df5439656584f834b81b1a029/michelleurra.jpg",
  bio: "I'm an illustrator and animator currently based in Cologne, Germany. Through my work I like to explore and make sense of the world and tell stories that are making up our lives and fantasies. My interests spread across various fields - from the natural world to everything cultural, incorporating literature, music and film. After completing an Art & Design Foundation at Falmouth University in the UK, I continued my education with a BA (Hons) Illustration at the same university. Ever since graduation in 2019 I have been working as a freelance illustrator, collaborating with other artists and publishers around the world.",
  open_to_work: true,
  email: "hi@michelleurra.com"
)

zoltron = Designer.create(
  name: "Zoltron",
  username: "zoltron",
  password: "Zoltron123!",
  instagram: "zoltron",
  website: "https://zzz.zoltron.com/",
  location: "San Francisco, CA",
  image: "https://cdn.booooooom.com/wp-content/uploads/2018/09/zoltron-pic.jpg",
  bio: "Zoltron is an enigma. A Self proclaimed 80's teen idol, Zoltron's wave hairdo and unique California accent epitomized a certain level of cool, which inevitably paved the way to his success as a visual artist and graphic designer. Zoltron's artwork has been shown in galleries throughout the world, collected and archived by major museums and institutions including the U.S. Prints Division of the Library of Congress, The Museum of Fine Arts Boston, The Los Angeles Contemporary Museum of Art, The Victoria Albert Museum, London and The Rock and Roll Hall of Fame Museum ∆",
  open_to_work: true,
  email: "zoltron@zoltron.com"
)

marq_spusta = Designer.create(
  name: "Marq Spusta",
  username: "spusta",
  password: "Spusta123!",
  instagram: "spustastudio",
  website: "https://www.marqspusta.com/",
  location: "San Francisco, CA",
  image: "https://i.ytimg.com/vi/hazCFVlMKpE/maxresdefault.jpg",
  bio: "Marq Spusta is an artist type of fellow. He gets into a variety of projects, from designing concert posters to exhibiting intricate paintings. Marq lives and works alongside his wife and two small children in their home on the California Coast.",
  open_to_work: true,
  email: "marq@marqspusta.com"
)

chuck_sperry = Designer.create(
  name: "Chuck Sperry",
  username: "chucksperry",
  password: "Chuck123!",
  instagram: "yosquirt",
  website: "https://chucksperry.net/",
  location: "San Francisco, CA",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/2014_Sperry_Studio.jpg",
  bio: "Chuck Sperry lives in the Haight-Ashbury district of San Francisco, where he's made his particular style of rock poster designs for over 20 years. He operates Hangar 18, a silkscreen print studio, located in Oakland. Sperry works in San Francisco, but exhibits internationally from Athens to Argentina, Bristol to Belgrade (visited Belgrade at the invitation of The Cultural Minster of Serbia). By conducting workshops and lectures all over the planet, Sperry's tutelage has inspired a new generation of rock poster and silkscreen artists worldwide.",
  open_to_work: true,
  email: "sperry@chucksperry.com"
)

stanley_donwood = Designer.create(
  name: "Stanley Donwood",
  username: "stanleydonwood",
  password: "Stan123!",
  instagram: "stanleydonwood",
  website: "https://www.slowlydownward.com/",
  location: "London, UK",
  image: "https://wp.penguin.co.uk/wp-content/uploads/2020/02/stanley_ac.jpg",
  bio: "Among the projects he has done are the artwork for Radiohead's records, an early cyber conference, depressing flyposters, many short stories, a pulp-noir-thriller, a record company, book covers for JG Ballard's novels, art direction for a film about nuclear weapons, the artwork for Glastonbury Festival, a book about holloways with Robert Macfarlane, art installations in Bristol, London, the Netherlands and Sydney, as well as exhibitions worldwide. The best way to find out what he is filling the days with is to look at his instagram or twitter accounts.",
  open_to_work: true,
  email: "stanley@slowlydownward.com"
)

james_flames = Designer.create(
  name: "James Flames",
  username: "jamesflames",
  password: "James123!",
  instagram: "thejamesflames",
  website: "https://www.jamesflames.com/",
  location: "Asheville, NC",
  image: "https://ashevillemade.com/wp-content/uploads/2019/08/James-Flames-Portrait-4-RZ-683x1024.jpg",
  bio: "One day, when James Flames was a very little boy, someone had the good sense to sit him down in front of a stack of paper and put a pencil in his hand. And so he began to draw. And draw. And draw, and draw. Now, years later, after many adventures in his hometown of Brooklyn, NY, James works and resides within the beautiful Blue Ridge Mountains of North Carolina. His artwork has been featured in galleries near and far — from London to L.A., NY to NC. And he creates rock posters for some of the top touring bands out on the road today — posters which he screen prints by hand in his little studio tucked away in the woods. His techniques may have evolved over time, but it always comes back to the beginning — the stack of paper never far, the pencil always in hand.",
  open_to_work: true,
  email: "jamesflames@gmail.com"
)

drew_millward = Designer.create(
  name: "Drew Millward",
  username: "drewmillward",
  password: "Drew123!",
  instagram: "drewmillward",
  website: "http://www.drewmillward.portfoliobox.me/",
  location: "Leeds, UK",
  image: "https://cdn.shopify.com/s/files/1/1695/7897/articles/Drew-Millward-Northern-Monk-video-thumbnail_800x.jpg?v=1618387050",
  bio: "Drew Millward was born in 1981 in Coventry; he grew up in Bolton, studied and lived in Leeds for many years and now lives in a quarry in the Aire Valley, with his wife and son. He has been drawing pictures since around 2004. Drew likes to draw 'the old fashioned way', using pencils, pens and a love of the craft of illustration, but is incresingly reliant on digital methods to create his work. You have to move with the times. While his subject matter can vary dramatically, he hopes that the attention to detail and the love of drawing is apparent throughout his work. He has exhibited throughout the US, UK, Europe and beyond, as well as having the pleasure of creating work for an ever growing international client base.",
  open_to_work: true,
  email: "drewmillward@gmail.com"
)

aj_masthay = Designer.create(
  name: "AJ Masthay",
  username: "ajmasthay",
  password: "Masthay123!",
  instagram: "ajmasthay",
  website: "https://www.masthaystudios.com/",
  location: "Hartford, CT",
  image: "https://cdn.shopify.com/s/files/1/0153/2051/products/IMG_6881_1024x1024.jpg?v=1616282693",
  bio: "Born in 1975, AJ Masthay has lived in Connecticut his entire life. He attended the Hartford Art School where he majored in printmaking with an art history minor, graduating with a Bachelor of Fine Arts in 1997. Masthay established his own letterpress studio in 2001 and is currently based out of Hartford, CT. Clients include The Grateful Dead, Black Sabbath, Dead and Company, Foo Fighters, South Park, Queens of the Stone Age, The Jerry Garcia Estate, Widespread Panic, Umphrey's McGee and many more. Outside of the studio, AJ enjoys time with his wife Kara and two Labrador retrievers (Dexter and Halley) in their West Hartford, CT home. Other interests include treasure hunting at the local flea markets and all things natural history related including an extensive osteology (skull) collection.",
  open_to_work: true,
  email: "aj@masthaystudios.com"
)


# Designer.create(
#   name: "",
#   username: "",
#   password: "",
#   instagram: "",
#   website: "",
#   location: "",
#   image: "",
#   bio: "",
#   open_to_work: true,
#   email: ""
# )


# POSTER SEEDS:

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
  band_id: phish.id,
  date: "April 14-15, 2023",
  venue: "Climate Pledge Arena",
  location: "Seattle, WA",
  edition: 1200,
  status: "unassigned",
  duedate: "03/14/2023",
  budget: "$30,000",
  dimensions: "18x24"
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
  band_id: billy_strings.id,
  date: "June 2-3, 2023",
  venue: "Moody Center",
  location: "Austin, TX",
  edition: 500,
  status: "unassigned",
  duedate: "05/02/2023",
  budget: "$10,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: billy_strings.id,
  date: "June 7, 2023",
  venue: "BOK Center",
  location: "Tulsa, OK",
  edition: 500,
  status: "unassigned",
  duedate: "05/07/2023",
  budget: "$10,000",
  dimensions: "16x24"
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
  band_id: ween.id,
  date: "March 16-18, 2023",
  venue: "Brooklyn Bowl",
  location: "Las Vegas, NV",
  edition: 300,
  status: "unassigned",
  duedate: "02/16/2023",
  budget: "$10,000",
  dimensions: "16x24"
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
  band_id: pixies.id,
  date: "May 4, 2023",
  venue: "Fox Theater",
  location: "Oakland, CA",
  edition: 500,
  status: "unassigned",
  duedate: "04/04/2023",
  budget: "$15,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: pixies.id,
  date: "May 10, 2023",
  venue: "Mission Ballroom",
  location: "Denver, CO",
  edition: 350,
  status: "unassigned",
  duedate: "04/10/2023",
  budget: "$10,000",
  dimensions: "16x24"
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
  band_id: metallica.id,
  date: "August 9 & 11, 2023",
  venue: "Soldier Field",
  location: "Chicago, IL",
  edition: 500,
  status: "unassigned",
  duedate: "07/09/2023",
  budget: "$25,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: metallica.id,
  date: "September 27 & 29, 2023",
  venue: "Foro Sol",
  location: "Mexico City, Mexico",
  edition: 1000,
  status: "unassigned",
  duedate: "08/27/2023",
  budget: "$50,000",
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
  band_id: patti_smith.id,
  date: "August 18, 2023",
  venue: "Madison Square Garden",
  location: "New York, NY",
  edition: 1000,
  status: "unassigned",
  duedate: "07/18/2023",
  budget: "$30,000",
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
  band_id: sleep.id,
  designer_id: dave_kloc.id,
  image: "https://images.squarespace-cdn.com/content/v1/5b1dc302e17ba33fa4d22f2c/1565903996049-SSCDYZ0ZZUS32VQA1NFP/Final1.jpg?format=2500w",
  date: "Canadian Tour 2019",
  venue: "Multiple Venues",
  location: "Canada",
  edition: 200,
  status: "complete",
  duedate: "08/01/2019",
  budget: "$20,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: dead_and_co.id,
  designer_id: dave_kloc.id,
  image: "https://images.squarespace-cdn.com/content/v1/5b1dc302e17ba33fa4d22f2c/1654194940261-IN6C7PCRP37JZFN3BNMQ/image-asset.jpeg?format=2500w",
  date: "June 11, 2022",
  venue: "Dodger Stadium",
  location: "Los Angeles, CA",
  edition: 1600,
  status: "complete",
  duedate: "05/11/2022",
  budget: "$40,000",
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

Poster.create(
  band_id: childish_gambino.id,
  designer_id: luke_martin.id,
  image: "https://images.squarespace-cdn.com/content/v1/5a10ae19b1ffb6336a5c17a0/1553573626364-229OC0QVINRGWXHULSLC/gambino+london+night+1.png?format=1000w",
  date: "March 24, 2019",
  venue: "The O2 Arena",
  location: "London, UK",
  edition: 500,
  status: "complete",
  duedate: "02/24/2019",
  budget: "$20,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: future_islands.id,
  designer_id: brian_blomerth.id,
  image: "https://pbs.twimg.com/media/FOAU2noVsAM2d1D?format=jpg&name=4096x4096",
  date: "March 25, 2022",
  venue: "Alexandra Palace",
  location: "London, UK",
  edition: 150,
  status: "complete",
  duedate: "02/25/2022",
  budget: "$7,500",
  dimensions: "18x24"
)

Poster.create(
  band_id: dead_and_co.id,
  designer_id: brian_blomerth.id,
  image: "https://www.brianblomerth.com/posters/dead&co/websitedeadandco.jpg",
  date: "July 8, 2022",
  venue: "Jiffy Lube Live",
  location: "Bristow, VA",
  edition: 1540,
  status: "complete",
  duedate: "06/08/2022",
  budget: "$50,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: king_gizzard.id,
  designer_id: jason_galea.id,
  image: "https://cdn.myportfolio.com/c696cc3f-884c-4443-b8b9-b4d31be84f2b/0aa710d5-b12a-4bea-81d7-8c8dae26bc67_rw_600.jpg?h=3bc0931031c8ea2f72c2a1d9b06132a9",
  date: "October 4, 2022",
  venue: "Roseland Theater",
  location: "Portland, OR",
  edition: 130,
  status: "complete",
  duedate: "09/04/2022",
  budget: "$6,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: king_gizzard.id,
  designer_id: jason_galea.id,
  image: "https://cdn.myportfolio.com/c696cc3f-884c-4443-b8b9-b4d31be84f2b/5c44336d-8cab-47ac-b269-668c462264ce_rw_600.jpg?h=c01507865fc24e25baed54adef0e00de",
  date: "October 23, 2022",
  venue: "The Anthem",
  location: "Washington, D.C.",
  edition: 450,
  status: "complete",
  duedate: "09/23/2022",
  budget: "$15,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: king_gizzard.id,
  date: "June 1-4, 2023",
  venue: "The Caverns",
  location: "Pelham, TN",
  edition: 500,
  status: "unassigned",
  duedate: "05/01/2023",
  budget: "$20,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: king_gizzard.id,
  date: "June 7-9, 2023",
  venue: "Red Rocks Amphitheatre",
  location: "Morrison, CO",
  edition: 1000,
  status: "unassigned",
  duedate: "05/07/2023",
  budget: "$40,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: kendrick_lamar.id,
  designer_id: tyler_stout.id,
  image: "https://images.squarespace-cdn.com/content/v1/550db867e4b051bbaff5260a/1529562942965-WAQFZADMB59X8VHFMPY9/lamar.png?format=1500w",
  date: "June 3-9, 2018",
  venue: "Multiple Venues",
  location: "East Coast, USA",
  edition: 100,
  status: "complete",
  duedate: "05/03/2018",
  budget: "$10,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: the_who.id,
  designer_id: james_eads.id,
  image: "https://cdn.shopify.com/s/files/1/0920/4880/products/image_4aed6986-0eb3-4061-ad40-4f62cbf7da3b_1400x.jpg?v=1671563624",
  date: "December 20, 2020",
  venue: "Roundhouse",
  location: "London, UK",
  edition: 100,
  status: "complete",
  duedate: "11/20/2020",
  budget: "$25,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: khruangbin.id,
  designer_id: michelle_urra.id,
  image: "https://freight.cargo.site/w/1181/q/94/i/658a52fd73c8d942e6f9cd1bcfcc5efc40c4af500107de37af43d082522bcfe4/michelleurra-copyright-09.jpg",
  date: "July 12, 2022",
  venue: "Kettlehouse Amphitheater",
  location: "Bonner, MT",
  edition: 250,
  status: "complete",
  duedate: "06/12/2022",
  budget: "$7,500",
  dimensions: "18x24"
)

Poster.create(
  band_id: khruangbin.id,
  designer_id: emma_roulette.id,
  image: "https://freight.cargo.site/w/1280/q/94/i/fe989968ccd247359b4bf4011e71ebab18373e1730a6ad4bb184e760fcdcdf66/tumblr_53f649e29e965ea96e4de63ff4f87020_532fce44_1280.jpg",
  date: "August 5, 2022",
  venue: "Thompson's Point",
  location: "Portland, ME",
  edition: 250,
  status: "complete",
  duedate: "07/05/2022",
  budget: "$7,500",
  dimensions: "18x24"
)

Poster.create(
  band_id: foo_fighters.id,
  designer_id: malleus.id,
  image: "https://www.malleusdelic.com/home/wp-content/uploads/2020/09/FooFighters_2019.jpg",
  date: "June 27, 2019",
  venue: "Koengen Fortress",
  location: "Bergen, Norway",
  edition: 250,
  status: "complete",
  duedate: "05/27/2019",
  budget: "$30,000",
  dimensions: "50x70 cm"
)

Poster.create(
  band_id: skrillex.id,
  designer_id: tim_doyle.id,
  image: "http://411posters.com/wp-content/uploads/2014/06/doyle-skrillex-baltimore-md-2014.jpg",
  date: "June 8, 2014",
  venue: "Pimlico Race Course",
  location: "Baltimore, MD",
  edition: 100,
  status: "complete",
  duedate: "05/08/2014",
  budget: "$5,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: pixies.id,
  designer_id: tara_mcpherson.id,
  image: "https://64.media.tumblr.com/af8a85d9e1c47725222da96e9593a64a/tumblr_pc4phn7szq1tdmwb4o1_1280.jpg",
  date: "July 18, 2018",
  venue: "Jones Beach Theater",
  location: "Wantagh, NY",
  edition: 150,
  status: "complete",
  duedate: "06/18/2018",
  budget: "$8,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: metallica.id,
  designer_id: erica_williams.id,
  image: "https://images.squarespace-cdn.com/content/v1/5976c9714402434deaa4ebd5/1549342428779-2WO0TQLS9H1NYBYTVZVN/Metallica-PNC-Arena-Erica-Williams.jpg",
  date: "January 28, 2019",
  venue: "PNC Arena",
  location: "Raleigh, NC",
  edition: 300,
  status: "complete",
  duedate: "12/28/2018",
  budget: "$15,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: primus.id,
  designer_id: zoltron.id,
  image: "https://posterdrops-images.s3.amazonaws.com/art_images/zoltron-primus-newyears-poster-2017_800_1627418388.webp",
  date: "December 31, 2017",
  venue: "Fox Theater",
  location: "Oakland, CA",
  edition: 500,
  status: "complete",
  duedate: "11/31/2017",
  budget: "$25,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: the_rolling_stones.id,
  designer_id: marq_spusta.id,
  image: "http://www.marqspusta.com/wp-content/gallery/stonessixty/Screen-Shot-2022-11-29-at-10.10.40-AM.png",
  date: "Sixty Tour 2023",
  venue: "Multiple Venues",
  location: "U.S.A.",
  edition: 150,
  status: "complete",
  duedate: "12/01/2022",
  budget: "$25,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: alabama_shakes.id,
  designer_id: chuck_sperry.id,
  image: "http://chucksperry.net/wp-content/uploads/2015/08/ALABAMA-SHAKES-SPERRY.jpg",
  date: "August 16, 2015",
  venue: "Red Rocks Amphitheatre",
  location: "Morrison, CO",
  edition: 250,
  status: "complete",
  duedate: "07/16/2015",
  budget: "$25,000",
  dimensions: "21x29"
)

Poster.create(
  band_id: radiohead.id,
  designer_id: stanley_donwood.id,
  image: "https://www.juxtapoz.com/images_old/stories/2012/Oct2012/Oct10/terrordome_photo2.jpeg",
  date: "October 8-9, 2012",
  venue: "Greenwich Peninsula",
  location: "London, UK",
  edition: 188,
  status: "complete",
  duedate: "09/08/2012",
  budget: "$20,000",
  dimensions: "19x25"
)

Poster.create(
  band_id: dave_matthews_band.id,
  designer_id: james_flames.id,
  image: "https://assets.bigcartel.com/product_images/220634314/DaveMatthewsBand-HolmdelNJ2018-FinalPrint.jpg?auto=format&fit=max&w=1800",
  date: "July 18, 2018",
  venue: "PNC Bank Arts Center",
  location: "Holmdel, NJ",
  edition: 750,
  status: "complete",
  duedate: "06/18/2018",
  budget: "$15,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: billy_strings.id,
  designer_id: drew_millward.id,
  image: "https://posterdrops-images.s3.amazonaws.com/art_images/318458336_702165867933272_1083732693515843521_n_1670530370.webp",
  date: "August 12, 2022",
  venue: "02 Ritz",
  location: "Manchester, UK",
  edition: 50,
  status: "complete",
  duedate: "07/12/2022",
  budget: "$3,000",
  dimensions: "18x24"
)

Poster.create(
  band_id: dead_and_co.id,
  designer_id: aj_masthay.id,
  image: "https://cdn.shopify.com/s/files/1/0182/2915/products/22DeadCo-Citi2-FINAL.jpg?v=1658156145",
  date: "July 15, 2022",
  venue: "Citi Field",
  location: "New York, NY",
  edition: 1800,
  status: "complete",
  duedate: "06/15/2022",
  budget: "$40,000",
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


puts "Done seeding! ✅"