window.STATE = {
 "updated": "2026-11-15 15:15",
 "summary": "Waybill is a playable transport tycoon in a photoreal world: you lay track, roads, canals and airports on a tile grid, run trains, buses, lorries, ships and aircraft on lines, carry passengers to the places they want to go and freight through industry chains, starting in any year from 1850 to 2050. The last published build is v0.3, the decades build; the v0.4 test build added road transport, transfers between modes, new cargo chains, water, air and a 32 km region, and after playing it Jeroen's verdict was that it is not good enough. Honestly missing today: it does not hold 60 frames a second at Ultra on his screen, building over hills is confusing and not fun, roads zigzag and traffic is wonky, the world looks grey, people wear 1905 clothes in every era, and only the 1905 express locomotive is a great vehicle, with too few models to choose between in most eras. Beyond that, nobody has listened to the sound, there is no music, no guided first line, no loans, no rivals and no multiplayer, and the benchmark playtest (a newcomer playing two hours alone without being asked) has not been run. Today's quality pass, aiming at v0.5, works on all eight of his points, performance and building first.",
 "releases": [
  {
   "version": "v0.1.0",
   "date": "2026-11-13",
   "name": "M1 diorama",
   "what": "The Hollowbrook diorama: a village, a station and a steam train running through a photoreal valley, barely interactive, built to prove the look in motion.",
   "published": true
  },
  {
   "version": "v0.1.1",
   "date": "2026-11-13",
   "name": "M1 diorama, second build",
   "what": "The fix pass after the first look: a calmer interface, bridges and stations that fit their site, and people, animals and carts that move.",
   "published": true
  },
  {
   "version": "v0.2.0",
   "date": "2026-11-14",
   "name": "First Haul",
   "what": "The first playable build: a generated county, track dragged with a ghost and a price, stations, a depot, a train on a line, money in and out, save and load.",
   "published": true
  },
  {
   "version": "v0.2.1",
   "date": "2026-11-14",
   "name": "Menus, signals and freight",
   "what": "Main menu, settings, saves, sound, path signals, undo and land shaping, freight from industries and towns that grow.",
   "published": true
  },
  {
   "version": "v0.3.0",
   "date": "2026-11-14",
   "name": "The Decades",
   "what": "Start in any year from 1850 to 2050 on a 4 km county; towns, trains and roads change through the eras, track is upgraded in place and an elevated maglev runs into the city.",
   "published": true
  },
  {
   "version": "v0.4",
   "date": "2026-11-15",
   "name": "The transport company (test)",
   "what": "Buses and lorries, passengers with destinations and transfers, new cargo chains, canals and ships, airports and aircraft and a 32 km region, as a test build that stays unpublished.",
   "published": false
  },
  {
   "version": "v0.5",
   "date": "next",
   "name": "The quality pass",
   "what": "Being built today: smooth at Ultra on a 3440 x 1440 screen, a rebuilt building experience, roads in eight directions and motorways, colour in every era, people dressed for their year, and better, more varied vehicles.",
   "published": false
  }
 ],
 "areas": [
  {
   "name": "The simulation core",
   "status": "solid",
   "now": "A deterministic simulation that plays the whole game without the engine: the same seed and the same actions give the same world on every computer, checked by 190 tests and recorded replays.",
   "works": [
    "Every action is a command that first returns a plan with its price and every problem, which the ghost shows",
    "Undo, save and load, a calendar that runs past 2050",
    "An autopilot that plays twenty-year games to measure balance",
    "Plain-language Why? sentences for stuck trains and refusals",
    "The 32 km region comes out identical on Windows and Linux builds"
   ],
   "gaps": [
    "No loans, no AI rivals and no multiplayer yet",
    "No timetables or expert orders inside a line",
    "Simplifications left from the first slice: bridge speed limits are not enforced, trains stop centred on the platform, undo always refunds in full, land shaping works corner by corner",
    "Balance numbers are placeholders; only the Cozy values are used"
   ],
   "pass": "New rules are landing with tests: roads in eight directions, motorways, building over hills and the region generator."
  },
  {
   "name": "Trains and track",
   "status": "working",
   "now": "Steam to maglev with path signals, track that is wired or relaid for high speed in place, and an elevated maglev guideway with its own stations; the 1905 express engine is the best-looking vehicle in the game.",
   "works": [
    "Smooth curves and gradients drawn from grid pieces, every wheel on the rail",
    "One smart signal type, with help out of deadlocks",
    "Trains age, cost more and offer Replace with a newer model",
    "Track upgrades (overhead wires, high speed) priced over the stretch you drag",
    "Elevated guideway on pylons over streets and low houses"
   ],
   "gaps": [
    "Jeroen: apart from the express locomotive, the trains are mediocre at best",
    "Too little choice: before 1958 only one express and one tank engine at a time; no locomotive at all before 1880 until today's pass",
    "No coach a locomotive can haul after 2025 without a stand-in, and freight wagons in only two generations over 190 years",
    "A guideway station cannot stand where the guideway climbs, and a branch cannot leave a wide curve",
    "Points and crossings are simplified close up"
   ],
   "pass": "New engines and coaches are being built (1850s singles and goods engines, a shunter, a hood-unit diesel, four-wheel carriages, private-owner coal wagons), so an 1850 start now has trains."
  },
  {
   "name": "Building tools",
   "status": "rough",
   "now": "One build bar for rail, road, water and air with a ghost, a price at the pointer, track laid piece by piece with dust and a thump, and problems pinned to the place; over height differences it confuses and frustrates.",
   "works": [
    "Ghost of the track to be, with its price and curve radius",
    "Undo that plays the building back",
    "Bridges chosen by the clearance they need",
    "Why not? warnings at the place, never piling up at the screen edge"
   ],
   "gaps": [
    "Jeroen: building rails and roads is not intuitive and not fun, above all over height differences",
    "Bridges and tunnels cannot be built on a diagonal; the tool bends to cross square",
    "Bridge decks and tunnels cannot climb, so a long viaduct cannot rise across a valley",
    "Land shaping is corner by corner, with no level-an-area drag"
   ],
   "pass": "A full re-pass: drag from A to B over any land and get a line that can be built, with the cuttings, banks, bridges and tunnels chosen and named, a side profile and a price; height alone is never a refusal, and stations and depots can go on slopes."
  },
  {
   "name": "Roads and road vehicles",
   "status": "rough",
   "now": "Player roads, one-click bus stops, lorry bays and depots, and buses and lorries on lines; in v0.4 roads ran only in four directions and the 57 road vehicle types share 20 bodies.",
   "works": [
    "Buses feed trains at shared stations, each leg paid",
    "Stops join the nearest station by themselves",
    "Vehicles keep left, stop at the kerb, wait at junctions and level crossings",
    "Town traffic of each era: cars, buses, lorries, trams and pods"
   ],
   "gaps": [
    "Roads zigzag without diagonals and lorries look ridiculous on them (Jeroen)",
    "Traffic is wonky",
    "The 48 company lorries share 4 bodies, so a coal lorry looks like an oil lorry",
    "Modern cars, pods, vans and buses read as boxes; no lettering, number plates or liveries",
    "No road vehicles before 1900 and nothing new between 1995 and 2040",
    "No player trams, one-way roads or road tunnels"
   ],
   "pass": "Roads now run in eight directions with real curves, motorways come from 1960, traffic follows without jitter; lorry bodies per cargo, the missing car decades, a charabanc and new vans are being built."
  },
  {
   "name": "Water and ships",
   "status": "working",
   "now": "Navigable rivers, canals that climb through their own locks, quays, shipyards and coastal counties, with vessels from narrowboat to container feeder.",
   "works": [
    "Locks that close, fill or empty and open in turn",
    "The canal tool follows the land and puts in its own locks",
    "A coal barge line pays back in about a year and seven months",
    "Navigation lights, wakes and bow waves, a towing horse on the towpath"
   ],
   "gaps": [
    "A dug canal draws dry: a brown cut with no water",
    "The coast's surf is rows of identical crescents and the sea has fake-looking flecks",
    "Two coasters can overlap at one berth (fixed in code, not yet in a build)",
    "No aqueducts, no ship breakdowns, one boat per quay at a time",
    "No real port town: ports lie far from villages, so sea passengers need feeders",
    "No river freight between 1850 and 1934 or between 1976 and 2039"
   ],
   "pass": "New hulls (river steamer, bulk coaster, hydrofoil, water bus, container barge, electric push convoy), real wheelhouses and liveries are being built."
  },
  {
   "name": "Air",
   "status": "rough",
   "now": "Airports from grass field to international as station parts, six aircraft from 1922 to 2042 and a full flight model.",
   "works": [
    "Take-off, landing, folding gear, turning propellers, contrails and tyre smoke",
    "Jets pay their way on the 32 km region",
    "Airports drawn with runway, taxiways, stands, terminal and tower"
   ],
   "gaps": [
    "Following a plane on the 32 km region ran at about 16 frames a second",
    "A jet makes only about 3 trips a year where balance wants 4 to 6 (waiting for a decision)",
    "From 2001 to 2039 the only aircraft on sale is a 300-seat widebody that small airports cannot take",
    "Jet bridges are untested; airports do not count in the station list"
   ],
   "pass": "Five new aircraft types and two-colour company liveries are being built; following a plane is part of the speed test."
  },
  {
   "name": "Cargo and industries",
   "status": "working",
   "now": "Fourteen cargo types and fourteen industry types in chains from coal, grain, wood, iron and oil to power, flour, paper, steel, goods and fuel, with early and modern looks.",
   "works": [
    "Industries grow when served well, decline and close with a year's notice when not",
    "Run-down looks for struggling and closed industries",
    "Stock piles at the works grow and shrink with what waits",
    "Industries open and close with the eras"
   ],
   "gaps": [
    "Trees stood inside industry yards and the steel mill's molten iron glowed too bright (both fixed for the next build)",
    "No seasonal harvest and no demand limit at power stations",
    "Processing works store without limit, which can hide a broken chain"
   ],
   "pass": ""
  },
  {
   "name": "Passengers and destinations",
   "status": "working",
   "now": "Towns send people to particular places, bigger and nearer more; people change between bus and train, each leg is paid, and the station window shows who waits for where.",
   "works": [
    "A demand map shows who wants to go where, served or not",
    "Station and town windows list destinations, carried and waiting",
    "Transfers at stations made of several parts"
   ],
   "gaps": [
    "The demand map cannot show the whole county even at its furthest zoom",
    "No changing on foot between two nearby stations",
    "No timetables yet, so waits are estimates"
   ],
   "pass": ""
  },
  {
   "name": "Towns and eras",
   "status": "working",
   "now": "Towns grow by being served and renew through four eras, from Victorian terraces to 1960s estates, 1990s glass and timber towers of the 2050s, with building sites you can watch.",
   "works": [
    "Old buildings come down and new ones go up one by one; landmarks stay",
    "Era roads, street lights and parked cars",
    "A start year from 1850 to 2050 makes the county as it stood then"
   ],
   "gaps": [
    "Every building of a type is the same colour and the streets are empty of signs, stalls, bins, washing and front gardens",
    "People wore 1905 clothes in every era in v0.4",
    "In the region, towns were street grids in a circle",
    "The per-era light and grade never actually ran: every era had the 1905 look"
   ],
   "pass": "People are dressed for their year in eight sets from 1870 to 2045 (merged, being imported), towns get paint schemes so houses differ, and region towns get old cores, radial roads and frayed edges."
  },
  {
   "name": "The world and maps",
   "status": "working",
   "now": "Hollowbrook, Marlvale at 2 and 4 km, the coastal Sallowwold, a county from a seed, and a 32 km region with real weight on its land.",
   "works": [
    "Memory stays nearly flat as the map grows",
    "Coastal counties with sea ports",
    "The same seed and year make the same world"
   ],
   "gaps": [
    "From high up the 32 km region was a flat patchwork with murky, stair-stepped ground",
    "Roads in the region were staircases",
    "Only one climate; no map editor and no real-world maps"
   ],
   "pass": "The 32 km region becomes the default: coves, headlands and a shingle spit, moor and dales, fields at any angle with hedges, village greens, and motorways planned by year."
  },
  {
   "name": "Look and graphics",
   "status": "rough",
   "now": "A photoreal world through a tilt-shift lens with real trees, a ground drawn from aerial photographs, weathering and one season value that turns the year.",
   "works": [
    "Real tree species, grass and hedges that read as real from the game camera",
    "Steam, smoke and lamps that move",
    "Weathered, lived-in surfaces rather than clean CG"
   ],
   "gaps": [
    "Jeroen: bland, grey and industrial; only the greenery helps",
    "A milky haze and a warm grade pull everything toward khaki",
    "Half the town is grey even with the haze removed: source colours were muted",
    "Winter and autumn are flat; only spring is tuned",
    "Glass draws as a dark room; nothing is ever seen inside a window"
   ],
   "pass": "A colour pass on grading, light, sky, land and material palettes, a look per era that really runs, and colour at the scale the camera sees: whole bays and floors, not trims."
  },
  {
   "name": "Performance and memory",
   "status": "rough",
   "now": "Memory was cut hard last night (the 32 km region needs about 6 GB of memory and 7.4 GB of video memory), but frame rate at his resolution is not good enough.",
   "works": [
    "The 4 km county went from 8.2 to 3.5 GB of memory and from 11.5 to 6.5 GB of video memory",
    "Graphics presets that really scale",
    "Small maps ran at over 100 frames a second at 1080p"
   ],
   "gaps": [
    "About 46 frames a second on the 4 km county in 2030 at 3440 x 1440, under the screen's FreeSync floor, which blacks the screen",
    "Following a plane on the region dropped to about 16 frames a second",
    "Games started in 1965 or later hitch",
    "The window stops answering for seconds while a county loads, with 8 seconds of black at the start",
    "Earlier measurements were never made at his actual resolution"
   ],
   "pass": "The gate for v0.5: on the 32 km region in 1905, 1965 and 2030, zoomed in, out, panning and following, never under 60 frames a second, no frame over 25 ms, and loading never hangs or goes black."
  },
  {
   "name": "Interface",
   "status": "working",
   "now": "A sleek, era-neutral PC interface at desktop density: one build bar, compact windows, a hotkey for everything, menus, settings, saves and a calm default screen with labels anchored to the world.",
   "works": [
    "Build bar per mode, buy windows per mode, lines, finances",
    "The Why? inspector: one sentence, the numbers and the fix",
    "Main menu over a live world, new game with map, year and pace",
    "Every key can be changed"
   ],
   "gaps": [
    "Building feels confusing, part of point two",
    "No guided first line for a new player yet",
    "The audio sliders do not yet set the sound's volumes"
   ],
   "pass": "A new build bar and strip as the building re-pass asks, a frame-rate floor in settings, a loading screen and better new-game defaults."
  },
  {
   "name": "Sound and music",
   "status": "rough",
   "now": "World ambience, steam trains and interface sounds from free recordings and synthesis, mixed and working in the package.",
   "works": [
    "Skylarks, beds of the countryside and the village, steam engines",
    "Separate volumes for effects, ambience, interface and music"
   ],
   "gaps": [
    "Nobody has listened to it yet: all of it was judged by measurement",
    "No music at all; the era jazz is still to come",
    "Diesel, electric and maglev engines are synthesised stand-ins",
    "No voices, and the background beds were recorded in France and Denmark",
    "The soundscape does not yet change with the era"
   ],
   "pass": ""
  }
 ],
 "next": [
  {
   "title": "60 frames a second at Ultra on his screen",
   "why": "The game lags zoomed in and out, and under 48 frames a second his FreeSync monitor goes black; this is the first priority.",
   "when": "this pass"
  },
  {
   "title": "Loading without a hung or black window",
   "why": "Windows marks the game as not responding while a county loads, with seconds of black.",
   "when": "this pass"
  },
  {
   "title": "Building over hills, done again",
   "why": "Building rails and roads over height differences is confusing and not fun, the second priority.",
   "when": "this pass"
  },
  {
   "title": "Diagonal roads and traffic that drives",
   "why": "Four-direction roads zigzag and lorries look ridiculous on them.",
   "when": "this pass"
  },
  {
   "title": "Motorways in the later eras",
   "why": "Jeroen asked for highways as the game moves on; they arrive from 1960.",
   "when": "this pass"
  },
  {
   "title": "The 32 km region as the default map",
   "why": "Big maps are where aircraft, motorways and real cities make sense.",
   "when": "this pass"
  },
  {
   "title": "Colour in every era",
   "why": "The world reads grey and industrial; every era needs its own colour.",
   "when": "this pass"
  },
  {
   "title": "People dressed for their year",
   "why": "People in 2050 still wore 1800s clothes.",
   "when": "this pass"
  },
  {
   "title": "Every vehicle to the locomotive's standard, and more of them per era",
   "why": "Only the express engine is great, and players want several models to choose between in every era of every mode.",
   "when": "this pass"
  },
  {
   "title": "The v0.5 build",
   "why": "A package that passes the speed test, for Jeroen to play; publishing it is his call.",
   "when": "this pass"
  },
  {
   "title": "A game, not a sandbox: first line, news, sound, music, modes",
   "why": "The plan's third slice: a guided first line, the Gazette, sound heard by a person, era music, Cozy and Sandbox, and balance.",
   "when": "after v0.5"
  },
  {
   "title": "The benchmark playtest",
   "why": "A build passes when a newcomer plays it for two hours alone without being asked; every place they get stuck becomes a fix.",
   "when": "after v0.5"
  },
  {
   "title": "The Company: finance, rules and tiers",
   "why": "Loans and finance screens, local authorities, automatic replacement, all difficulty tiers, goals and subsidies, timetables, trams and the network diagram.",
   "when": "later"
  },
  {
   "title": "A first proof of space",
   "why": "Jeroen said yes to space and to showing it soon: a launch site and the Moon as a playable proof.",
   "when": "later"
  }
 ],
 "later": [
  {
   "group": "Performance and release",
   "items": [
    {
     "title": "Map objects by region",
     "detail": "Every object on the map is loaded at once; a fully dressed 32 km map would need about 11 GB of memory and 11 GB of video memory unless far objects are merged and streamed."
    },
    {
     "title": "Thousands of trains",
     "detail": "The plan asks for 3,000 trains; the early test drew them at 28 to 40 frames a second."
    },
    {
     "title": "Live views cost frame time",
     "detail": "Each small window that follows a train costs 2 to 7 ms, so several open at once eat the frame."
    },
    {
     "title": "A hitch while panning far",
     "detail": "Rebuilding the walking paths when the camera moves about 800 m costs 50 to 65 ms in one frame."
    },
    {
     "title": "Download size",
     "detail": "The build no longer fits one 2 GB download file; better texture compression and cooking only what the game loads would shrink it."
    },
    {
     "title": "An unsigned game",
     "detail": "Windows warns about the unsigned build and may refuse it outright on PCs with Smart App Control; code signing is needed before a real release."
    },
    {
     "title": "Checking state at full scale",
     "detail": "Comparing the whole world's state every second on a 2,048-tile map may be too slow and needs measuring."
    }
   ]
  },
  {
   "group": "Building and the railway",
   "items": [
    {
     "title": "Diagonal bridges and tunnels",
     "detail": "The tool bends to cross square; a skewed viaduct would let a diagonal cross as drawn."
    },
    {
     "title": "Climbing bridge decks and tunnels",
     "detail": "Decks and bores are level, so a long viaduct cannot rise across a valley."
    },
    {
     "title": "Relaying across junctions",
     "detail": "Re-profiling a line follows plain track only, not through junctions, bridges or tunnels."
    },
    {
     "title": "Guideway limits",
     "detail": "A maglev station cannot stand on a climbing stretch, and a branch cannot leave a wide curve."
    },
    {
     "title": "Simplified railway rules",
     "detail": "Bridge speed limits are not enforced, trains stop centred on the platform and coaches beyond the platform still load."
    },
    {
     "title": "Land shaping",
     "detail": "Land is raised and lowered corner by corner, without levelling an area in one drag."
    },
    {
     "title": "Points close up",
     "detail": "Turnout blades and crossings are simplified when the camera is close."
    }
   ]
  },
  {
   "group": "Roads, water and air",
   "items": [
    {
     "title": "Trams and more road rules",
     "detail": "Player trams, one-way roads, road tunnels, higher road bridges over boats, road works and the council's say over town roads are left for later."
    },
    {
     "title": "Aqueducts and ports",
     "detail": "No canal over a valley or a road yet, no real port town, one boat per quay at a time and no ship breakdowns."
    },
    {
     "title": "The dug canal and the coast",
     "detail": "A dug canal draws dry and the surf and sea flecks read fake."
    },
    {
     "title": "Bigger airports",
     "detail": "A second runway, freeform airports built part by part, noise limits near towns and helicopters on roofs are open ideas."
    },
    {
     "title": "Gaps in the roster",
     "detail": "Long stretches still offer one model per role, such as one aircraft from 2001 to 2039 and no river freight from 1976 to 2039."
    }
   ]
  },
  {
   "group": "Economy and play",
   "items": [
    {
     "title": "Loans, finances and difficulty",
     "detail": "No loans yet, the balance numbers are placeholders and only Cozy's values are used."
    },
    {
     "title": "AI rivals",
     "detail": "Rival companies on the same rules as the player, a league and takeovers are a later milestone."
    },
    {
     "title": "Timetables and expert orders",
     "detail": "Exact timetables, request stops and mixed trains on one line wait for the company milestone."
    },
    {
     "title": "Goals and a first line",
     "detail": "Town requests, subsidies, milestones and a guided first line are planned but not built."
    },
    {
     "title": "Seasonal harvest and demand limits",
     "detail": "Freight that follows the seasons, limits on what a power station takes and stock limits at works are not in."
    },
    {
     "title": "Changing on foot",
     "detail": "Walking between two nearby stations and return trips by intent are not modelled."
    }
   ]
  },
  {
   "group": "Look, world and life",
   "items": [
    {
     "title": "Winter and autumn",
     "detail": "Only spring is tuned; snow is flat white and autumn is thin."
    },
    {
     "title": "Nothing behind glass",
     "detail": "Windows draw as dark rooms, so lit interiors have to be faked with glowing geometry."
    },
    {
     "title": "People close up",
     "detail": "Faces at the nearest zoom, people walking round each other, getting off at a coach door and dogs were left as they are."
    },
    {
     "title": "Steam",
     "detail": "At high game speed exhaust lies along the track as separate puffs, and the plume casts no shadow."
    },
    {
     "title": "Climates and maps",
     "detail": "More climates with their own industries, a map editor and real-world maps belong to a later milestone."
    }
   ]
  },
  {
   "group": "Sound and music",
   "items": [
    {
     "title": "Nobody has listened",
     "detail": "Every sound was judged by measurement; a person must listen before anything with sound goes out."
    },
    {
     "title": "No music",
     "detail": "The era jazz from ragtime to synth is not there yet, and its source is still to be chosen."
    },
    {
     "title": "Stand-in engines",
     "detail": "Diesel, electric and maglev sounds are synthesised placeholders."
    },
    {
     "title": "Voices and local colour",
     "detail": "No murmur of voices, and the countryside beds were recorded abroad."
    },
    {
     "title": "Sound through the eras",
     "detail": "Horses and steam giving way to engines, trams and the hum of electric is decided but not built."
    }
   ]
  },
  {
   "group": "The big milestones still ahead",
   "items": [
    {
     "title": "Two Centuries",
     "detail": "The complete roster, music and news per era, so that 1850 to 2050 feels like a journey and not a reskin."
    },
    {
     "title": "Beyond",
     "detail": "Ports, launch windows and colonies on the Moon and Mars as the next stretch of the same network."
    },
    {
     "title": "Multiplayer",
     "detail": "Co-op and competitive play on the same command design, lobbies and a dedicated server."
    },
    {
     "title": "Mods and Workshop",
     "detail": "All content is already in data files; mod tools and Workshop come after launch."
    },
    {
     "title": "The network diagram and postcards",
     "detail": "A metro-style map of the network on one key and a photo mode with the tilt-shift lens, from the creative direction."
    }
   ]
  },
  {
   "group": "Name and launch",
   "items": [
    {
     "title": "The name",
     "detail": "Waybill is a working title and needs a Steam and trademark check before it is used in public."
    },
    {
     "title": "A legal check",
     "detail": "The approach of rewriting the classics' rules from specs needs a short legal check before a commercial launch."
    },
    {
     "title": "The minimum PC",
     "detail": "The floor is a gaming PC with a modern graphics card; the build currently asks for a 12 GB card."
    },
    {
     "title": "AI disclosure",
     "detail": "Every asset is logged with how it was made, as Steam requires for AI-generated content."
    }
   ]
  }
 ],
 "decisions": [
  {
   "title": "Airport pace",
   "detail": "Aircraft fly true-scale approaches, so a jet makes about 3 trips a year where balance wants 4 to 6; jets pay on the 32 km region but lose on short hops.",
   "options": [
    "Game-scaled airports (shorter approaches and runway time)",
    "More capacity (second runway, more exits)",
    "Leave it"
   ]
  },
  {
   "title": "Publishing v0.5",
   "detail": "Releases and anything public stay Jeroen's decision; v0.4 stays unpublished as he wished.",
   "options": [
    "Publish v0.5 once it passes the speed test",
    "Keep it as a private test build"
   ]
  },
  {
   "title": "Music and sound source",
   "detail": "The plan recommends generated placeholder tracks first and a commissioned jazz composer or band for the final soundtrack; generated audio costs money and needs a licence, so it needs his yes either way.",
   "options": [
    "Generated placeholders now",
    "Commission a composer or band",
    "Free and recorded sources only for now"
   ]
  },
  {
   "title": "Space: the open questions",
   "detail": "Jeroen said yes to space and to a proof soon; the proposal still asks how far it goes, how cargo leaves a world, whether anyone can die and which names to adopt.",
   "options": [
    "Moon and Mars, with a long ship as the ending",
    "Launchers on Earth and Mars, a launch track on the Moon",
    "Nobody dies; losses are cargo, machines and money",
    "Adopt the era names and bird classes"
   ]
  },
  {
   "title": "What ends a Medium game",
   "detail": "When a company stays in distress, the game can stop hard after 24 months, or the bank can take over and sell the worst lines so the world lives on.",
   "options": [
    "Hard stop after 24 months",
    "The bank takes over and sells lines"
   ]
  },
  {
   "title": "The game's name",
   "detail": "Waybill is a working title; it needs a Steam and trademark check.",
   "options": [
    "Waybill",
    "Grand Junction",
    "The Long Line"
   ]
  },
  {
   "title": "The performance floor",
   "detail": "The plan still has to name the minimum graphics card the game must run well on.",
   "options": [
    "Name the card",
    "Set the floor at a 12 GB card",
    "Set it lower and scale the presets"
   ]
  }
 ],
 "numbers": [
  {
   "label": "Vehicle types on sale over 200 years",
   "value": "204 (62 rail, 57 road, 79 water, 6 air)"
  },
  {
   "label": "Distinct road vehicle bodies in v0.4",
   "value": "20 for 57 types"
  },
  {
   "label": "Cargo types",
   "value": "14"
  },
  {
   "label": "Industry types",
   "value": "14"
  },
  {
   "label": "Largest map",
   "value": "32 km (4,096 tiles a side)"
  },
  {
   "label": "Core tests",
   "value": "190"
  },
  {
   "label": "Exported 3D asset pieces",
   "value": "1,090"
  },
  {
   "label": "GPT image jobs",
   "value": "521"
  },
  {
   "label": "Builds published",
   "value": "5 (plus the v0.4 test build)"
  },
  {
   "label": "Frame rate at 3440 x 1440, v0.4, 4 km county in 2030",
   "value": "about 46 fps (target 60)"
  },
  {
   "label": "32 km region, memory and video memory (v0.4)",
   "value": "6.0 GB and 7.4 GB"
  },
  {
   "label": "One game year at the Long pace",
   "value": "about 20 minutes"
  }
 ]
};
