window.STATE = {
 "updated": "2026-11-16 07:10",
 "summary": "Waybill is a playable transport tycoon in a photoreal world: you lay track, roads, canals and airports, run trains, buses, lorries, ships and aircraft on lines, carry passengers to the places they want to go and freight through industry chains, in any year from 1850 to 2050. The build to play is v0.6: the result of the quality pass that followed the verdict on v0.4, \u201cwe need to do better than this really\u201d, and of a second round after playing v0.5c. What changed: it holds 58 frames a second at Ultra on a busy 32 km region at 3440 \u00d7 1440; track is dragged over any land with a solid preview, signals, passing loops and depots that face the line; roads run in eight directions with curves and motorways; the land is lush and cities have a modern core; people dress for their year; there are 138 vehicle models, seven busy showcase games, a guided first game, sound, music and Dutch. Honestly not good enough yet: every house in a street still shares one paint scheme, stations run only north to south or east to west, road stops and depots do not find a working spot by themselves, the interface still needs the full revisit that was asked for, nobody has listened to the sound, and several things were built but not proven by play (two trains passing in a new loop, a signal on a tight curve, buying an aircraft or a ship from a newly placed airport or shipyard). Nothing since v0.3 is published.",
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
   "version": "v0.5c",
   "date": "2026-11-15",
   "name": "The quality pass, first play (test)",
   "what": "The frame rate fixed, building over relief, roads in eight directions, more colour and more vehicles. Played the same evening; the feedback from that session set the night\u2019s work.",
   "published": false
  },
  {
   "version": "v0.6",
   "date": "2026-11-16",
   "name": "The morning build (test)",
   "what": "Everything from the night: placing without stutter, signals, passing loops, depots and stations that line up, a guided first game, Dutch, sound and music, lush land, modern city cores, people of seven eras, seven showcase games and train crashes.",
   "published": false
  }
 ],
 "areas": [
  {
   "name": "The simulation core",
   "status": "solid",
   "now": "A deterministic simulation that plays the whole game without the engine: the same seed and the same actions give the same world on every computer, checked by tests and recorded replays.",
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
   "pass": "Landed in this pass: building over relief as plans with parts and a profile, roads in eight directions, motorways with interchanges, the region generator, harbours, joining track, passing loops, signals at a place or along a stretch, and train crashes."
  },
  {
   "name": "Trains and track",
   "status": "working",
   "now": "Steam to maglev with path signals, track wired or relaid for high speed in place, an elevated maglev guideway, and now many more engines, coaches and wagons per era; trains draw solid and steady.",
   "works": [
    "Smooth curves and gradients, every wheel on the rail",
    "Signals placed one at a time or along a whole stretch",
    "Passing loops and a second track joined to existing track in one drag",
    "Depots turn to face the line and get their own stub of track",
    "Train crashes: on in new games, with a wreck that is cleared",
    "Several locomotives to choose between in most eras, from 1850s singles to maglev"
   ],
   "gaps": [
    "Not proven by play: two trains actually passing in a tool-made loop, and a signal on a tight curve",
    "Stations only run north to south or east to west; stations at any angle exist in the simulation but not yet on screen",
    "The artists\u2019 own lists name engines and coaches that are still not good enough",
    "A guideway station cannot stand where the guideway climbs",
    "Points and crossings are simplified close up"
   ],
   "pass": "A quality pass on every vehicle and more variety per era; ghosting and jitter on moving trains removed."
  },
  {
   "name": "Building tools",
   "status": "working",
   "now": "One drag from A to B over any land gives a line that can be built: cuttings, banks, bridges and tunnels chosen and shown as a solid preview with labels, a side profile and a price. Height alone is never a refusal.",
   "works": [
    "Solid preview of what will be built, with real bridge and tunnel pieces",
    "Side profile and a strip with the options and their keys",
    "Stations size themselves and stay clear of curves; every town has station ground beside it",
    "Placing no longer freezes the game (it froze for up to a second and a half)",
    "The camera keys always stay the camera\u2019s while building",
    "A guided first game that teaches by doing"
   ],
   "gaps": [
    "\u201cMore intuitive now, but not great yet\u201d was the verdict on v0.5c; v0.6 has not been played by a newcomer",
    "A station is refused in a town centre without pointing to the station ground",
    "Road stops and depots do not slide to a spot that works",
    "A quay refused for shallow water does not show where the deep water is",
    "Bridges and tunnels cannot be built on a diagonal or climb",
    "Land shaping is corner by corner"
   ],
   "pass": "The full re-pass that was asked for, then a second round on the v0.5c feedback: stutter, stations, depots, junctions, passing loops, signals."
  },
  {
   "name": "Roads and road vehicles",
   "status": "working",
   "now": "Roads run in eight directions with real curves, motorways with interchanges arrive from 1960, and traffic follows the road without zigzag or jitter.",
   "works": [
    "Diagonal and curved roads, drawn and driven",
    "Motorways and trunk-road upgrades by year on the region",
    "Grass and trees cleared from road corridors; junctions no longer flicker",
    "Lorry bodies per cargo and the missing car decades",
    "Buses feed trains at shared stations, each leg paid"
   ],
   "gaps": [
    "Most town cars are white in v0.6; the cause is found and fixed for the next build",
    "Road surfaces in the 1965 city centre look wrong close up",
    "Grass tufts still show on some dirt lanes",
    "The newest big lorry wins most routes: the road economy needs a decision",
    "Road building was called \u201cwonky\u201d on v0.5c; the second round has not been judged by a player",
    "No player trams, one-way roads or road tunnels"
   ],
   "pass": "Roads rebuilt in the simulation and on screen; traffic rewritten."
  },
  {
   "name": "Water and ships",
   "status": "working",
   "now": "Navigable rivers, canals with locks, quays, shipyards, harbours and coastal counties, with vessels from narrowboat to container ship; sea ports are part of the showcase games.",
   "works": [
    "Locks that close, fill or empty and open in turn",
    "Harbours on the coast with quays and cranes",
    "New hulls: river steamer, bulk coaster, hydrofoil, water bus, container barge",
    "Ships are bought at a shipyard and call at quays"
   ],
   "gaps": [
    "Not proven by play: placing a quay and a shipyard and buying a ship from it",
    "Existing coasts have no jetties or harbours of their own yet",
    "The ship artists\u2019 list names hulls that are still not good enough",
    "No aqueducts, one boat per quay at a time",
    "The sea at the launch site shows a repeating pattern"
   ],
   "pass": "New hulls and liveries, harbours, and the buy window for ships."
  },
  {
   "name": "Air",
   "status": "rough",
   "now": "Airports from grass field to international, more aircraft types with company liveries, and a full flight model.",
   "works": [
    "Take-off, landing, folding gear, turning propellers, contrails",
    "A buy window for aircraft at an airport",
    "The airport size key no longer clashes with the camera"
   ],
   "gaps": [
    "Not proven by play: placing an airport and buying an aircraft from it",
    "A jet makes about 3 trips a year where balance wants 4 to 6 (waiting for a decision)",
    "In the film the aircraft flies over empty fields: airports are not yet a place worth looking at",
    "The aircraft artists\u2019 list names what is still not good enough"
   ],
   "pass": "New aircraft types and liveries; how to buy an aircraft made visible."
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
    "No seasonal harvest and no demand limit at power stations",
    "Processing works store without limit, which can hide a broken chain"
   ],
   "pass": "Industries show struggling and closed states that read from above."
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
    "The demand map showed nothing on the big region in the morning test, and the freeze reported on its button is not explained yet",
    "No changing on foot between two nearby stations",
    "No timetables yet, so waits are estimates"
   ],
   "pass": "The demand map is on the N key; it is being checked on the busy 1965 region."
  },
  {
   "name": "Towns and eras",
   "status": "working",
   "now": "Towns grow by being served and renew through the eras; from 1960 a city grows a core of offices and towers with suburbs round it, and a 2030 start now opens on a skyline.",
   "works": [
    "27 modern pieces: offices, towers, flats and suburbs that make a shaped skyline",
    "36 civic buildings: town halls, schools, churches, hospitals, markets",
    "People dressed for their year in seven eras, from 1870 to 2045",
    "Street trees, gardens and readable shop signs with made-up names"
   ],
   "gaps": [
    "Every house in a street still shares one paint scheme: the per-building paint codes do not reach the screen (found, not solved)",
    "Some showcase games open on fields instead of a town",
    "People are dressed by era but not yet coloured one by one",
    "The civic artists\u2019 list names buildings that are still not good enough"
   ],
   "pass": "The modern city and people of their time, both asked for by name."
  },
  {
   "name": "The world and maps",
   "status": "working",
   "now": "The 32 km region is the default map, generated from a seed and a year: coves and headlands, moor and dales, hedged fields, towns with old cores, a main line, sea ports and motorways planned by year.",
   "works": [
    "Seven showcase games, one per era from 1860 to 2059, busy with every kind of transport",
    "62 places, each with station ground beside it",
    "The same seed and year make the same world on every computer",
    "Loads in about 14 seconds"
   ],
   "gaps": [
    "From high up the fields still read as a quilt",
    "Hedge staircases may still show in places",
    "No 2048 maglev line and no double-track junction station in the showcase games",
    "Only one climate; no map editor and no real-world maps"
   ],
   "pass": "The region generator moved into the simulation; the showcase games were built on it."
  },
  {
   "name": "Look and graphics",
   "status": "working",
   "now": "A photoreal world through a tilt-shift lens. The grey, hazy look is gone: a richer grade is the default, the land is lush, and each era has its own light.",
   "works": [
    "Lush land: richer grass, more trees, gardens and street trees",
    "A look per era that really runs",
    "Real tree species, hedges and weathered surfaces",
    "Steam, smoke and lamps that move"
   ],
   "gaps": [
    "\u201cStill greyish\u201d was the verdict on v0.5c; v0.6 is the answer and has not been judged yet",
    "Houses of one type share one colour (see Towns)",
    "Vegetation appearing while zooming has not been judged in motion",
    "Winter and autumn are thinner than spring and summer",
    "Glass draws as a dark room; nothing is seen inside a window"
   ],
   "pass": "A colour pass on grade, light, land and materials, then a second round for lushness."
  },
  {
   "name": "Performance and memory",
   "status": "solid",
   "now": "On a busy 32 km region at 3440 \u00d7 1440 and Ultra, every camera path held 58.3 frames a second in 1965 and 58.6 in 2030, against a cap of 59. The cap sits just under the screen\u2019s refresh rate so FreeSync stays in range.",
   "works": [
    "Zoomed in, zoomed out, panning and following a vehicle all hold the rate",
    "Placing track and buildings no longer freezes",
    "Memory peaks at 7.4 to 7.8 GB",
    "A governor lowers the internal resolution before the frame rate can drop",
    "Loading takes about 14 seconds with a loading screen"
   ],
   "gaps": [
    "1.2 to 1.7 % of frames still fall under 48 a second, so FreeSync is unproven on the real monitor: it needs a session with FreeSync switched on",
    "Ray tracing is off by default (a switch is in settings): waiting for a decision",
    "A fully dressed map with every far object loaded would need streaming",
    "Thousands of trains are untested at this quality"
   ],
   "pass": "The first priority of the pass. v0.4 ran at about 46 frames a second on a small map; the cause of the black screens was FreeSync under 48."
  },
  {
   "name": "Interface",
   "status": "rough",
   "now": "A sleek, era-neutral PC interface at desktop density, now in Dutch as well as English, with a guided first game, a checked key table and nothing shown that cannot be built yet.",
   "works": [
    "Dutch: about 1,400 texts; the game follows the language of Windows",
    "Every key looked at; no key does two things",
    "Tools you cannot build yet are hidden",
    "The crash in the Controls settings is fixed",
    "Buy windows for trains, road vehicles, ships and aircraft"
   ],
   "gaps": [
    "\u201cConfusing, this needs a complete revisit\u201d: three directions are drawn and wait for a choice; none is built",
    "\u201cShow the gap\u201d on a broken line has not been proven with a real break",
    "The demand map (see Passengers)",
    "Menu art and a logo wait for the name"
   ],
   "pass": "Fixes for what was reported; the revisit itself is the next run\u2019s work."
  },
  {
   "name": "Sound and music",
   "status": "rough",
   "now": "The game has sound and music: 71 effects and 18 pieces of music across the eras, generated and wired in, starting without errors.",
   "works": [
    "Engines, horns, stations, building, interface and weather effects",
    "Music that follows the era",
    "Separate volumes for effects, ambience, interface and music"
   ],
   "gaps": [
    "Nobody has listened to it in the game: it was only confirmed to start and play",
    "All of it is generated placeholder; a final soundtrack is still an open choice",
    "No voices",
    "The film has music but no sound of the world under it"
   ],
   "pass": "Asked for after playing v0.5c; made and wired in one night."
  }
 ],
 "next": [
  {
   "title": "Play v0.6 and say what is still wrong",
   "why": "The night answered the v0.5c list; only play shows which answers hold. The list of things not proven is in the newest journal entries.",
   "when": "now"
  },
  {
   "title": "Houses that differ: the paint codes",
   "why": "Every house in a street shares a scheme because the per-building paint code is lost on its way to the screen. It is the largest remaining cause of sameness in towns.",
   "when": "next run"
  },
  {
   "title": "The interface revisit",
   "why": "Three directions are drawn; once one is chosen it is built across every window.",
   "when": "next run, after the choice"
  },
  {
   "title": "Stations at any angle",
   "why": "Asked for after v0.5c. The simulation side exists; the game side is still to do.",
   "when": "next run"
  },
  {
   "title": "Building, third round",
   "why": "The station ground pointer, road stops and depots that find their own spot, deep water shown for quays, and whatever a newcomer trips over in v0.6.",
   "when": "next run"
  },
  {
   "title": "Prove what was built",
   "why": "Two trains passing in a new loop, a signal on a curve, an airport, a quay and a shipyard placed and bought from, the demand map, \u201cShow the gap\u201d.",
   "when": "next run"
  },
  {
   "title": "Vehicles: the not-good-enough lists",
   "why": "Each vehicle artist left a plain list of models that do not reach the standard of the express locomotive.",
   "when": "next run"
  },
  {
   "title": "Name, logo and menu art",
   "why": "Ten name candidates with logos are drawn; a choice and a trademark search come first.",
   "when": "after the choice"
  },
  {
   "title": "The benchmark playtest",
   "why": "A build passes when a newcomer plays it for two hours alone without being asked; every place they get stuck becomes a fix.",
   "when": "when v0.6 holds up"
  },
  {
   "title": "Space as part of the game",
   "why": "The launch site and a first launch exist as a first look on their own branch; making it a place you deliver to is the real work.",
   "when": "later"
  },
  {
   "title": "The Company: finance, rules and tiers",
   "why": "Loans and finance screens, local authorities, automatic replacement, difficulty tiers, goals and subsidies, timetables and trams.",
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
     "title": "Goals",
     "detail": "Town requests, subsidies and milestones are planned but not built. The guided first game exists."
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
     "title": "A final soundtrack",
     "detail": "The 71 effects and 18 pieces of music are generated placeholders; a commissioned composer or band is still the plan\u2019s recommendation for the real soundtrack."
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
     "detail": "Waybill is a working title; ten candidates with logos are drawn and any choice needs a Steam and trademark check."
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
   "title": "The game\u2019s name and logo",
   "detail": "Waybill is a working title you do not like. Ten candidates are drawn with logos; the pick of both the designer and the coordinator is Viaduct, version B. Any choice needs a trademark and store search before it is used.",
   "options": [
    "Viaduct (B)",
    "Another of the ten",
    "None of these: another round"
   ]
  },
  {
   "title": "The interface direction",
   "detail": "Three redesign directions are drawn as pictures (A, B, C). The designer\u2019s pick is A.",
   "options": [
    "A",
    "B",
    "C"
   ]
  },
  {
   "title": "The look",
   "detail": "Look B, the richer grade, is the default in v0.6. C and D go further.",
   "options": [
    "Keep B",
    "Try C",
    "Try D"
   ]
  },
  {
   "title": "Ray tracing by default",
   "detail": "Off by default to hold the frame rate; a switch is in the settings.",
   "options": [
    "Leave it off",
    "On for Ultra"
   ]
  },
  {
   "title": "Readable shop signs",
   "detail": "Shops carry made-up names you can read from the game camera.",
   "options": [
    "Keep them",
    "Make them quieter",
    "Remove them"
   ]
  },
  {
   "title": "The road economy",
   "detail": "The newest big lorry wins most routes, so rail has too little reason on short hauls.",
   "options": [
    "Raise road running costs with size",
    "Cap lorry capacity by era",
    "Leave it"
   ]
  },
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
   "title": "Publishing",
   "detail": "Nothing since v0.3 is published. v0.4, v0.5c and v0.6 are private test builds.",
   "options": [
    "Publish v0.6 once it holds up in play",
    "Keep it private"
   ]
  },
  {
   "title": "Space: the open questions",
   "detail": "Space has a yes, and a first launch is on film. The proposal still asks how far it goes, how cargo leaves a world, whether anyone can die and which names to adopt.",
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
   "label": "Frames a second, busy 32 km region, 3440 \u00d7 1440, Ultra",
   "value": "58 (cap 59)"
  },
  {
   "label": "The same on v0.4, on a small map",
   "value": "about 46"
  },
  {
   "label": "Memory at its peak",
   "value": "7.4 to 7.8 GB"
  },
  {
   "label": "Loading a region",
   "value": "about 14 s"
  },
  {
   "label": "Vehicle models",
   "value": "138"
  },
  {
   "label": "Showcase games",
   "value": "7 (1860 to 2059)"
  },
  {
   "label": "Eras of clothing",
   "value": "7"
  },
  {
   "label": "Civic buildings / modern city pieces",
   "value": "36 / 27"
  },
  {
   "label": "Sound effects / pieces of music",
   "value": "71 / 18"
  },
  {
   "label": "Texts in Dutch",
   "value": "about 1,400"
  },
  {
   "label": "Largest map",
   "value": "32 km (4,096 tiles a side)"
  },
  {
   "label": "Builds published",
   "value": "5 (v0.3 is the newest)"
  }
 ]
};
