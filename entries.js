// The journal's content. Newest entry first. Edited by the coordinator; published with tools/journal/publish.sh.
window.JOURNAL = {
  date: "Sunday 15 November 2026",
  updated: "16 Nov, 02:08",
  lead: "You played v0.4 and said <b>“we need to do better than this really”</b>. This is the pass that answers it: performance on your machine, building that makes sense, real roads, colour, people of their time, and vehicles worth looking at. v0.4 stays unpublished; the next build is <b>v0.5</b>.",
  facts: [["8", "points from you"], ["17", "specialists at work tonight"], ["132", "vehicle models, was 70"], ["171", "new textures and liveries"]],
  note: "<b>Honest status:</b> v0.5c is the build to play tonight: the 32 km region by default, the performance fixes and the new building tools, with known faults (see the newest entries). v0.5d follows later tonight with the rest of the art. Many pictures below are still from development builds and artists' review renders.",

  points: [
    { n: 1, tag: "Performance", prio: true, title: "It lags; make Ultra playable, 32 km by default", quote: "the game is lagging a lot, both zoomed in but also zoomed out", stage: 3,
      status: "In the build you can play: 60 to 80 frames a second in every view but fast panning (49 to 58), up from 15 to 26 this morning; zooming 60, the fastest speed 65. Left: panning hitches and a rise in memory." },
    { n: 2, tag: "Building", prio: true, title: "Building rails and roads is confusing", quote: "especially when dealing with height differences … it's not fun", stage: 1.5,
      status: "Track is never refused for height and goes round houses. The solid preview, the labels and a side profile now run in the game; not merged yet." },
    { n: 3, tag: "Roads", title: "Zigzag roads, wonky traffic", quote: "no diagonal roads makes the thing go zigzag and looks hilarious with the lorries", stage: 1.5,
      status: "Roads drawn in eight directions with curves, kerbs and markings are switched on, with rewritten traffic that keeps its lane. Seen in the game; in tonight\u2019s next build." },
    { n: 4, tag: "Colour", title: "Bland, grey, industrial", quote: "i want more colour in every era", stage: 1.5,
      status: "Four looks captured in the game for you to choose. New brick, roofs and per-building paint are made and wait for the next art import." },
    { n: 5, tag: "People", title: "People in 2050 look like the 1800s", quote: "people in 2050 still look like 1800s", stage: 1.5,
      status: "All 122 figures for seven new eras are built and the game dresses people by year. They reach the game with the next art import." },
    { n: 6, tag: "Roads", title: "Highways in later eras", quote: "what about highways the further we get into the game?", stage: 1.5,
      status: "Motorways with three lanes each way, a central barrier, interchanges and traffic are on screen in a 2030 game. In tonight\u2019s next build." },
    { n: 7, tag: "Vehicles", title: "Every vehicle to the locomotive's standard", quote: "the locomotive looks great, others are ‘mediocre at best’", stage: 1.5,
      status: "Nine new steam engines, thirteen aircraft in company colours, rebuilt lorries and barges are made. The modern locomotives and coaches are still to be rebuilt. Nothing seen in the game yet." },
    { n: 8, tag: "Variety", title: "More variety per era", quote: "more variety on trains/vehicles/planes/boats per era.. just like in ttd", stage: 1.5,
      status: "132 models on 159 bodies in tonight\u2019s second build, up from 70 on 78. Road transport now starts in 1850, and every mode has a choice in every decade." }
  ],

  entries: [
    { time: "02:08", tags: ["World", "Colour"], title: "2030 looks like 2030: a city with a modern core, in the game",
      body: `<p>You said: \u201Ccities have a beautiful core of modern offices and suburbs around it.. I am not feeling that yet\u201D, and that a new game in 2030 \u201Cdoes not feel like 2030 at all\u201D. This is a city in a new 2030 game tonight, from the game itself.</p>
      <ul><li><b>A downtown that reads from far:</b> 17 to 20 towers per city among 56 to 73 offices and blocks of flats, 24 different tower and office types, shaped as a skyline, tallest in the middle.</li>
      <li><b>Green suburbs:</b> street trees on every straight street, lawns round the estates, planted squares and greens: about 15,500 trees in the towns of a 2030 region, 9,300 in 1965.</li>
      <li><b>The edges:</b> retail and business parks by the roads out, and nine wind farms on the hills from 1995.</li>
      <li><b>In the streets:</b> solar roofs, electric-car chargers, bike-share docks.</li>
      <li><b>Station ground:</b> a level, straight site beside the centre of all 62 cities, towns and villages.</li>
      <li><b>Country:</b> copses, soft wood edges, willows by the water, more trees in the hedgerows, and motorways cleared of trees.</li></ul>`,
      figs: [["world_2030_city_skyline.jpg", "A city in a new 2030 game, from the game: a core of towers and offices with tree-lined suburbs round it"]], stack: true,
      bad: `This frame was taken before the skyline was shaped tallest-in-the-middle; the shaped version and the 1995 city have not been looked at in the game yet. The suburbs are still mostly older brown-roofed houses, so the ring between the towers and the edge looks older than 2030. Hedges still show as tile staircases at shallow angles, and from very high up the fields still read as a quilt.` },

    { time: "01:53", tags: ["Roads"], title: "The zigzag roads are gone, and there are motorways",
      body: `<p>The new road surfaces are switched on, seen in motion in the game at 3440 \u00D7 1440 on the 32 km region, and handed over for the next build. Roads run in <b>eight directions with curves</b>, with kerbs, pavements and markings, and traffic keeps its lane on them. Town cars cross road bridges again.</p>
      <p>In a 2030 game the <b>motorways</b> are on screen and driven: three lanes each way, a central barrier, lamps, a gantry sign, cars and vans in lane.</p>`,
      figs: [["roads_surfaces_1965.jpg", "A 1965 town in the game with the new road surfaces"], ["roads_motorway_2030.jpg", "A motorway in a 2030 game"]],
      bad: `In the city centre close up there were tan gaps and stray pavement islands inside blocks of road; a fix is in the build but has not been seen yet. A full-grown tree stands on the motorway's hard shoulder: trees are not yet cleared from a road's whole width. The jitter you saw on roads is next. The 1990s motorway look has not been checked.` },

    { time: "01:49", tags: ["Colour", "Sound"], title: "A lusher land, and the game has sound and music",
      body: `<p><b>A lush land.</b> The first piece of tonight's colour work is in: the land is a deep, living green instead of olive, every tree has its own green, shade keeps its colour, and there is less haze.</p>
      <p><b>The towns are still beige.</b> In the town half of that picture every block was the same colour, although each building should have its own paint. A first check suggested the colour data on the models was being lost on the way into the game; a second, correct check showed it is intact (the first used a broken test). So the cause lies elsewhere, most likely in the material that should apply the paint, and it is being traced now.</p>
      <p><b>Sound and music.</b> 71 sound effects and 18 pieces of music were made with ElevenLabs and are in the game: three pieces of music per era plus a main-menu theme, playing one at a time with rests between; engines for steam, diesel and electric trains (electric trains no longer chuff), horns, town sounds by era, the sea, road vehicles, ships, aircraft taking off and landing, breakdowns, train crashes, track being laid, and a rocket launch. About 36,000 of your 76,000 ElevenLabs credits were used, inside the limit of half.</p>`,
      figs: [["colour_lush_1965.jpg", "1965 in the game: as built on the left, lush on the right. The field changed; the town had not yet"]], stack: true,
      bad: `Nobody has listened to any of the sound or music: it was judged by measurement only (loudness, clipping, loops), so it may sound wrong in ways numbers do not show. Why the town buildings do not show their own paint colours is not yet known.` },

    { time: "01:29", tags: ["Building", "Interface"], title: "Halfway through the night: most of your list is answered",
      body: `<p>Two hours in, these points from your playtest are done and handed over for the three o'clock build:</p>
      <ul><li><b>The crash</b> when changing controls in Settings: fixed.</li>
      <li><b>Keys:</b> one table of every key, with no clash anywhere. The camera keys never change with a tool in hand, and each tool shows its keys on its strip.</li>
      <li><b>Nothing shown that cannot be built yet:</b> tools, modes and options stay hidden before their year.</li>
      <li><b>\u201CHow do I buy aeroplanes?\u201D</b> After you place an airport, a quay, a shipyard or a depot, a small note says what it is for and its button takes you to the next step.</li>
      <li><b>The demand button</b> no longer freezes the game: it shows the biggest flows only.</li>
      <li><b>Dutch:</b> every text in the game goes through one table, including the building hints, the reasons the game gives, the news and the names of things. The language is chosen in Settings or on the main menu, and the game starts in your computer's language.</li>
      <li><b>A train with a broken line</b> now says so on the train, in its window and in the list of lines, with a button that flies to the gap.</li>
      <li><b>Train crashes:</b> two trains on a line with no signals protecting them crash where they meet; a signalled passing loop keeps them safe. The wreck blocks the line for about two weeks and costs money to clear. It can be switched off.</li>
      <li><b>A showcase row</b> on the new-game screen for the six era games.</li></ul>
      <p>Because the main work is on track, one more specialist has started on a first look at <b>space</b>: a spaceport on the region in the late 2040s, fed by your trains and lorries, and a launch you can watch.</p>`,
      bad: `The showcase games loading from the new-game screen, the new buy window and the broken-line message have not been seen in a run yet. Still to come tonight: roads drawn in eight directions, the lusher world, less vegetation popping in, placing things without stutter, and sound and music.` },

    { time: "01:12", tags: ["Vehicles", "Building"], title: "The jittering trains: measured, and gone",
      body: `<p>You said trains \u201Clook somewhat transparent\u201D with \u201Cweird jittering\u201D. Measured live at 3440 \u00D7 1440 while following a train on a busy 1965 game, the old code made a train <b>stall and jump about 30 times every ten seconds</b>; the new code, none.</p>
      <ul><li><b>The stall and jump:</b> each frame drew vehicles from the simulation's newest step, which was often one step behind the clock. Every frame now draws from the step that holds its exact moment.</li>
      <li><b>The smear:</b> ships, aircraft and road vehicles never told the picture-sharpening step where they had been, so it smeared them. Fixed.</li>
      <li><b>A third cause:</b> any train turning round anywhere on the map took the motion data away from every train for one frame.</li></ul>
      <p>Also tonight: <b>junctions</b>. The geometry was right, but a drag that started beside a line did not join it, a branch could leave at a right angle no train can take, and points at the end of a curve had no room. A drag now snaps at both ends and tries both bends. And <b>six showcase games</b> exist as first versions, one per era from 1853 to 2030, each with 21 to 37 lines, about 30 trains, 45 to 67 road vehicles, boats and, from 1935, aircraft.</p>`,
      bad: `The \u201Ctransparent\u201D look could not be reproduced in a recording, only the jitter and the smear, so the real test is your eye on the next build. The showcase games have no double-track main line with a big junction station yet, and no passenger ships.` },

    { time: "00:58", tags: ["Interface"], title: "Three directions for the interface, for you to choose",
      body: `<p>You said the interface is confusing and needs a complete revisit. Twelve things wrong today were written down after playing it, and three directions were drawn for the whole interface, each at 3440 \u00D7 1440 over a real frame of the game, in the same four moments: a calm game, building a line, a train's window, the new-game screen.</p>
      <ul><li><b>A, a dock on the left</b> with a docked inspector: tools and windows live at the left edge, and what you select opens in one fixed place instead of floating windows.</li>
      <li><b>B, one bar at the bottom</b> with sheets that rise from it: everything starts from a single bar, and the screen is otherwise empty.</li>
      <li><b>C, menus with words</b> along the top and a tool palette: every menu is labelled in words rather than icons.</li></ul>
      <p>The designer's pick is <b>A</b>, with B's plainer new-game screen and C's word labels shown on hover. Open the pictures full size to compare; each direction also has a calm view and a new-game screen.</p>`,
      figs: [["ui_direction_a_build.jpg", "A: building a line"], ["ui_direction_a_train.jpg", "A: a train's window"], ["ui_direction_b_build.jpg", "B: building a line"], ["ui_direction_b_train.jpg", "B: a train's window"], ["ui_direction_c_build.jpg", "C: building a line"], ["ui_direction_c_train.jpg", "C: a train's window"]],
      bad: `These are pictures, not the game: none of it is built. They show no track preview while building, the live view of the train is soft, and there is no mini-map in them yet. Whichever you choose gets built in the next run.` },

    { time: "00:44", tags: ["World", "Building"], title: "A modern skyline, and four building points done",
      body: `<p><b>The modern city</b> now has 27 pieces for the map to build from: offices from 1962 to 2032, towers in concrete, banded glass, all-glass and timber, two landmark towers of 34 and 36 floors, colourful mid-rise flats, a shopping centre, suburban houses with solar roofs, wind turbines with turning blades, and street pieces such as an electric-car charging bay and bike share. Every tower carries its own invented name on a rooftop sign.</p>
      <p><b>Building</b>, from your list, done tonight and on their way into the next build:</p>
      <ul><li><b>Camera:</b> W A S D always move the camera, in every tool, and the right-mouse drag is faster.</li>
      <li><b>Signals</b> place, with a preview on the track that shows which way they face.</li>
      <li><b>Passing loops</b> in one go: a second track beside the line with points at both ends and its signals. A drag that ends near existing track joins it.</li>
      <li><b>Depots</b> turn to face the track and lay their own connection.</li>
      <li><b>Stations</b> no longer overlap an incoming curve, platforms size themselves for the train, and every town keeps a straight station ground beside its centre.</li></ul>
      <p>Also done: a <b>first game that teaches by doing</b>, one sentence at a time, with the towns marked in the world and the next button lit; it includes Dutch.</p>`,
      figs: [["town_city_2035_street.jpg", "Part of the 2035 city centre from the game camera (artist's render, not yet in the game)"]], stack: true,
      bad: `Stations at any angle are not coming tonight: platforms still run north to south or east to west, and the game now says so and points to the town's station ground. The modern buildings are still grey-beige apart from the coloured flats and the shopping centre, and glass cannot be judged until it is seen in the game.` },

    { time: "00:03", tags: ["Vehicles", "World", "Building"], title: "Night, first build: v0.5d, and three of your points already answered",
      body: `<p><b>v0.5d</b> is in place, played through first. It holds everything that was waiting before your playtest: the evening's last art (the game now has 1,498 art assets), the cheaper far-away people, 132 vehicle models, the interface's new buy window and the building lead's latest preview.</p>
      <p>From your list, in the first hour of the night:</p>
      <ul><li><b>\u201CSignals can't be placed at all\u201D:</b> the cause is found. The simulation accepted signals, but the click missed the rails on big curves, because curves are drawn smoothly and stored as steps. A signal is now picked against the track as drawn, faces the right way and says why when it cannot stand somewhere. It is being wired into the tool.</li>
      <li><b>\u201CTrains look somewhat transparent\u201D:</b> moving vehicles were smearing because the picture-sharpening step did not know they were moving. Fixed for ships, aircraft and road vehicles; trains follow.</li>
      <li><b>\u201CA beautiful core of modern offices and suburbs around it\u201D:</b> from the late 1950s a city's centre is now rebuilt block by block into offices and towers, tallest in the middle: 80 tall buildings on the test region in 1965, 221 in 1995, 304 in 2030. Twenty new modern buildings are made for it: offices, glass and timber towers, coloured flats, a shopping centre, solar-roofed houses, wind turbines.</li>
      <li><b>\u201CHard to line up stations\u201D:</b> every city, town and village now keeps a level strip beside its centre for a station, on the same heading as its high street, with room for the track to arrive.</li></ul>`,
      bad: `None of these four is in v0.5d itself; they land in the next builds tonight. In the play-through a first train reached its town but did not visibly earn before the year's end; that is being looked into now.` },

    { time: "23:47", tags: ["Name and logo"], title: "Logos, second round: game titles over the menu picture",
      body: `<p>The second round treats the five best names as game titles, each shown over a main-menu picture with its small icon. The image maker's own order, best first: <b>Viaduct B</b> (bronze capitals under three rising arches with a lamp), <b>Ferrovale A</b> (rails running into a green vale), <b>Marlvale B</b> (gold script with a vale and sunrise), <b>Ferrovale B</b> (a signal with a sunrise lamp).</p>
      <p>These are direction art: the one you choose gets redrawn cleanly, and the menu pictures get remade from the game itself.</p>`,
      figs: [["names_logos_round2.jpg", "Ten title treatments for five names, over a menu picture, with the small icon"]], stack: true,
      bad: `Viaduct A reads as \u201CWiaduct\u201D. Marlvale A and Permanent Way B look like mobile-game titles. Ferrovale A's bevel is too heavy, and Marlvale B leans towards a wine label. The background pictures are generated illustrations, not the game.` },

    { time: "23:41", tags: ["Name and logo"], title: "Ten names to choose from, first logos",
      body: `<p>You said you hate the name Waybill and love a good logo. Ten candidates, ranked by the image maker, each checked on the web against existing games and companies: <b>Viaduct, Marlvale, Ferrovale, Permanent Way, Eraline, Waymark, Throughline, Common Carrier, Hinterline, Tessel</b>. Eight more were thrown out while checking because they are taken or too close to something that exists.</p>
      <p>The choice is yours. Whichever you pick needs a proper trademark search before it goes public; the web check is not that.</p>`,
      figs: [["names_logos.jpg", "The ten names with a first logo each, on light and dark, with an app icon"]], stack: true,
      bad: `These first logos are clean but read as software-company marks, not as the title of a game. A second round with bolder, more crafted treatments for the five best names is being made, along with main-menu pictures. The last one, Tessel, has a mark too close to a famous software logo.` },

    { time: "23:34", tags: ["Building", "Performance", "Colour"], title: "You played v0.5c: what you said, and the plan for the night",
      body: `<p><b>What you said.</b> The frame rate is much better. Building is more intuitive, but not great yet. And a long list of things that got in the way:</p>
      <ul><li><b>Controls:</b> W A S D fight the build tools, so the camera cannot move while building; tilting and panning with the right mouse button is slow; R for airport size clashes too; changing controls in Settings crashes the game.</li>
      <li><b>Building:</b> stations only fit at certain angles and overlap curves; depots are hard to turn; junctions do not line up; a second track for passing will not attach; signals cannot be placed; placing things stutters; road building is wonky.</li>
      <li><b>The interface</b> is confusing and needs a complete revisit: it shows things that cannot be built yet, there is no guidance, it is unclear how to buy aircraft or what a shipyard is, and the demand button freezes the game.</li>
      <li><b>The world:</b> grass through roads, jitter on roads, vegetation popping in while zooming, trains that look half transparent and jitter, a 2030 game that does not feel like 2030, cities without a modern core, and still greyish: it needs to feel lush.</li>
      <li><b>Wishes:</b> Dutch, sound and music, train crashes, a busy showcase game for every era, generated menus and a logo, and a better name than Waybill.</li></ul>
      <p><b>The plan for the night</b>, in this order: controls and building; the interface's worst traps, a first game that teaches by doing, and Dutch; a lush world and cities with a modern core; six showcase games; sound effects and music; names and logos to choose from; with the frame rate guarded throughout. Fifteen specialists work until the morning. A build called v0.6 should be ready by about half past eight, played through and measured first, together with a short film of everything the game has to offer.</p>`,
      bad: `A complete restyle of the interface cannot be built and proven in one night. Tonight removes the traps and adds the guidance; the restyle arrives as two or three directions in pictures for you to choose from.` },

    { time: "22:11", tags: ["Performance"], title: "v0.5c measured: 60 and more in almost every view",
      body: `<p>The build you can play now was measured on the busy 1965 region at 3440 \u00D7 1440 on Ultra. This morning these views ran at 15 to 26 frames a second.</p>`,
      chart: { type: "bars", title: "Frames a second in v0.5c (in brackets: tonight's first build)", goal: 60, max: 85, goalLabel: "60 frames a second: the target everywhere",
        rows: [["High street", 80, "80 (51)"], ["Biggest town", 79, "79 (73)"], ["Busiest platform", 77, "77 (47)"], ["Opening view", 75, "75 (69)"], ["Fastest game speed", 65, "65 (8)"], ["Following a train", 64, "64 (51)"], ["Zooming in and out", 60, "60 to 63 (7 to 17)"], ["Whole region", 60, "60 (61)"], ["Panning fast", 49, "49 to 58 (11 to 16)"]] },
      bad: `Fast panning still dips under 60 with hitches of 46 to 80 ms, zooming has occasional frames of 32 to 37 ms, and the platform showed one frame of 156 ms. Memory went up in this build: 10 GB of memory and 9.7 GB of video memory at the peak, against 6.6 and 8.4 in the first build; that is being chased next, because it is too much for a 16 GB PC.` },

    { time: "21:55", tags: ["Performance", "Building", "World"], title: "v0.5c is ready to play",
      body: `<p>The second build of the evening is in place. Checked at 3440 \u00D7 1440 before hand-over: a new game opens on the <b>32 km region</b>, makes it behind the loading screen, and opens on its largest town in 1905: Victorian brick terraces, shops, chapels and civic buildings, with no modern towers and no white sheets. A line over a hill builds.</p>
      <p>New over v0.5b: the big performance fix (steady views 72 to 77 frames a second, loading in 14 seconds), the zoom and pan fix (42 to 55 where there were 7 to 17), real bridges and tunnel mouths in the track preview, double track with signals in one drag (Q and R), and the propeller fix.</p>`,
      bad: `Not in it: the evening's last art batch (the 36 landmark buildings with their names, the rebuilt 1905 people, later-era town colour, the newest trains, lorries and ships) and the cheaper far-away people, so crowds may cost frame rate; both come in v0.5d later tonight. Still true: the track preview is a pale band, straight lines cross the land while dragging, the road preview steps on gentle diagonals, town cars turn back at bridges over water, and roads still zigzag because the new road surfaces are off. Zooming was measured on the same code but not re-checked on this exact package.` },

    { time: "20:50", tags: ["Performance"], title: "Zooming: from 7 to 17 frames a second up to 42 to 55",
      body: `<p>The fix aimed at moving the camera is measured. Woods and hedges are now grown in the background a little at a time, the game releases less per frame, and the ground catches up within a smaller budget. On the busy 1965 region at 3440 \u00D7 1440:</p>`,
      chart: { type: "bars", title: "Frames a second while the camera moves (lowest measured)", goal: 60, max: 70, goalLabel: "60 frames a second: the target everywhere",
        rows: [["Zooming, first build", 7, "7 to 17"], ["Zooming, with the fix", 42, "42 to 55"], ["Panning fast, first build", 11, "11 to 16"], ["Panning fast, with the fix", 46, "46 to 57"]] },
      bad: `Still short of 60 while the camera moves: rebuilding the ground costs 4.6 ms a frame while zooming, the railway 4.6 ms, steam 2.8 ms, and preparing the picture for the graphics card still spikes. The fastest game speed is not fixed yet.` },

    { time: "20:29", tags: ["Performance", "Building"], title: "v0.5b is ready to play",
      body: `<p>The first build of the pass that you can play is in place. It was played through at 3440 \u00D7 1440 before hand-over: the new building tools work (the strip, the side profile, the steepest gradient flagged, prices; a line over a hill; a road with a bus stop, a lorry bay and a depot), platforms and a depot were built, and the performance test was run on it.</p>
      <p><b>Play the 4 km county, not the region, in this build.</b></p>`,
      bad: `Known in v0.5b: a new 1905 game on the 32 km region opens on a town with modern stand-in towers, and some tall buildings carry large broken white sheets over the streets (being tracked down). Zooming and fast panning stutter. The track preview is a pale flat band, faint straight lines cross the land while dragging, and the road preview still steps on gentle diagonals. Propellers show grey discs, town cars turn back at bridges over water, and crowds are drawn at full detail. Most of these are fixed in v0.5c, due later tonight; the new road surfaces are not in it either, because they crashed in their test.` },

    { time: "20:14", tags: ["Performance"], title: "Honest numbers for tonight's first build: moving the camera is still slow",
      body: `<p>A second, stricter test of tonight's first build on the busy 1965 region confirms the steady views (61 to 73 frames a second for the opening view, the biggest town and the whole region) and shows where it still fails:</p>
      <ul><li><b>Zooming</b> from close up to the whole region and back: 7 to 17 frames a second.</li>
      <li><b>Panning fast</b>: 10 to 16.</li>
      <li><b>A crowded platform and a high street</b>: 47 to 51, with hitches.</li>
      <li><b>The fastest game speed</b>: 8 frames a second, with one freeze of over eleven seconds.</li></ul>
      <p>So in the first build you will feel zooming, panning and the fastest speed. The second build tonight carries the fix that halves the game's own cost in steady views and cuts loading to 14 seconds. A further fix aimed at zooming and panning (woods and hedges grown in the background, less work per frame while the camera moves) is written and being measured.</p>`,
      bad: `Zooming, fast panning and the fastest game speed are not fixed in either of tonight's builds unless the zoom fix is measured in time. The eleven-second freeze at fastest speed is being traced to the signals.` },

    { time: "20:10", tags: ["Variety"], title: "132 models: the line-up is nearly all built",
      body: `<p>For tonight's second build the line-up reaches <b>132 models on 159 different bodies</b>; this morning it was 70 on 78. New in this batch:</p>
      <ul><li><b>Rail:</b> a shunter, a heavy diesel, a railcar, an electric unit, an intercity coach and a mail van.</li>
      <li><b>Road:</b> lorries for the 1960s and 1980s, electric and driverless lorries, buses and a van, cargo bodies for the 1905 steam wagon, and three horse-drawn vehicles, so <b>road transport now exists from 1850</b>.</li>
      <li><b>Water:</b> a coaster tanker, a river steamer, a water bus, a container barge, a hydrofoil and a push convoy.</li>
      <li><b>Air:</b> three more aircraft.</li></ul>
      <p>Only a handful of the designed models are still unbuilt.</p>`,
      bad: `Most of these were exported tonight without a review render and none has been judged in the game, so some will look wrong. Two multiple units, the diesel high-speed train and an electric ferry wait for the next import.` },

    { time: "20:03", tags: ["Performance"], title: "For tonight's second build: 72 to 77 frames a second, loading in 14 seconds",
      body: `<p>One more cause found, and it was everywhere: every time the game asked how high the land is at some spot, it walked through every levelled site on the map. The ground, the ground cover and the loading all paid for it. With that gone, in the busy 1965 views the game's own code takes <b>7.5 to 9.7 ms a frame</b> (16 to 18 in tonight's first build), which gives <b>72 to 77 frames a second</b>, and loading a region falls from about 40 seconds to <b>14</b>.</p>`,
      chart: { type: "bars", title: "Loading a busy region (seconds; lower is better)", goal: 15, max: 45, lower: true, goalLabel: "15 seconds",
        rows: [["This morning", 38, "38 s, window frozen"], ["Tonight's first build", 40, "37 to 44 s"], ["Tonight's second build", 14, "14 s"]] },
      bad: `Zooming and fast panning have not been measured with this change yet. They load exactly the work that just became cheap, so they should improve a lot, but that is an expectation until the number is in.` },

    { time: "19:45", tags: ["Performance"], title: "Tonight's build, measured: the graphics card passes, zooming does not",
      body: `<p>The performance test was run on tonight's first build itself (v0.5b): a busy region in 1905, 1965 and 2030, full screen at 3440 \u00D7 1440 on Ultra with the interface on.</p>
      <p><b>The graphics card now fits 60 frames a second at full resolution in every steady view</b>: 10.6 to 15.2 ms a frame, where this morning it needed 17.5 to 21. Memory is inside the target (about 8 GB of video memory).</p>
      <p>What holds the frame rate back is the game's own code: 16 to 18 ms in steady views, 24 ms while panning fast, and 38 to 61 ms while zooming in and out.</p>`,
      chart: { type: "bars", title: "Frames a second in tonight's first build, by view (lowest measured across the three years)", goal: 60, max: 80, goalLabel: "60 frames a second: the target everywhere",
        rows: [["Following a train", 69, "69 to 78"], ["Crowded platform", 64, "64 to 72"], ["Fully zoomed out", 59, "59 to 63"], ["Default view", 51, "51 to 67"], ["High street", 43, "43 to 64"], ["Panning fast", 41, "41 to 55"], ["Zoomed right in", 34, "34 to 70"], ["Zooming in and out", 14, "14 to 21"]] },
      bad: `Zooming in and out runs at 14 to 21 frames a second, and fast panning at 41 to 55. Under 48 a FreeSync monitor like yours can lose the picture, and the frame-rate keeper cannot help here because the graphics card is not the limit. Zooming and panning are now the first performance target. A second set of fixes (ground cover from 13.5 ms to 0.1 ms, steam halved) is in tonight's second build.` },

    { time: "19:06", tags: ["Building"], title: "Try this: the new building tools in five steps",
      body: `<p>For tonight's build. Rail mode is <b>Y</b>, the track tool is <b>1</b>.</p>
      <ul><li><b>1. Look before you press.</b> Move the pointer over a hillside: thin dark contour lines show the land's height round it, and the ends of your own track show small warm rings where a drag would continue the line.</li>
      <li><b>2. One drag, over the land.</b> Press in a field, drag down into a valley and across a river, and let go. While you hold, the preview is the railway you will get: grey ballast and rails, earth slopes for embankments and cuttings, the bridge in its real arches and piers, a tunnel with its portals. Labels name the big structures; the strip and the side profile show the climb and the steepest gradient; the price sits at the pointer.</li>
      <li><b>3. Take charge of height while you hold.</b> <b>E</b> switches between follow the land, keep level, and no bridges or tunnels. <b>Page Up</b> and <b>Page Down</b> raise or lower the end a metre. <b>G</b> gives a gentler gradient. <b>W</b> changes the shape. <b>Escape</b> drops the drag.</li>
      <li><b>4. Drag into a village.</b> Where it cannot be built the stretch turns red with the reason at the place, and the pointer offers <b>F</b> with a price: going round, the other bend, buying the houses, or stopping before them. Press F and the preview becomes that answer.</li>
      <li><b>5. A station on a slope, then a road.</b> Station tool (<b>2</b>): click on a line that climbs, and the line is relaid level under the platform. Road mode (<b>U</b>, tool 1): drag at a slant and the road runs diagonally with a curve at the bend, and crosses the railway square.</li></ul>
      <p>In the first build tonight, a bridge previews as a plain deck on piers and a tunnel mouth as a simple stone arch. The second build draws them with their real arches and portals, and adds <b>Q</b> for double track in one drag and <b>R</b> for signals along it.</p>`,
      bad: `A long line through a town can still take an odd way. Across a steep drop, the height reads mostly in the side profile and less in the world itself.` },

    { time: "18:52", tags: ["Performance", "Building"], title: "The simulation's own spikes are gone, and double track in one drag",
      body: `<p><b>Speed of the simulation:</b> the pauses of up to 150 ms whenever track changed are gone. After any change the game re-read all 16.7 million tiles of the region to rebuild its map of the track; it now re-reads only the part that changed, in 0.5 to 3 ms. Stations and towns no longer look at every house on the map. On a busy 2030 game a step of the simulation takes 0.43 ms on average, and one step in 6,000 takes more than 5 ms; before it was about one in 30. The results of the simulation are unchanged.</p>
      <p><b>Building:</b> a drag can now lay <b>double track</b>, and place <b>signals along the line</b>, in one action with one undo.</p>`,
      bad: `On a much heavier test (280 trains and 410 road vehicles) about one step in 80 still takes more than 5 ms, from towns growing; that is next, with a test of a thousand road vehicles. Where double track meets single track there are no crossovers yet.` },

    { time: "18:50", tags: ["Roads"], title: "The traffic rewrite is in, the new road surfaces are not yet",
      body: `<p>The rewritten town traffic is merged and seen in the game on the 32 km region: vehicles keep their lanes, brake and pull away with weight for their type, trailers follow round turns, parked cars pull out and park again, and there are brake lights and indicators. <b>Junctions no longer knot</b>: v0.4 had eight vehicles locked in one junction; now they clear and move. The rewrite also halved the cost of traffic and removed the stutter each time a town laid a road.</p>`,
      bad: `The fix for the zigzag itself is not in tonight's build. Roads in eight directions exist in the simulation, but the new road surfaces that draw them failed twice (they drew nothing, and cost far too much) and are being rebuilt; until they land the screen still shows v0.4's road pieces, so diagonal roads still look like staircases. With the old pieces, town cars turn back at road bridges over water. Motorways are drawn in code but not seen yet, and the film following a lorry through town, country and motorway has not been made.` },

    { time: "18:09", tags: ["Building"], title: "The track preview is solid now, at the camera you play at",
      body: `<p>The wireframe is gone. From the default camera at 3440 \u00D7 1440, a drag of track now shows a <b>stone-grey ballast bed with rails</b> about twenty pixels wide (v0.4's was a hairline), earth slopes for embankments and cuttings, a deck on piers for a bridge, and a darkened hill with a stone portal for a tunnel. Roads preview as an asphalt band with kerbs, curving in arcs. Labels appear only on the big structures; one summary at the pointer gives length, climb, steepest gradient and the fix key when something is in the way.</p>
      <p>Being added now: bridges and tunnel mouths drawn with the very pieces the finished railway uses.</p>`,
      figs: [["building_river_before_after.jpg", "The same drag across the river from the default camera: v0.4 on top, now below"]], stack: true,
      bad: `Across the escarpment the preview still reads as a band with little sense of the drop; the side profile above the build bar is the answer and is being merged. The grey bed reads a little like a road until the rails are clearer. A long route through a town still bends more than a person would draw.` },

    { time: "17:51", tags: ["World", "Colour"], title: "36 new buildings, from 1850 to 2050",
      body: `<p>The buildings that make a town a town now cover every era, with roofs in slate, red and brown tile, glass, copper, zinc, planted roofs and solar panels:</p>
      <ul><li><b>1850 to 1917:</b> town hall, market hall, chapel, board school, bank, quay warehouse, brewery, cemetery, football ground, bandstand, villa, mansion flats, almshouses, station hotel, post office, library, police station, cottage hospital. These stay standing in every later year.</li>
      <li><b>1918 to 1949:</b> a roadhouse pub, fire station, department store, lido, county school.</li>
      <li><b>1950 to 1989:</b> an estate pub, an A-frame church, swimming baths with a folded roof, a system-built school, a light-industrial unit, a health centre.</li>
      <li><b>1990 to 2029:</b> a retail shed with its car park, a business-park office, a leisure centre, a school.</li>
      <li><b>2030 on:</b> a vertical farm, a data hall, a library.</li></ul>
      <p>The map already places the first of them: chapels and schools in the districts, banks on corners, market halls on squares, warehouses at the quays, breweries and the cemetery at the edge of town. Thirty-six invented names are being lettered onto them.</p>`,
      figs: [["civic_all_eras_sheet.jpg", "24 of the 36, from the game camera (artist's previews on a plain backdrop)"]], stack: true,
      bad: `They still read too clean; the weathered check on real ground beside the houses is next, then the game. The 1960s estate pub and the health centre are plain boxes: true to their time, but weak as landmarks.` },

    { time: "17:42", tags: ["Performance"], title: "What Ultra will be: full sharpness, lighter lighting",
      body: `<p>The same view at 3440 \u00D7 1440 lit two ways: ray-traced on top, the lighter method below. Over the town, from 900 m and over the sea they cannot be told apart beyond a hair of shadow softness, and the lighter method saves <b>3 to 4 ms a frame</b> and about 2 GB of video memory. (A first estimate of 6 to 8 ms was too high; this is the measured figure.)</p>
      <p>A second comparison, of full resolution against 75 % and 67 % with upscaling, showed the opposite: full resolution is visibly crisper on window frames and fences. So Ultra becomes <b>full resolution with the lighter lighting</b>, and the frame-rate keeper lowers resolution only in the moments the graphics card falls behind, never under 60 %. Ray tracing stays available as a switch.</p>`,
      figs: [["perf_light_hw_top_sw_bottom_close.jpg", "Top: ray-traced lighting. Bottom: the lighter method. Same moment, same view"]], stack: true,
      chart: { type: "bars", title: "The new Ultra: graphics card time per frame at full resolution (milliseconds; lower is better)", goal: 16.7, max: 24, lower: true, goalLabel: "16.7 ms: the budget for 60 frames a second",
        rows: [["Zoomed in", 13.7, "13.7 (was 17.5)"], ["From 900 m", 14.8, "14.8 (was 18.5)"], ["While zooming", 15.5, "15.5"], ["Fully zoomed out", 17.1, "17.1 (was 20.5)"]] },
      bad: `Fully zoomed out, the graphics card is still just over budget; there the frame-rate keeper lowers resolution to about 90 %. The keeper itself is built but not yet measured. Next on the graphics card: the ground and the shadows.` },

    { time: "17:33", tags: ["People"], title: "Eight eras of people, all built",
      body: `<p>All <b>122 figures</b> are built and exported: sets for 1870, 1930, 1955, 1972, 1992, 2015 and 2045, each with men, women, children, old people, travellers, seated figures and a parent with a pram, plus railway staff and workers for three eras. The picture shows the same street scene in all eight eras from the game's distance: dark long skirts in 1870, straw hats in 1905, trilbies and long coats in 1930, pastels in 1955, rust, mustard and denim in 1972, bright jackets and backpacks in 1992, dark puffer coats and wheeled cases in 2015, sand, sage and white in 2045.</p>
      <p>The game's side is merged: it dresses each person by the year, keeps some older people in the previous era's clothes, and gives a share of adults a pram.</p>`,
      figs: [["people_eras_far.jpg", "The same street scene in eight eras, from the game's distance (artist's render)"]], stack: true,
      bad: `Not yet seen in the game; that follows the art import. Each person still has one fixed colour scheme (variety per person is waiting on the paint system). The far-away, cheaper versions of the figures would not import, so for now every person is drawn at full detail, which must be solved before crowds cost frame rate. The 1905 figures are the old ones, without the new creases and hair.` },

    { time: "17:29", tags: ["Performance"], title: "From 15 to 56 frames a second",
      body: `<p>With the second round of fixes and the rewritten traffic together, on the new busy 1965 region at 3440 \u00D7 1440 on Ultra, the game runs at <b>52 to 56 frames a second</b> in every view. This morning the same views ran at 15 to 26.</p>
      <ul><li><b>Towns laying roads no longer stutter at all.</b> That was the biggest hitch left.</li>
      <li>The game's own code is down to 14 to 18 ms a frame (35 to 57 this morning); the graphics card 13 to 16 ms.</li>
      <li>Memory is back inside the target: 6.2 GB of memory and 8.9 GB of video memory.</li>
      <li>Hedges drawn from the map are confirmed in the game.</li></ul>`,
      chart: { type: "bars", title: "Frames a second, busy 1965 region, 3440 \u00D7 1440 Ultra (development build)", goal: 60, max: 70, goalLabel: "60 frames a second: the target everywhere",
        rows: [["Opening view", 56, "56 (this morning 25.8)"], ["Biggest town", 54, "54 (24.1)"], ["Whole region", 56, "56 (14.6)"], ["Following a train", 52, "52 (15.2)"]] },
      bad: `Still short of the target. About one frame in a hundred takes 33 to 37 ms: steam at 4.5 ms, the interface at 4 ms with spikes of 20 ms, ground cover while following something fast. The fastest game speed runs at 19 frames a second. Loading still freezes the window for 37 seconds until the new loading screen is merged. These numbers are from two branches that still have to be merged.` },

    { time: "17:21", tags: ["Vehicles", "Variety"], title: "Nine new steam engines and seven new aircraft",
      body: `<p><b>Steam:</b> nine engines from the kit, each shown beside the locomotive you praised (the green one behind): an 1850 express single in red, an 1852 mixed-traffic engine, an 1865 passenger engine, an 1878 goods engine, a 1906 mixed-traffic 4-6-0, a 1911 heavy freight 2-8-0, a 1922 express in maroon, a 1946 mixed-traffic engine and a 1954 heavy freight 2-10-0. Also built: the first diesel, a 1932 electric unit, an intercity coach (so locomotive-hauled trains exist after 2025), a mail van, and container wagons in four shipping lines' colours.</p>
      <p><b>Air:</b> all thirteen aircraft are exported, each in two company colours. The seven new ones: a 1928 trimotor, a 1947 propeller airliner, a 1962 commuter turboprop, a 1971 jumbo, a 1989 narrowbody, a 1996 regional jet and a 2038 electric commuter. The 2042 aircraft is rebuilt.</p>`,
      figs: [["trains_steam_family.jpg", "Nine new steam engines, each beside the praised locomotive"], ["air_new_types.jpg", "The seven new aircraft in their company colours"]], stack: true,
      bad: `The new engines are good, not yet at the praised locomotive's level (simpler cabs, fewer fittings), and the three big black freight engines look alike from the game's distance. The modern box locomotives and the 1970 coach, the most-seen vehicle in the game, are still only repainted; their rebuild now comes first. Two of the new aircraft have lumpy skins and the jumbo's cockpit windows are too small. The airports are still grey. None of this has been seen in the game yet.` },

    { time: "17:17", tags: ["Roads", "Performance"], title: "Motorway interchanges, road upgrades, and 3,000 buses",
      body: `<p><b>Interchanges:</b> motorways now have diamond junctions with slip roads that ease out of the outer lane, one for each town near a long straight stretch; a bus line runs through one in the tests. The road authority builds each planned motorway in its opening year, and the map generator already lays them this way.</p>
      <p><b>Upgrade in place:</b> a road can be upgraded along a drag, lane to street to main road to motorway.</p>
      <p><b>Speed:</b> a stress test with 3,000 buses on 130 lines across the 32 km region first ran at 15 ms a step with spikes of a second. Five causes were found and fixed (vehicles in depots searching for a route every step, impossible routes searched across the whole map, every path re-checked every step). With 1,629 vehicles on the road at once, a whole step of the world now takes <b>4.5 ms on average</b>.</p>`,
      bad: `The slowest steps (45 ms, about one in a hundred) fall at month ends, when towns and the economy are worked out. Vehicles still enter a bay with a three-point turn. None of this is drawn on screen yet.` },

    { time: "17:03", tags: ["Vehicles"], title: "Ships, second round: two different barges and a painted narrowboat",
      body: `<p>The four faults sent back this afternoon are answered. The <b>1905 barge</b> now has an open steering position under a canvas awning, a tall stovepipe, tarred plating under a coloured top strake and a rounded stern; the <b>1965 barge</b> has a glazed steel wheelhouse with radar and lights and green sliding covers. They are different boats at a glance. Wheelhouses are built with real framed glazing, doors and roof gear. The <b>narrowboat</b>'s cabin carries its painted panels and lettering in red, blue and gold. Hold edges and rails are in the company's second colour, so a boat stands out from the water.</p>
      <p>Also done: the container ship with six container lines' liveries, the packet steamer with a gilt name on coloured paddle boxes, and a name on every bow.</p>`,
      figs: [["ships_barges_v4_before_after.jpg", "Left before, right now: the narrowboat, the 1905 barge and the 1965 barge, each loaded with coal beside an empty one riding high"]], stack: true,
      bad: `The narrowboat's cloths still read grey where they should be black. Eleven more vessels are written but not yet rendered or exported, and none has been seen in the game.` },

    { time: "16:46", tags: ["World", "Colour"], title: "The buildings a town was missing",
      body: `<p>Towns were whole districts of one terrace repeated. A new artist builds what makes a town a town, and the first ten are done for the Victorian era, so they stand in every later year too: a <b>town hall with a clock tower</b>, a market hall with a glass and slate roof, a chapel, a board school, a quay warehouse with hoists, a bank, a cemetery, a football ground, a bandstand and a brewery. The map places them where they belong: on the square, on corners, by the water, in the park, at the edge of town.</p>
      <p>Next, era by era: a 1930s roadhouse pub, a department store, a lido, a 1960s estate pub and system-built school, swimming baths, a retail shed, a business-park office, a vertical farm, then villas, mansion flats and almshouses.</p>`,
      figs: [["civic_1880_first_shapes.jpg", "First shapes: town hall, market hall, board school; below, the chapel, the quay warehouse and the market hall close up (artist's preview)"]], stack: true,
      bad: `Too clean in these previews, and every roof is the same grey slate. They have not been weathered, lettered or seen in the game yet.` },

    { time: "16:45", tags: ["Building"], title: "Building over a hill: before and after, in the game",
      body: `<p>The same drag across the same 29 m escarpment at 3440 \u00D7 1440. In v0.4 (top) the preview looked flat and the strip said only \u201Cearthworks \u00A31,740\u201D. Now (bottom) the preview is <b>solid</b>: you see the 6 m embankment as earth and the stone viaduct on its piers, each with its label.</p>
      <p>Above the build bar a <b>side profile</b> shows how the line gets over the land: the ground, the embankment filled in, the viaduct's piers, and the height at each end, which Page Up and Page Down raise and lower. The strip says it in words: \u201CTrack 310 m \u00B7 level \u00B7 embankment 192 m, 6 m high \u00B7 bridge 88 m, 10 m high \u00B7 \u00A322,471\u201D. The height mode here is \u201CKeeps level\u201D (key E).</p>
      <p>Also seen in the game for the first time: the loading screen with a picture of the era and a moving bar, and the setting that holds your monitor's refresh by scaling resolution, with a live read-out.</p>`,
      figs: [["interface_build_before_after.jpg", "Top: v0.4. Bottom: the same drag now, with the solid preview, the labels and the side profile above the build bar"]], stack: true,
      bad: `Found in this first look and fixed in the build compiling now: Escape during a drag put the tool away instead of dropping the drag, the profile drew the line dashed on plain ground, the loading text was too small at this resolution, and some hints overran their controls. The embankment still reads as a flat tan band more than a bank with slopes. Not merged yet.` },

    { time: "16:29", tags: ["Water"], title: "Canals hold water",
      body: `<p>In v0.4 a canal you dug was a brown cut with no water. The cause is found and fixed, and seen in the game: the game softens every shoreline, and water only one tile wide was softened away to dry land, so the ground was never cut and the water lay hidden under it. Narrow water now keeps its depth; wide rivers keep their rounded banks.</p>
      <p>Also on the way for ships: empty vessels ride high, the load you see matches the cargo, sails set and furl, and the horse towing a narrowboat walks the towpath.</p>`,
      figs: [["canal_dry_before_water_after.jpg", "The same canal in the game: v0.4's dry cut on the left, water between the stone edges on the right"]], stack: true,
      bad: `A field tree is left standing on the new canal's towpath: things beside a dug canal are not cleared yet. Loaded and empty barges and an aircraft taking off have not been captured in the game yet.` },

    { time: "16:24", tags: ["Variety"], title: "91 models to choose from, up from 70",
      body: `<p>The third batch of the new line-up is in the game's data:</p>
      <ul><li><b>Rail:</b> a mixed-traffic 4-6-0 and a heavy freight 2-8-0 join the steam engines.</li>
      <li><b>Air:</b> a narrowbody, a regional jet and a jumbo. The years 2001 to 2039, when a single aircraft was on sale, now offer four or five per decade, and every size of airport has a type in every era.</li>
      <li><b>Water:</b> a bulk coaster and a product tanker give river freight from 1960 to 2040. Three to five hulls per decade now.</li>
      <li><b>Road:</b> an eight-wheeler with tipper and tanker bodies, and five cargo trailers for the 1972 articulated lorry.</li></ul>
      <p>That was 91 models on 108 different bodies. A fourth batch followed within the hour: three more steam engines (an express, a mixed-traffic and a heavy freight engine), the first diesel, a single-deck bus, a charabanc, two motor coaches and a bendy bus. The count is now <b>102 models on 119 bodies</b>; this morning there were 70 on 78.</p>`,
      bad: `Rail from 1960 to 2030 is still thin: the new diesels, the shunter, the diesel high-speed train and the multiple units are still being built. New buses and coaches are queued. None of the new models has been seen in the game yet.` },

    { time: "16:17", tags: ["Performance"], title: "First real gain: up to twice the frame rate",
      body: `<p>On the same busy 1965 region and the same views as this morning's measurement, the first round of fixes is in. The stutters of up to a third of a second each time a town put up a building are <b>gone</b>, along with per-frame costs for building sites and ground cover. The game's own code went from 35 ms a frame to 26 ms.</p>
      <p>Hedges, hedgerows and walls are now drawn in pieces round the camera straight from the map, in place of 700,000 separate objects.</p>`,
      chart: { type: "bars", title: "Frames a second, busy 1965 region, 3440 \u00D7 1440 Ultra (development build)", goal: 60, max: 70, goalLabel: "60 frames a second: the target everywhere",
        rows: [["Opening view", 33.6, "33.6 (was 25.8)"], ["In a town", 34.4, "34.4 (was 24.1)"], ["Whole region", 28.4, "28.4 (was 14.6)"], ["Following a train", 32.5, "32.5 (was 15.2)"]] },
      bad: `Still half of the target. Every new town road is still a stutter of about a fifth of a second (the traffic rewrite removes it once it is judged in the game). Steady costs remain: traffic 7 to 8 ms, the interface 4 ms, steam about 4 ms, sound 2 ms. And preparing the picture for the graphics card now costs as much as the game's own code, with spikes of up to half a second: that is the next target.` },

    { time: "16:03", tags: ["World"], title: "The new region, seen in the game for the first time",
      body: `<p>The rebuilt 32 km region (in 1965) has now been looked at through the game camera, next to v0.4's.</p>
      <p>From height the land reads as <b>fields</b> at last: shapes at many angles, big on the downs and small by the villages, where v0.4 showed camouflage blotches. Towns have crooked cores and varied districts, and the port spans its estuary with quays.</p>`,
      figs: [["world_before_v04_ingame_region.jpg", "Before, in the game: v0.4's land from height"], ["world_after_ingame_1965_region.jpg", "After, in the game: field shapes, but still brown and olive"], ["world_after_ingame_1965_city900.jpg", "After, in the game: a town district in 1965"]],
      bad: `Honestly, a town still reads as generated. Blocks are hollow: rows of the same house round a big empty lawn, where real terrace districts are dense with yards and alleys. Whole districts use one building type. From height the land is still brown and olive, the fields meet in hard steps because hedges are not drawn yet, and the hills barely show. Being worked on: denser blocks with real parks, a mix of shops, pubs, churches, works and warehouses by street, hedges and field trees, greener and yellower crops, and the new clear look.` },

    { time: "15:59", tags: ["Colour"], title: "Four looks to choose from, in the game",
      body: `<p>The first pictures from the game itself: the same 1965 town at the same moment, at 3440 × 1440, in four looks.</p>
      <ul><li><b>A, as shipped in v0.4:</b> a milky beige veil over everything and a khaki tint.</li>
      <li><b>B, clear afternoon:</b> a third of the haze, natural saturation and white balance, stronger cloud shadows, leaves in their own green.</li>
      <li><b>C, golden afternoon:</b> the warm sun kept, half the haze, a touch more colour.</li>
      <li><b>D, crisp:</b> almost no veil, a whiter sun, more saturation. The edge of what still reads as a photograph.</li></ul>
      <p>Measured, grey pixels fall from 59 % of the frame in A to 52 % in B and C and 39 % in D. The colour director's pick is <b>B</b>: it removes the veil without looking processed, and the light stays warm because the sun is warm, not the camera. B is set as the default; C is three numbers away if you prefer it.</p>`,
      figs: [["colour_looks_1965_town.jpg", "Top: A as shipped, B clear afternoon. Bottom: C golden afternoon, D crisp"]], stack: true,
      bad: `The look is the smaller part of the problem. These pictures still show v0.4's buildings: grey-brown walls under grey roofs. The new brick, tiles, slate and per-building paint reach the game with the next art import, and the same view will be captured again then. The 1905 comparison is still to come.` },

    { time: "15:51", tags: ["Vehicles", "Variety"], title: "Lorries that carry what they carry",
      body: `<p>In v0.4 one flatbed stood in for every cargo. The 1932 lorry is rebuilt on a proper coach-built cab (radiator shell, louvred bonnet, swept wings, glass set back in its frames) and now comes as a <b>tipper with a coal or ore heap, a sheeted bulk body, a tanker, a timber lorry with its logs, and a box van</b> in six sign-written trades. The 1972 and 2000 articulated lorries have rebuilt tractors and five cargo trailers each, with hauliers' names on the sides.</p>
      <p>Written and waiting to be rendered: an eight-wheeler, a 1912 lorry and mail van, 1962 and 1985 lorries, a 1925 single-deck bus, 1952 and 1988 coaches, a charabanc, a bendy bus, electric buses and lorries, the 2045 driverless set, cars for the 1930s, 1955, 1984, 2025 and 2040, and three horse-drawn vehicles.</p>`,
      figs: [["road_1932_lorries_before_after.jpg", "Left: the v0.4 flatbed. Middle and right: the rebuilt 1932 lorry as a coal tipper and a timber lorry"]], stack: true,
      bad: `The white wings are a fault of the review picture, not the lorry. The tanker has loose strap ends and floating tail lamps (fixed, re-rendering). Cabs are still plain close up: no number plates or lettering on the doors yet. Not yet seen moving in the game.` },

    { time: "15:44", tags: ["Building"], title: "Track now goes round what is in the way",
      body: `<p>The silly plans are gone. A drag of track now <b>routes round houses</b> and anything else it cannot cross, crosses roads square or bridges them, and when the pointer sits on a house the line ends beside it instead of turning red. It no longer digs a tunnel on level land just to pass under a house, a road or another line.</p>
      <p>If a house really is in the way, you can <b>buy and clear it</b>, at a price, with undo. Of 600 random drags across the 32 km region, <b>544 now build</b> (506 this afternoon, 374 in v0.4), and the route is worked out in the background so the game never waits for it.</p>`,
      chart: { type: "bars", title: "Random track drags across the region that come back buildable (of 600)", goal: 600, max: 600, goalLabel: "600: every drag",
        rows: [["v0.4", 374, "374"], ["Over hills (14:40)", 506, "506"], ["Round obstacles", 544, "544"]] },
      bad: `On long routes through towns the line bends more than a person would draw it. The solid preview (track, earth slopes, real bridges in place of the wireframe) is still being built.` },

    { time: "15:30", tags: ["Roads"], title: "Motorways, road bridges and traffic that behaves",
      body: `<p>More of the road model has landed in the simulation:</p>
      <ul><li><b>Motorways from 1960:</b> their own road type with a wide corridor, speeds rising by generation from 110 to 160 km/h, and lanes with overtaking. In a test, coaches at 120 km/h passed lorries at 60 km/h with 18 lane changes in ten minutes. The road authority builds planned motorways in their opening year.</li>
      <li><b>Road bridges in eight directions</b> over water, railways, roads and motorways, with proper ramps and clearances. A road drag bridges by itself.</li>
      <li><b>Junctions:</b> first come, first served, and nobody drives through anybody. Traffic follows the vehicle ahead smoothly, with no jitter and no reversing.</li>
      <li><b>Stops:</b> buses and lorries pull in to the kerb.</li>
      <li><b>Level crossings:</b> a road drag crosses a railway square on the level.</li></ul>`,
      bad: `Still nothing on screen: the drawing and the in-game judgement come from the engine side. Motorways have no interchanges yet, so they join cities only at their ends. The road upgrade tool and a speed test with thousands of vehicles on the 32 km region are next.` },

    { time: "15:25", tags: ["World", "Roads"], title: "Crooked fields, a real coast, and motorways on the map",
      body: `<p>Second round on the 32 km region, answering what still looked generated:</p>
      <ul><li><b>Fields</b> are irregular shapes at any angle, following the roads and the lie of the land: small and crooked on the clay, bigger and straighter on the chalk. No more staircase hedges.</li>
      <li><b>Towns:</b> old cores are always crooked, districts turn across their roads, and the edge frays into ribbon houses, allotments, playing fields ringed with poplars, a big house in its park, a works. Villages have greens.</li>
      <li><b>Roads</b> are laid with the new eight-direction model, in long sweeping curves, with bridges.</li>
      <li><b>The coast</b> has coves, headlands, islets, beaches of varying width, dunes, cliffs and a spit across the estuary.</li>
      <li><b>Motorways</b> are planned for every start year with their opening years, and laid as a real motorway road type before the other roads.</li>
      <li>Market stalls, bunting, kiosks, bicycles and planters are placed in the towns.</li></ul>`,
      figs: [["world_before_v04_ingame_city.jpg", "Before, in the game: a v0.4 city is a brown grid"], ["world_after_port_spit_1965.jpg", "After, map view: the port city with its districts and the spit"], ["world_after_fields_vale_1905.jpg", "After, map view: fields in the vale in 1905"], ["world_after_region_1985_map.jpg", "After, map view: the whole region in 1985"]],
      bad: `The new region has still not been judged in the game itself; the map views use flat debug colours. The game does not yet draw the new hedges or the new kinds of ground (heath, marsh, orchards). Motorways have no interchanges yet and stop short of one city.` },

    { time: "15:20", tags: ["Performance"], title: "The graphics card's side, measured step by step",
      body: `<p>The graphics card needs <b>17 to 21 ms</b> a frame on Ultra at 3440 × 1440, against 16.7 ms for 60 frames a second, so it is close but over. The biggest single cost is preparing the scene for ray-traced light: 3.5 ms every frame, for every object on the 32 km map.</p>
      <p>Switching ray tracing off and using the lighter lighting method at full resolution should save 6 to 8 ms. That would put <b>Ultra at about 12 to 14 ms at full resolution</b>, inside the 60 target without lowering sharpness. Side-by-side stills of the two lighting methods are being made for you to judge before anything about Ultra changes.</p>
      <p>The frame-rate keeper (the game lowers its render resolution a little when it falls behind, so your monitor never drops out) is written and gets measured next.</p>`,
      chart: { type: "bars", title: "Graphics card time per frame on Ultra, by view (milliseconds; lower is better)", goal: 16.7, max: 24, lower: true, goalLabel: "16.7 ms: the budget for 60 frames a second",
        rows: [["Zoomed in", 17.5, "17.5 ms"], ["Default height", 18.5, "18.5 ms"], ["Fully zoomed out", 20.5, "20.5 ms"]] },
      bad: `None of this shows on screen yet, because the game's own code is three to four times over its budget (see the 13:30 entry). The graphics card's gain appears once that is fixed.` },

    { time: "15:20", tags: ["Vehicles", "Variety"], title: "Goods trains with owners, and a family of new steam engines",
      body: `<p>Coal wagons now come in <b>four owners' liveries</b> (red oxide, black, ochre, railway grey) with painted lettering, and the coal is a separate load, so wagons can run empty. Every early goods train gets real colour.</p>
      <p>A <b>steam kit</b> built from the praised locomotive's own generator turns one specification into one engine. Five new engines with their tenders are built, each told apart by its wheels, cab and chimney, plus the four-wheel carriages of the 1850s; six more, including a shunter and a first diesel, are queued. Across the fleet: the later steam express in deep blue with red wheels, a two-tone green electric, company marks and running numbers, crests on the older coaches, coloured roofs and lamps at every cab end.</p>`,
      figs: [["trains_goods_before_after.jpg", "Left before, right after: lettered wagons with coal as a load; below, the old tank engine and the new 0-6-0 goods engine"]], stack: true,
      bad: `The new engines are good, not yet at the praised locomotive's level (fewer pipes and fittings, plain cabs). The modern locomotives and the 1970 coach are only repainted so far, not rebuilt. The shared weathering draws white streaks on dark paint; that is being fixed in the material. Not yet seen in the game.` },

    { time: "15:15", tags: ["Colour"], title: "The first street in real colour",
      body: `<p>The 1890 terrace street, rendered again with the new materials. The brick is properly red, roofs are a mix of slate, pantile and two clays, stucco fronts vary in tone from house to house, and the shops have <b>lettered fronts, enamel signs, painted gable signs and striped awnings</b>. Each building carries its own paint and is repainted as the decades pass: in 1995 the same shop row comes out with red, blue and green awnings and different doors. Later eras get lit signs on the 1965 precinct, a 1970s mural and coloured bands on the tower blocks.</p>
      <p>Also today: <b>1850 now runs on real art</b> (two early engines with their tenders, a four-wheel carriage and a brake van), and the 2000 articulated lorry hauls five different cargo trailers.</p>`,
      figs: [["town_1890_progress.jpg", "Top left: before. The rest: the same kind of street now (artist's render, not the game)"]], stack: true,
      bad: `From the game camera it is still mostly brick red under slate grey, because roofs, the street and the back yards are three quarters of what you see from above. Next: many more warm clay roofs, paler paving, coloured awnings, washing and flowers in the yards. All three shops showed the same sign. Nothing is in the game yet.` },

    { time: "14:40", tags: ["Building"], title: "The new building tools run for the first time",
      body: `<p>A drag of track now shows, at the place, what it is going to build: <b>cuttings, embankments, bridges and tunnels</b>, each named with its length, depth and price. Contour lines show the land's height along the drag, the pointer carries the line's figures (“926 m · falls 5 m · steepest 1 in 8”), and when something is in the way the tool offers a fix on one key (“F: Stop before it · 273 m”). Roads drag the same way, in eight directions with curves.</p>
      <p>Underneath, the rules changed too: a track drag is <b>never refused for height</b>, embankments may be 6 m tall (the old 3 m limit turned river plains into viaducts), flat land no longer costs a staircase of earthworks, and a station or branch on a slope levels its own stretch. Of 600 random drags across the 32 km region, 506 now build; before, 374.</p>`,
      figs: [["building_after_town.jpg", "A drag past a town: cuttings and tunnels named and priced where they are"], ["building_after_hill.jpg", "A long drag across fields, at your screen's full width"]],
      bad: `The preview is a wireframe of thin lines and boxes; it reads like a technical drawing and nearly vanishes at the normal zoom. It must show the railway you are about to get: solid track, earth slopes, the real bridge, tunnel mouths. Some plans are silly (a 6 m cutting across flat fields to tunnel under one farmhouse); routing round obstacles is being built now. Too many small labels, too far from the pointer.` },

    { time: "14:35", tags: ["Vehicles"], title: "Aircraft in their company's colours",
      body: `<p>From the game camera the six aircraft were white crosses with one small teal fin. Each now carries <b>two company colours</b>: the main one over the top of the fuselage, the fin and the engine pods, the second in the stripes, lettering and propeller spinners. The blotchy plaster-white skin is gone.</p>
      <p>Seven new types are written and in first review, so that every era has a small, a medium and a large aircraft: a trimotor (1926), a four-engine propeller airliner (1946), a commuter turboprop (1960), a jumbo (1970), a narrowbody (1989), a regional jet and an electric commuter (2035). The 2042 aircraft is being redesigned from scratch.</p>`,
      figs: [["air_before_game.jpg", "Before: white shapes with a teal fin"], ["air_livery_line.jpg", "After: four types in four companies' colours, from the game camera"]],
      bad: `Nothing is exported to the game yet, and the new types have not been looked at closely. The ground in these pictures is only a review backdrop.` },

    { time: "14:30", tags: ["People"], title: "People dressed for their year",
      body: `<p>Every person in the game wore 1905 clothes whatever the year. There are now wardrobes for <b>1870, 1930, 1955, 1972, 1992, 2015 and 2045</b>: men, women, children, old people (dressed one era behind), travellers, railway staff and workers, with prams, wheeled cases and bags. Most of each set wears plain clothes for its year; two or three figures carry the era's signature look. The game picks clothes by the year, and people change out of sight when the era turns.</p>`,
      figs: [["people_far.jpg", "From the game's distance: 1905 on the left, 1972 on the right"], ["people_close.jpg", "Close up across the eras: 1905, 1972, 1955, 1905, 1992, 2015, 1870"]],
      bad: `Close up they are still simple figures with mask-like faces, not photoreal. From the normal camera distance the decades read apart, which was the goal. Not yet seen in the game.` },

    { time: "14:00", tags: ["Vehicles"], title: "Ships: first batch, sent back for more",
      body: `<p>All ten vessels had no colour at all: black or brown hulls, the same red-brown deck, grey covers, white box cabins, no names, no cargo showing. In the first batch the motor barges <b>show their load</b> in an open hold (coal or ore, logs, planks or covers, by cargo) and <b>ride high when empty</b>, showing red paint below the waterline. New hulls: tanker versions of both barges and an 1860 iron collier. Nine more vessels are written and rendering.</p>`,
      figs: [["ships_before_after.jpg", "Left before, right after: the narrowboat, the 1905 motor barge, the 1965 motor barge"]], stack: true,
      bad: `The 1905 and 1965 barges are still the same boat with the same white box cabin; a 1905 barge must say 1905 at a glance. The narrowboat still reads as a grey plank with a small blue box (its painted panels are not on yet). Decks and holds are as dark as the water, so the boats do not stand out.` },

    { time: "13:50", tags: ["Roads"], title: "Roads in eight directions, with real curves",
      body: `<p>In the simulation, roads now run in <b>eight directions</b>, old staircases straighten into diagonals by themselves, kinks become arcs and long sweeping curves exist. Vehicles follow the road's exact shape and slow for bends by their size: a car fastest, a bus slower, an articulated lorry slowest. At a dead end they make a three-point turn. A test bus drove a straight, a 45-degree kink, a long diagonal and a 60 m curve with no zigzag and no jump.</p>
      <p>On the engine side, town traffic is rewritten: vehicles plan ahead, brake and pull away with weight, the rear wheels and any trailer follow the front as on a real lorry, junctions are first come first served, cars park at the kerb and pull out with indicators, and traffic gives way to your own buses and lorries.</p>`,
      bad: `None of it is on screen yet: drawing the new road shapes and judging the traffic in motion is next. Junction behaviour, motorways with interchanges and the road upgrade tool are still to come.` },

    { time: "13:45", tags: ["Colour"], title: "New brick, roofs and paint in real colours",
      body: `<p>The old wall and roof textures were made dull on purpose (the brief to the image maker asked for “muted, never saturated” and soot over everything). They are replaced: <b>brick in seven clays</b>, clay tiles, pantiles, slate, and painted boards in green, red, cream and blue, each matched to a real-world colour target. Also made: shop fronts and signs for five eras, awning stripes, posters, vehicle liveries, ship marks and painted narrowboat panels, road surfaces and markings.</p>`,
      figs: [["textures_colour.jpg", "The new walls, roofs and painted boards"], ["people_reference.jpg", "Reference line-ups for people's clothes, 1870 to 2045"]],
      bad: `Some road signs and number plates look too much like the real British system, and a few real brand names slipped into signs. All are being redrawn as our own.` },

    { time: "13:35", tags: ["World"], title: "A region that looks like somewhere",
      body: `<p>The old 32 km region had towns as discs of street grid with roads like spokes, one rolling plain, fields as random blotches, and no port. The generator is rebuilt and now runs inside the game, so a region can start in <b>any year</b>, in about ten seconds.</p>
      <ul><li><b>Real landforms:</b> moor in the west, a clay vale of small hedged fields, a chalk ridge with open downs, a coastal plain, cliffs, an estuary with salt marsh.</li>
      <li><b>Towns that grew:</b> an old core with a market place and church, then terraces, crescents and estates, ring by ring; a port city on the estuary.</li>
      <li><b>Farming by era:</b> farmsteads with lanes; fields merge after 1950; yellow rapeseed from 1970.</li>
      <li><b>Industries where they belong:</b> coal and iron on the moor, oil on the coastal plain, the refinery by the estuary.</li>
      <li><b>Motorways</b> routed between the cities from 1960.</li></ul>`,
      figs: [["world_city_before_after.jpg", "A city in the map view: before, a disc with spokes; after, a port city on its estuary"], ["world_region_before_after.jpg", "The whole region: before and after"]],
      bad: `These are the generator's own map views, not the game. Fields are still tidy rectangles lined up with the map, the city is still mostly a right-angled grid, the town edge is a hard outline and the coast a smooth arc. Country roads are long straight legs until the curved roads are used.` },

    { time: "13:30", tags: ["Performance"], title: "Why it lags: the first clean measurements",
      body: `<p>Until today nothing had been measured the way you play: full screen at 3440 × 1440 on Ultra. On a busy 1965 region (36 trains, 36 road vehicles, 6 ships) the game ran at a quarter of what it should. The cause is clear: <b>the game's own code</b> takes 35 to 57 ms a frame against a budget of 16.7 ms, while the graphics card needs 17 to 21 ms.</p>
      <ul><li><b>Towns laying a new road</b> (about once a second somewhere) rebuilt the whole traffic network: a stutter of up to a quarter of a second each time.</li>
      <li><b>Towns putting up buildings</b> redid the ground of the place: stutters of up to a third of a second.</li>
      <li><b>Every frame:</b> traffic 8 to 17 ms (every car in all 150 towns was stepped and redrawn), steam 3.5 ms, the interface about 4 ms.</li>
      <li><b>Loading</b> a saved region froze the window for 38 seconds, most of it on 711,000 map objects. The new map has 32,000.</li></ul>
      <p>The black screens you saw were your monitor losing the picture when the game dropped under 48 frames a second with FreeSync on. The game will hold your monitor's 60 by lowering its render resolution a little whenever it falls behind.</p>`,
      chart: { type: "bars", title: "Frames a second, busy 1965 region, 3440 × 1440 Ultra (development build)", goal: 60, max: 70, goalLabel: "60 frames a second: the target everywhere",
        rows: [["Opening view", 25.8], ["In a town", 24.1], ["Whole region", 14.6], ["Following a train", 15.2], ["Fastest game speed", 2.1]] },
      bad: `These are the before numbers; the fixes are being built and measured now. Memory is over target too (10.8 GB of video memory at the peak).` },

    { time: "13:15", tags: ["Variety"], title: "A line-up worth choosing from",
      body: `<p>Counting what the game offered showed real holes: no locomotive before 1880 although a game can start in 1850, never more than one engine per job, one coach at a time, 48 lorries on 4 bodies, 74 vessels on 10 hulls, and from 2001 to 2039 a single aircraft on sale.</p>
      <p>The new line-up gives <b>two to four real choices per job in every decade</b>, each told apart by its shape: 21 new locomotive and unit classes, 15 road vehicles, 9 vessels and up to 11 aircraft, all with invented makers and names. The first are already in the game's data: two more steam engines for 1905, a steam collier as the first river freighter, and the 1932 lorry in five cargo bodies. “Replace with” now offers a proper successor.</p>`,
      chart: { type: "cols", title: "Locomotives and units on sale, per decade", x: ["1850", "60", "70", "80", "90", "1900", "10", "20", "30", "40", "50", "60", "70", "80", "90", "2000", "10", "20", "30", "40"],
        a: [0, 0, 0, 1, 2, 2, 2, 2, 3, 2, 2, 2, 3, 3, 4, 8, 7, 5, 5, 9], b: [2, 3, 4, 5, 5, 5, 5, 6, 8, 7, 11, 10, 9, 10, 10, 12, 11, 9, 9, 10], la: "In v0.4", lb: "The new line-up" },
      bad: `Most new models are not visible until their art is built; the first new steam engines are hours away. The buy window will be a long list until it gets filters.` },

    { time: "13:00", tags: ["Vehicles"], title: "Every train beside the locomotive you praised",
      body: `<p>What makes that locomotive good: dense, true detail at three scales (lined panels, rivets, pipework, brass, moving rods), sheet metal that is slightly wavy, stains where use puts them, and a colour story of deep green, brass and a red buffer beam. Every other train was rendered beside it in the same light through the game's lens and ranked.</p>
      <ul><li><b>Worst:</b> the two electric locomotives (the same flat box, told apart only by their pantographs) and three diesels from one generic box family.</li>
      <li><b>Most seen and plain:</b> the 1970 coach, a tube with black windows and a featureless roof.</li>
      <li><b>Common to all:</b> roofs read white or grey from above, there is no lettering anywhere, and the coal wagon is always full.</li></ul>
      <p>First fixes are rendering: coal wagons in four owners' liveries with lettering and coal as a separate load, darker roofs, crests and running numbers, the later steam express in deep blue. Then a steam kit built from the locomotive's own generator, for a family of new engines.</p>`,
      figs: [["trains_ranked_before.jpg", "The ranked sheet, worst first; the green locomotive stands on the next track in every picture"]], stack: true,
      bad: `This is the before picture. The rebuilds of the electrics, diesels and coaches are structural work and take one to two hours each.` },

    { time: "12:45", tags: ["Colour"], title: "Why the game looks grey, measured",
      body: `<p>The same view of v0.4 in 1935, 1965 and 1995 was compared with ten aerial photographs of real English and Dutch towns. Real towns are 14 to 50 % grey with 5 to 8 colour families. Ours: <b>50 to 63 % grey, 3 colour families</b>.</p>
      <ul><li><b>Too few coloured things</b> is most of it: every house the same grey-brown brick under the same grey slate.</li>
      <li><b>The haze:</b> a warm milky veil that costs about a third of the vividness.</li>
      <li><b>The colour treatment:</b> saturation was cut to 80 % two days ago to tame the old grass, and never restored. That is the khaki.</li>
      <li><b>A bug:</b> every era used the 1905 air and colour. Fixed.</li>
      <li><b>Weathering is not the cause.</b></li></ul>
      <p>Each building now gets its own paint from a palette of its era, and is repainted as the decades pass, so an 1890 terrace has 1990s doors in 1995. Train roofs no longer bleach to white.</p>`,
      figs: [["colour_diagnosis.jpg", "Each row a year (1935, 1965, 1995): as shipped, then without haze and colour treatment, then the content alone"], ["town_before_eras.jpg", "Streets of each era before the pass: one scheme repeated"]],
      bad: `No new overall look is chosen yet. Three directions (clear, golden, crisp) will be shown side by side for you to pick.` },

    { time: "12:30", tags: ["Building"], title: "Playing v0.4's building as a new player",
      body: `<p>Fourteen scenarios played at your resolution: a line over flat land, over a hill, into a valley, across a river, along a slope, into a town. The four worst findings:</p>
      <ul><li><b>Height is invisible.</b> A 28 m escarpment and a 10 m hill both look like a flat field, and nothing on screen gives a level or a gradient.</li>
      <li><b>The preview does not show what gets built.</b> A tunnel you pay for is drawn as track on the grass; a 280 m viaduct is two hairlines.</li>
      <li><b>Refusals with no way out.</b> One house at the end turns a 39-tile line red; a station on a slope is simply refused.</li>
      <li><b>A second track beside the first sits at a different height</b>: two unrelated lines, not a double track.</li></ul>
      <p>The direction set for the rebuild: one drag from A to B, the game solves height by itself and shows what it will build, and height is never a reason to refuse.</p>` },

    { time: "12:15", tags: ["Vehicles"], title: "Road vehicles and aircraft: the honest starting point",
      body: `<p><b>Road:</b> 20 bodies stand behind the 57 road vehicles; the company's 48 lorries share 4, so a coal tipper, a tanker and a log lorry were the same flatbed. No lettering, plates or liveries anywhere. Worst: the 2012 SUV (a black box), the 2045 pod (toy-like), the 1995 hatchback. Real cargo bodies come first (tipper, tanker, flatbed, box, timber), then cars of every decade.</p>
      <p><b>Air:</b> the 2042 aircraft does not read as 2040s at all; the 1953 turboprop has fat bulb engines; the 1934 twin's polished metal renders as murky grey. The 1994 widebody is the best of the six.</p>` }
  ]
};
