// The journal's content. Newest entry first. Edited by the coordinator; published with tools/journal/publish.sh.
window.JOURNAL = {
  date: "Sunday 15 November 2026",
  updated: "15 Nov, 15:21",
  lead: "You played v0.4 and said <b>“we need to do better than this really”</b>. This is the pass that answers it: performance on your machine, building that makes sense, real roads, colour, people of their time, and vehicles worth looking at. v0.4 stays unpublished; the next build is <b>v0.5</b>.",
  facts: [["8", "points from you"], ["19", "specialists at work"], ["75", "vehicle models, was 70"], ["134", "new textures and liveries"]],
  note: "<b>Honest status:</b> nothing below is in a build you can play yet. The first v0.5 test build comes when the first performance and building work is merged. Until then the pictures are from development builds and artists' review renders.",

  points: [
    { n: 1, tag: "Performance", prio: true, title: "It lags; make Ultra playable, 32 km by default", quote: "the game is lagging a lot, both zoomed in but also zoomed out", stage: 1.5,
      status: "Measured at your 3440 × 1440 for the first time. The game's own code is the limit, not the graphics card. Fixes under way." },
    { n: 2, tag: "Building", prio: true, title: "Building rails and roads is confusing", quote: "especially when dealing with height differences … it's not fun", stage: 1.5,
      status: "Track is never refused for height any more. The new preview runs in a development build but still looks like a technical drawing." },
    { n: 3, tag: "Roads", title: "Zigzag roads, wonky traffic", quote: "no diagonal roads makes the thing go zigzag and looks hilarious with the lorries", stage: 1.5,
      status: "Roads in eight directions with real curves are in the simulation. Traffic is rewritten. Neither is on screen yet." },
    { n: 4, tag: "Colour", title: "Bland, grey, industrial", quote: "i want more colour in every era", stage: 1.5,
      status: "Measured against real towns and the causes found. New brick, roofs and paint made; each building gets its own colours." },
    { n: 5, tag: "People", title: "People in 2050 look like the 1800s", quote: "people in 2050 still look like 1800s", stage: 1.5,
      status: "Seven wardrobes from 1870 to 2045 designed; 122 figures being built. The game now dresses people by year." },
    { n: 6, tag: "Roads", title: "Highways in later eras", quote: "what about highways the further we get into the game?", stage: 1.5,
      status: "Motorways are a real road type now and the map lays them between cities from 1960. Interchanges and the drawing are next." },
    { n: 7, tag: "Vehicles", title: "Every vehicle to the locomotive's standard", quote: "the locomotive looks great, others are ‘mediocre at best’", stage: 1.5,
      status: "Every train, road vehicle, ship and aircraft ranked beside the locomotive. First rebuilds and liveries rendered." },
    { n: 8, tag: "Variety", title: "More variety per era", quote: "more variety on trains/vehicles/planes/boats per era.. just like in ttd", stage: 1.5,
      status: "A full line-up designed: two to four real choices per job per decade. A 1905 game already offers 4 steam engines, not 2." }
  ],

  entries: [
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
