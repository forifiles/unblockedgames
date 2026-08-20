// Unblocked Games 77 Premium - Application Engine
const GAMES = [
  {
    "slug": "2-player-crazy-racer",
    "name": "2 Player Crazy Racer",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/2-player-crazy-racer/index.html",
    "categories": [
      "2 Player"
    ],
    "thumbnail_url": "thumbnails/2 player/2 Player Crazy Racer_2.jpg"
  },
  {
    "slug": "2048",
    "name": "2048",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2025/html/2048/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "5-nights-at-freddys",
    "name": "5 Nights At Freddy's",
    "play_url": "https://storage.googleapis.com/freezenova/all/2024/more2/five-nights-at-freddys/pre-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "ado-cars-drifter",
    "name": "Ado Cars Drifter",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity3/ado-cars-drifter/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Ado Cars Drifter_2.jpg"
  },
  {
    "slug": "ado-stunt-cars-3",
    "name": "Ado Stunt Cars 3",
    "play_url": "https://storage.googleapis.com/freezenova/all/2023/unity3/city-stunts/index-gg.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "american-touchdown",
    "name": "American Touchdown",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity3/american-touchdown/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/American Touchdown.jpg"
  },
  {
    "slug": "appel",
    "name": "Appel",
    "play_url": "https://scratch.mit.edu/projects/897548478/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "archer-hero",
    "name": "Archer Hero",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity/archer-hero/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Archer Hero.jpg"
  },
  {
    "slug": "archer-ro",
    "name": "Archer.ro",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/archer-ro/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Archer RO.jpg"
  },
  {
    "slug": "armedforces-io",
    "name": "ArmedForces io",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity3/armedforces-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/shooting/Armedforces IO.jpg"
  },
  {
    "slug": "axis-football-league",
    "name": "Axis Football League",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/axis-football-league/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "backflip-challenge",
    "name": "Backflip Challenge",
    "play_url": "https://storage.googleapis.com/mathlessons/duckmath.html#/class3/backflip-challenge",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "ball-blast",
    "name": "Ball Blast",
    "play_url": "https://scratch.mit.edu/projects/897550022/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "basket-hoop",
    "name": "Basket Hoop",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/311/basket-hoop/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWDOksAnVDC51NYBBRgJStFTwecgu7bnMFISa3KCi4DKqTEdVEh02sMGFOHVEyBgvWl0UeIYPOQTQhkop7NZKVYeQZITQhNcrBkf55Y_ToPyYUloACy_GSac5vuUR5CjLCFRvkdt5l5c2QrI6p_lwML0MGp5QkkOWZ3dqi5SnHqlE0kLk7xnXDq0Xne8Pd3_lzLA85QdBP8iEggl_TYljU8fXRKg1BVnvbpJXuT-n8=w1280"
  },
  {
    "slug": "basketball-king",
    "name": "Basketball King",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/316/basketball-king/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Basketball King_2.jpg"
  },
  {
    "slug": "basketball-slam-dunk",
    "name": "Basketball Slam Dunk",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/unity2/basketball-slam-dunk/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Basketball Slam Dunk.jpg"
  },
  {
    "slug": "basketball-io",
    "name": "Basketball io",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/basketball-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/Basketball IO_2.jpg"
  },
  {
    "slug": "bicycle-simulator",
    "name": "Bicycle Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/bicycle-simulator/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Bicycle Simulator_2.jpg"
  },
  {
    "slug": "block-blast",
    "name": "Block Blast",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity3/block-blast/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Block Blast.jpg"
  },
  {
    "slug": "blocky-blast",
    "name": "Blocky Blast",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity3/blocky-blast/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "bloons-tower-defense-3",
    "name": "Bloons Tower Defense",
    "play_url": "https://flash-cdn.blogspot.com/2021/05/bloons-tower-defense.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "boat-simulator",
    "name": "Boat Simulator",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/boat-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Boat Simulator_2.jpg"
  },
  {
    "slug": "brick-tetris",
    "name": "Brick Tetris",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/brick-tetris/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "bullet-master",
    "name": "Bullet Master",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/freezenova.com/bullet-master/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQV72wGfttykhsmtKPmBIJngfXn8knDulPKka0vv6R3auTg68DJG3-Xi7rcNKH_6T3aZnGz1tQVefTKdA1RZ-sSy9Fv5eT70qTjrVcLbdcxzgLbu6C8EiWjh3fu2nPamoObnG4ZPigOM0PTVNK56craxKdb2gB1-upKqTNvn69p1cVA2Q-2ZmNZx3NIx54s=w1280"
  },
  {
    "slug": "burnout-city",
    "name": "Burnout City",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity/burnout-city/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Burnout City_2.jpg"
  },
  {
    "slug": "burnout-racers",
    "name": "Burnout Racers",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity/burnout-racers/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Burnout Racers_2.jpg"
  },
  {
    "slug": "cactus-mccoy",
    "name": "Cactus McCoy",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/cactus-mccoy-1/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "cactus-mccoy-2",
    "name": "Cactus McCoy 2",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/cactus-mccoy-2/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "cake-match-puzzle",
    "name": "Cake Match Puzzle",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity3/cake-match-puzzle/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Cake Match Puzzle.jpg"
  },
  {
    "slug": "car-football",
    "name": "Car Football",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/construct/198/car-football/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Car Football_3.jpg"
  },
  {
    "slug": "car-wash",
    "name": "Car Wash",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity2/car-wash/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "cars-simulator",
    "name": "Cars Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/cars-simulator/index2.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Cars Simulator_3.jpg"
  },
  {
    "slug": "cat-simulator",
    "name": "Cat Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity4/cat-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Cat Simulator.jpg"
  },
  {
    "slug": "charge-it",
    "name": "Charge It",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/construct/241/charge-it/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "chase-hq",
    "name": "Chase HQ",
    "play_url": "https://scratch.mit.edu/projects/897545896/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "checkout-frenzy",
    "name": "Checkout Frenzy",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/checkout-frenzy/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Checkout Frenzy.jpg"
  },
  {
    "slug": "chess",
    "name": "Chess",
    "play_url": "https://storage.googleapis.com/freezenova/all/2025/scratch/scratch-chess/pre-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQVk_L1snuNcQWwUOvbJtJzKfax21Lp2joldxBvESuvvH_6WFJSJPMXF6LQi2WpGwow1qJPdLWRSGpms-WgVGYyHBTgCrevCEtnBDc-PmTzgUbF2ZZGy42zZNH6IaRnTvQkRIgRKvK4Vg-Q6e-3H1lOXORv6qBdWJQS6EwXwjHNDKrR3NS97iE06cQTT0Y0=w1280"
  },
  {
    "slug": "city-driver",
    "name": "City Driver",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/city-driver/index2.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/car/City Driver_2.jpg"
  },
  {
    "slug": "classicube",
    "name": "Classicube",
    "play_url": "https://storage.googleapis.com/class-room/assets/fullscreen.html#ref=pixelmon-town&quot",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQVVRIL9JMEuI3DR5d87Hy0LHIn7b-J4IMSvAbcV8VDAhkazjr9IrLVovnDwliIu1hbh5KPY8y-AAgrQnUaCJ4RidgJZ-nDI6SxRySNWHy14XV18a9OhY58u8zpRlp_7NzC18qxnHYAG8LkU4MGfvH0lmPLRJrrjCk22oUIQV8heOtMNGSpReWFg95ve=w1280"
  },
  {
    "slug": "conquer-kingdoms",
    "name": "Conquer Kingdoms",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/conquer-kingdoms/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Conquer Kingdoms.jpg"
  },
  {
    "slug": "crazy-ball-3d",
    "name": "Crazy Ball 3D",
    "play_url": "https://storage.googleapis.com/freezenova/all/2021/unity2/crazy-ball-adventures/index-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "crazy-car-arena",
    "name": "Crazy Car Arena",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/crazy-car-arena/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Crazy Car Arena_2.jpg"
  },
  {
    "slug": "crazy-chase",
    "name": "Crazy Chase",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/crazy-chase/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "crazy-drifter",
    "name": "Crazy Drifter",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/crazy-drifter/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "crazy-karts",
    "name": "Crazy Karts",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/unity/crazy-karts/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Crazy Karts_2.jpg"
  },
  {
    "slug": "crazy-moto-racing",
    "name": "Crazy Moto Racing",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/crazy-moto-racing/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "crazy-parking",
    "name": "Crazy Parking",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/2/crazy-parking/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Crazy Parking_3.jpg"
  },
  {
    "slug": "crazy-parking-fury",
    "name": "Crazy Parking Fury",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/crazy-parking-fury/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Crazy Parking Fury_2.jpg"
  },
  {
    "slug": "crazy-stickman-physics",
    "name": "Crazy Stickman Physics",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/construct/185/crazy-stickman-physics/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "darkness-survivors",
    "name": "Darkness Survivors",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/q2/darkness-survivors/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Darkness Survivors.jpg"
  },
  {
    "slug": "davo",
    "name": "Davo",
    "play_url": "https://storage.googleapis.com/mathlessons/duckmath.html#/class3/davo",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "diggy",
    "name": "Diggy",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/diggy/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "dino-chaos-idle",
    "name": "Dino Chaos Idle",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity3/dino-chaos-idle/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Dino Chaos Idle.jpg"
  },
  {
    "slug": "dont-fall-io",
    "name": "Dont Fall io",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity/dont-fall-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/Dont Fall IO_2.jpg"
  },
  {
    "slug": "drag-racing",
    "name": "Drag Racing",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/drag-racing/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "dragon-world",
    "name": "Dragon World",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/dragon-world/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Dragon World.jpg"
  },
  {
    "slug": "draw-here",
    "name": "Draw Here",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity2/draw-here/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "draw-the-car-path",
    "name": "Draw The Car Path",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/4/draw-the-car-path/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Draw The Car Path_2.jpg"
  },
  {
    "slug": "draw-the-bridge",
    "name": "Draw the Bridge",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/4/draw-the-bridge/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Draw The Bridge.jpg"
  },
  {
    "slug": "drift-cars",
    "name": "Drift Cars",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/drift-cars/index2.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "drift-fury",
    "name": "Drift Fury",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity/drift-fury/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "drift-hunters",
    "name": "Drift Hunters",
    "play_url": "https://storage.googleapis.com/freezenova/all/2023/unity3/drift-hunters/pre-gg.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWh3MOcBH6cgxIXqDLHpVfii5K3D0rQP2qQBp-jSlJla4P0Bi0okpKr9P1r4Xz1aK0PGaHC9vhdifYl-jZ6WusUE-pLsCDDwE8shf_Onit7lJp_OXnBXtLq3SG6JCQtd-BP8W1vZRokay8U7cqPwOzCGgMTJ31nJnt1zgSSqBn9rHwGFvZPLf4YVTPhG4M=w1280"
  },
  {
    "slug": "drift-hunters-2",
    "name": "Drift Hunters 2",
    "play_url": "https://storage.googleapis.com/freezenova/all/2024/unity/drift-hunters-2/index-gg.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWh3MOcBH6cgxIXqDLHpVfii5K3D0rQP2qQBp-jSlJla4P0Bi0okpKr9P1r4Xz1aK0PGaHC9vhdifYl-jZ6WusUE-pLsCDDwE8shf_Onit7lJp_OXnBXtLq3SG6JCQtd-BP8W1vZRokay8U7cqPwOzCGgMTJ31nJnt1zgSSqBn9rHwGFvZPLf4YVTPhG4M=w1280"
  },
  {
    "slug": "drift-hunters-pro",
    "name": "Drift Hunters Pro",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity/drift-hunters-pro/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Drift Hunters Pro_3.jpg"
  },
  {
    "slug": "drift-king",
    "name": "Drift King",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/unity/drift-king/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Drift King_3.jpg"
  },
  {
    "slug": "drift-rider",
    "name": "Drift Rider",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity3/drift-rider/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Drift Rider_3.jpg"
  },
  {
    "slug": "duck-life-2",
    "name": "Duck Life 2",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/wix/duck-life-2/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "duck-life-3",
    "name": "Duck Life 3",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/wix/duck-life-3/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "duck-life-4",
    "name": "Duck Life 4",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/wix/duck-life/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "edys-car-simulator",
    "name": "Edys Car Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity/edys-car-simulator/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Edys Car Simulator_3.jpg"
  },
  {
    "slug": "egg-clicker",
    "name": "Egg Clicker",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/construct/291/egg-clicker/index.html",
    "categories": [
      "Clicker"
    ],
    "thumbnail_url": "thumbnails/clicker/Egg Clicker_2.jpg"
  },
  {
    "slug": "elite-racing",
    "name": "Elite Racing",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/elite-racing/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Elite Racing_2.jpg"
  },
  {
    "slug": "escape-car",
    "name": "Escape Car",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity2/escape-car/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "evil-santa",
    "name": "Evil Santa",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/1/evil-santa/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Evil Santa.jpg"
  },
  {
    "slug": "f1-drift-racer",
    "name": "F1 Drift Racer",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/construct/134/f1-drift-racer/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/F1 Drift Racer_2.jpg"
  },
  {
    "slug": "five-nights-at-freddys-2",
    "name": "FNAF 2",
    "play_url": "https://storage.googleapis.com/freezenova/all/2024/more2/five-nights-at-freddys-2/index-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "fnaf-4",
    "name": "FNAF 4",
    "play_url": "https://storage.googleapis.com/freezenova/all/2024/more2/five-nights-at-freddys-4/fnaf-4/index-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "fps-strike",
    "name": "FPS Strike",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/fps-strike/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Fps Strike.jpg"
  },
  {
    "slug": "fall-boys",
    "name": "Fall Boys",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity3/fall-boys/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "fantasy-tower-defense",
    "name": "Fantasy Tower Defense",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity/fantasy-tower-defense/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "find-it",
    "name": "Find It",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/find-it/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Find It.jpg"
  },
  {
    "slug": "fire-and-water",
    "name": "Fire and Water",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/construct/179/fire-and-water/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Fire And Water.jpg"
  },
  {
    "slug": "football-king",
    "name": "Football King",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/construct/226/football-king/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Football King_2.jpg"
  },
  {
    "slug": "forcez-io",
    "name": "ForceZ.io",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/forcez-io/index2.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "fort-drifter",
    "name": "Fort Drifter",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/fort-drifter/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "fortnite-z",
    "name": "Fortnite Z",
    "play_url": "https://scratch.mit.edu/projects/989889240/embed/",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Fortnite Z_2.jpg"
  },
  {
    "slug": "four-colors",
    "name": "Four Colors",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity4/uno-online/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/io/Four Colors.jpg"
  },
  {
    "slug": "friday-night-funkin",
    "name": "Friday Night Funkin",
    "play_url": "https://totallyscience.co/games/2024/cube/friday-night-funkin/ub.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "fun-party-makeup",
    "name": "Fun Party Makeup",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/4/fun-party-makeup/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "funny-shooter-bro",
    "name": "Funny Shooter Bro",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity/funny-shooter-bro/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Funny Shooter Bro.jpg"
  },
  {
    "slug": "gta-simulator",
    "name": "GTA Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity2/gta-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/GTA Simulator_2.jpg"
  },
  {
    "slug": "galactic-driver",
    "name": "Galactic Driver",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/construct/65/galactic-driver/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "galactic-traffic",
    "name": "Galactic Traffic",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/construct/62/galactic-traffic/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "geometry-dash-scratch",
    "name": "Geometry Dash Scratch",
    "play_url": "https://storage.googleapis.com/freezenova/all/2025/scratch/geometry-dash-scratch/pre-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "geometry-escape",
    "name": "Geometry Escape",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/299/geometry-escape/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "geometry-rash",
    "name": "Geometry Rash",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/construct/279/geometry-rash/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "geometry-vector",
    "name": "Geometry Vector",
    "play_url": "https://storage.googleapis.com/mathlessons/duckmath.html#/class3/geometry-vector",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "getting-over-it",
    "name": "Getting Over It",
    "play_url": "https://storage.googleapis.com/freezenova/all/2025/scratch/getting-over-it-scratch/pre-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "grandmaster-chess",
    "name": "Grandmaster Chess",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity/grandmaster-chess/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Grandmaster Chess.jpg"
  },
  {
    "slug": "gummy-blocks",
    "name": "Gummy Blocks",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/code/gummy-blocks/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "head-ball-online",
    "name": "Head Ball Online",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/head-ball-online/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "head-basketball",
    "name": "Head Basketball",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity/head-basketball/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "head-soccer-2022",
    "name": "Head Soccer 2022",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/construct/280/head-soccer-2022/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Head Soccer 2022.jpg"
  },
  {
    "slug": "head-soccer-football",
    "name": "Head Soccer Football",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity/head-soccer-football/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "hero-dragon-power",
    "name": "Hero Dragon Power",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity/hero-dragon-power/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "hero-rush-tower-defense",
    "name": "Hero Rush Tower Defense",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity/hero-rush-tower-defense/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "hexa-puzzle",
    "name": "Hexa Puzzle",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/hexa-puzzle/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "highway-driver",
    "name": "Highway Driver",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/unity2/highway-driver/pre.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "highway-moto",
    "name": "Highway Moto",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity/highway-moto/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Highway Moto.jpg"
  },
  {
    "slug": "highway-racer-2",
    "name": "Highway Racer 2",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity2/highway-racer-2/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQVdawvVPgHv424Oij0-zW-f7XMYi1DIeWpIUs02Bouq3BfF6cC8JA2pBQiiTnF04hUNmYZU7c9_UB_jLLlo3z_pTqEN3rH71ee-jTq9uo-29F1E585cAFXcyjg6d2_KkiDJNIqB4sz2WdItxmZQfDflbcMrTRnRmk8SAITmzk8fGCc0QKQY_IvaSr9Ly3vMSWaGi5s2bfuKlGTuYcVLFOc821yHjPkNncPLDhWVShg=w1280"
  },
  {
    "slug": "highway-racer-pro",
    "name": "Highway Racer Pro",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity/highway-racer-pro/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Highway Racer Pro_2.jpg"
  },
  {
    "slug": "highway-traffic",
    "name": "Highway Traffic",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity/highway-traffic/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Highway Traffic_4.jpg"
  },
  {
    "slug": "hill-racing-scratch",
    "name": "Hill Racing Scratch",
    "play_url": "https://scratch.mit.edu/projects/897552162/embed",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Hill Racing Scratch_3.jpg"
  },
  {
    "slug": "hover-racer-pro",
    "name": "Hover Racer Pro",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/unity/hover-racer-pro/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "idle-dev-startup",
    "name": "Idle Dev Startup",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity3/idle-dev-startup/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Idle Dev Startup_2.jpg"
  },
  {
    "slug": "idle-restaurant",
    "name": "Idle Restaurant",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity2/idle-restaurant/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Idle Restaurant.jpg"
  },
  {
    "slug": "interactive-buddy",
    "name": "Interactive Buddy",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/interactive-buddy/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "jacksmith",
    "name": "Jacksmith",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/jacksmith/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "jeep-racing",
    "name": "Jeep Racing",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/freezenova.com/jeep-racing/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Jeep Racing_2.jpg"
  },
  {
    "slug": "julio-police-cars",
    "name": "Julio Police Cars",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/julio-police-cars/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Julio Police Cars_2.jpg"
  },
  {
    "slug": "kawaii-shooter",
    "name": "Kawaii Shooter",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity/kawaii-shooter/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Kawaii Shooter.jpg"
  },
  {
    "slug": "kick-the-teddy-bear",
    "name": "Kick The Teddy Bear",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/kick-the-teddy-bear/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Kick The Teddy Bear_2.jpg"
  },
  {
    "slug": "learn-to-fly-2",
    "name": "Learn To Fly 2",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/learn-to-fly-2/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "learn-to-fly-3",
    "name": "Learn To Fly 3",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/learn-to-fly-3/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "learn-to-fly-4",
    "name": "Learn To Fly 4",
    "play_url": "https://learntoflyunblocked.github.io/3/",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "learn-to-fly",
    "name": "Learn to Fly",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/learn-to-fly/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "love-calculator",
    "name": "Love Calculator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/3/love-tester/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "love-tester",
    "name": "Love Tester",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/3/love-tester/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "madalin-stunt-cars-pro",
    "name": "Madalin Stunt Cars Pro",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity/madalin-stunt-cars-pro/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Madalin Stunt Cars Pro_3.jpg"
  },
  {
    "slug": "masked-forces",
    "name": "Masked Forces",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/masked-forces/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "master-chess",
    "name": "Master Chess",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/code/master-chess/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQVk_L1snuNcQWwUOvbJtJzKfax21Lp2joldxBvESuvvH_6WFJSJPMXF6LQi2WpGwow1qJPdLWRSGpms-WgVGYyHBTgCrevCEtnBDc-PmTzgUbF2ZZGy42zZNH6IaRnTvQkRIgRKvK4Vg-Q6e-3H1lOXORv6qBdWJQS6EwXwjHNDKrR3NS97iE06cQTT0Y0=w1280"
  },
  {
    "slug": "mini-cars-racing",
    "name": "Mini Cars Racing",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity/mini-cars-racing/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "mini-shooters",
    "name": "Mini Shooters",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/5/mini-shooters/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Mini Shooters.jpg"
  },
  {
    "slug": "mini-zombie-shooters",
    "name": "Mini Zombie Shooters",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/construct/162/mini-zombie-shooters/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Mini Zombie Shooters_2.jpg"
  },
  {
    "slug": "mob-city",
    "name": "Mob City",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity3/mob-city/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Mob City.jpg"
  },
  {
    "slug": "monoa-city-parking",
    "name": "Monoa City Parking",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/monoa-city-parking/unblocked.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Monoa City Parking_2.jpg"
  },
  {
    "slug": "monster-survivors",
    "name": "Monster Survivors",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/monster-survivors/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "monster-truck-booster",
    "name": "Monster Truck Booster",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/223/monster-truck-booster/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Monster Truck Booster_2.jpg"
  },
  {
    "slug": "moonlight-valley",
    "name": "Moonlight Valley",
    "play_url": "https://scratch.mit.edu/projects/897548259/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "moto-beach",
    "name": "Moto Beach",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity/moto-beach/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Moto Beach.jpg"
  },
  {
    "slug": "motorbike-simulator",
    "name": "Motorbike Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/motorbike-simulator/index2.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Motorbike Simulator.jpg"
  },
  {
    "slug": "motorbike-traffic",
    "name": "Motorbike Traffic",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity/motorbike-traffic/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "mr-bullet",
    "name": "Mr Bullet",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/freezenova.com/bullet-master/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "mystic-valley",
    "name": "Mystic Valley",
    "play_url": "https://scratch.mit.edu/projects/897546880/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "neighborhood-defense",
    "name": "Neighborhood Defense",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/q2/neighborhood-defense/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "neon-moto-driver",
    "name": "Neon Moto Driver",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/construct/138/neon-moto-driver/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "nova-clicker",
    "name": "Nova Clicker",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/314/nova-clicker/index.html",
    "categories": [
      "Clicker"
    ],
    "thumbnail_url": "thumbnails/clicker/Nova Clicker_2.jpg"
  },
  {
    "slug": "nova-craft",
    "name": "Nova Craft",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/more2/nova-craft/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Nova Craft_2.jpg"
  },
  {
    "slug": "nova-idle-clicker",
    "name": "Nova Idle Clicker",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity3/nova-idle-clicker/index.html",
    "categories": [
      "Clicker"
    ],
    "thumbnail_url": "thumbnails/clicker/Nova Idle Clicker.jpg"
  },
  {
    "slug": "ovo",
    "name": "OvO",
    "play_url": "https://istudymath.com/games/2024/77/ovo/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papa-louie-2-when-burgers-attack",
    "name": "Papa Louie 2: When Burgers Attack!",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papa-louie-2/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papa-louie-3-when-sundaes-attack",
    "name": "Papa Louie 3: When Sundaes Attack",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papa-louie-3/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papa-louie-when-pizzas-attack",
    "name": "Papa Louie: When Pizzas Attack!",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papa-louie-1/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-bakeria",
    "name": "Papa's Bakeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-bakeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-burgeria",
    "name": "Papa's Burgeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-burgeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-cheeseria",
    "name": "Papa's Cheeseria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-cheeseria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-cheeseria_1",
    "name": "Papa's Cheeseria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-cheeseria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "papas-cupcakeria",
    "name": "Papa's Cupcakeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-cupcakeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-donuteria",
    "name": "Papa's Donuteria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-donuteria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-freezeria",
    "name": "Papa's Freezeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-freezeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-hot-doggeria",
    "name": "Papa's Hot Doggeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-hot-doggeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-pancakeria",
    "name": "Papa's Pancakeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-pancakeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-pastaria",
    "name": "Papa's Pastaria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-pastaria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-pizzeria",
    "name": "Papa's Pizzeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-pizzeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-scooperia",
    "name": "Papa's Scooperia",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-scooperia/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-sushiria",
    "name": "Papa's Sushiria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-sushiria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-taco-mia",
    "name": "Papa's Taco Mia!",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-taco-mia/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "papas-wingeria",
    "name": "Papa's Wingeria",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/papas-wingeria/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "paper-minecraft",
    "name": "Paper Minecraft",
    "play_url": "https://storage.googleapis.com/freezenova/all/2025/scratch/paper-minecraft-scratch/pre-gg.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXXVyjel_KxVkxwigAoJPyPFw25JsSHa0usyqXwWlGRg1dPJy_yCD3uylMgi_krYf2r7gyk8Iz-ij5tv2X0NOA_r6mFOyATu6Bk1FlszW6UoCRTjAbDHQnU7uNxHwNZo3-r0NQLdsU3sBjaSj8hdMdII1JJgtH8N4sbZGGFHV86mWHpzrgUx9PQr5fDeuQ=w1280"
  },
  {
    "slug": "penalty-king",
    "name": "Penalty King",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/q2/penalty-king/pre.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Penalty King.jpg"
  },
  {
    "slug": "pinball-simulator",
    "name": "Pinball Simulator",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity2/pinball-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "pixel-battle-royale",
    "name": "Pixel Battle Royale",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/pixel-battle-royale/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "pixelforces-io",
    "name": "PixelForces.io",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/pixelforces-io/index2.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "police-chase-drifter",
    "name": "Police Chase Drifter",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/3/police-chase-drifter/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Police Chase Drifter_3.jpg"
  },
  {
    "slug": "police-traffic",
    "name": "Police Traffic",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/unity/police-traffic/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/car/Police Traffic_3.jpg"
  },
  {
    "slug": "poly-racing-cars",
    "name": "Poly Racing Cars",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity3/poly-racing-cars/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/2 player/Poly Racing Cars_2.jpg"
  },
  {
    "slug": "poop-clicker",
    "name": "Poop Clicker",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/construct/292/poop-clicker/index.html",
    "categories": [
      "Clicker"
    ],
    "thumbnail_url": "thumbnails/clicker/Poop Clicker_2.jpg"
  },
  {
    "slug": "powerslide-kart-simulator",
    "name": "Powerslide Kart Simulator",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity3/powerslide-kart-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "puppet-killer",
    "name": "Puppet Killer",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/puppet-killer/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Puppet Killer_2.jpg"
  },
  {
    "slug": "real-flight-simulator",
    "name": "Real Flight Simulator",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/unity2/real-flight-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Real Flight Simulator_2.jpg"
  },
  {
    "slug": "realistic-buggy-driver",
    "name": "Realistic Buggy Driver",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/realistic-buggy-driver/index2.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Realistic Buggy Driver.jpg"
  },
  {
    "slug": "retro-racing",
    "name": "Retro Racing",
    "play_url": "https://unblocked-games.s3.amazonaws.com/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Retro Racing_2.jpg"
  },
  {
    "slug": "rolling-ball",
    "name": "Rolling Ball",
    "play_url": "https://scratch.mit.edu/projects/897546564/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "run-freezenova",
    "name": "Run FreezeNova",
    "play_url": "https://storage.googleapis.com/mathlessons/duckmath.html#/class3/run-3-freezenova",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "school-bus",
    "name": "School Bus",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/2/school-bus/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/School Bus.jpg"
  },
  {
    "slug": "scrap",
    "name": "Scrap",
    "play_url": "https://scratch.mit.edu/projects/19132099/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "secret-sniper-agent",
    "name": "Secret Sniper Agent",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/construct/129/secret-sniper-agent/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Secret Sniper Agent.jpg"
  },
  {
    "slug": "slide-io",
    "name": "Slide io",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/slidepark-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/Slide IO_2.jpg"
  },
  {
    "slug": "slither-snakes",
    "name": "Slither Snakes",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/slither-snakes/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/io/Slither Snakes_2.jpg"
  },
  {
    "slug": "snake",
    "name": "Snake",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/phaser/snake/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Snake.jpg"
  },
  {
    "slug": "snake-football",
    "name": "Snake Football",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/construct/200/snake-football/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Snake Football_2.jpg"
  },
  {
    "slug": "snake-wars",
    "name": "Snake Wars",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/unity/snake-wars/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/io/Snake Wars.jpg"
  },
  {
    "slug": "snake-io-scratch",
    "name": "Snake io Scratch",
    "play_url": "https://scratch.mit.edu/projects/897551968/embed",
    "categories": [
      "io"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQVAfCKRmLaW66REyE5RZfgJyL3ndK-mLxCjRDzpPGE1GCrkcTNVnmpG3tJ4WmCivVwTaaRs_I61roUSj7dtGW2LquK5URHqPwYiLj1_Ssz7DmGIoukL71ATk7UY69g9eImScWX-AKbOaaluirTnhgdhVn_z-9rfJrhhf5KnFwkXCC4DQ8XkTyeWCXu7V7N07q6s551NKl6qIj4VRysLiwtzvERSvPumcHANCaBF=w1280"
  },
  {
    "slug": "sniper-elite",
    "name": "Sniper Elite",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/1/sniper-elite/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Sniper Elite.jpg"
  },
  {
    "slug": "snow-rider-3d",
    "name": "Snow Rider 3D",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2025/unity2/snow-rider-3d/pre.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "snow-war-io",
    "name": "Snow War io",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/snow-war-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/Snow War IO_2.jpg"
  },
  {
    "slug": "solitaire-adventure",
    "name": "Solitaire Adventure",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity4/solitaire-adventure/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "spaceguard-io",
    "name": "SpaceGuard.io",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/spaceguard-io/index2.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "sportbike-simulator",
    "name": "Sportbike Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/sportbike-simulator/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Sportbike Simulator_2.jpg"
  },
  {
    "slug": "squad-shooter",
    "name": "Squad Shooter",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/squad-shooter/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Squad Shooter.jpg"
  },
  {
    "slug": "stack-fire-ball",
    "name": "Stack Fire Ball",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity/stack-fire-ball/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "stackball-io",
    "name": "Stackball.io",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/stackball-io/unblocked.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "state-io-wars",
    "name": "State io Wars",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/233/state-io-wars/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/State IO Wars_2.jpg"
  },
  {
    "slug": "stick-guys-defense",
    "name": "Stick Guys Defense",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity3/stick-guys-defense/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "stickman-destruction",
    "name": "Stickman Destruction",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2021/unity3/stickman-destruction/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Stickman Destruction.jpg"
  },
  {
    "slug": "stickman-gta-city",
    "name": "Stickman GTA City",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity3/stickman-gta-city/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Stickman GTA City.jpg"
  },
  {
    "slug": "stickman-parkour",
    "name": "Stickman Parkour",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/construct/219/stickman-parkour/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Stickman Parkour.jpg"
  },
  {
    "slug": "stickman-ragdoll",
    "name": "Stickman Ragdoll",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/stickman-ragdoll/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Stickman Ragdoll.jpg"
  },
  {
    "slug": "stunt-crasher",
    "name": "Stunt Crasher",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity3/stunt-crasher/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Stunt Crasher.jpg"
  },
  {
    "slug": "stunt-rider",
    "name": "Stunt Rider",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/unity/stunt-rider/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Stunt Rider.jpg"
  },
  {
    "slug": "stunt-simulator",
    "name": "Stunt Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/stunt-simulator/index2.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Stunt Simulator_1.jpg"
  },
  {
    "slug": "stunt-simulator_1",
    "name": "Stunt Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/stunt-simulator/index2.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "thumbnails/driving/Stunt Simulator_1.jpg"
  },
  {
    "slug": "stunt-simulator-multiplayer",
    "name": "Stunt Simulator Multiplayer",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity/stunt-simulator-multiplayer/index.html",
    "categories": [
      "Driving"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "su-battle-royale",
    "name": "Su Battle Royale",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/su-battle-royale/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/shooting/Su Battle Royale.jpg"
  },
  {
    "slug": "subway-idle-3d",
    "name": "Subway Idle 3D",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity4/subway-idle-3d/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/clicker/Subway Idle 3D_2.jpg"
  },
  {
    "slug": "super-car-driving",
    "name": "Super Car Driving",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/super-car-driving/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Super Car Driving.jpg"
  },
  {
    "slug": "super-mini-racing",
    "name": "Super Mini Racing",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity4/super-mini-racing/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Super Mini Racing_2.jpg"
  },
  {
    "slug": "supercars-drift",
    "name": "Supercars Drift",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/unity3/supercars-drift/index.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "supermarket-simulator",
    "name": "Supermarket Simulator",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/supermarket-simulator/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Supermarket Simulator.jpg"
  },
  {
    "slug": "survival-craft",
    "name": "Survival Craft",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity/survival-craft/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "survival-karts",
    "name": "Survival Karts",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity3/survival-karts/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/io/Survival Karts.jpg"
  },
  {
    "slug": "tank-arena",
    "name": "Tank Arena",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/construct/293/tank-arena/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Tank Arena.jpg"
  },
  {
    "slug": "tap-tap-colors",
    "name": "Tap Tap Colors",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/q/15/tap-tap-colors/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "tap-tap-shots",
    "name": "Tap Tap Shots",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/q/1/tap-tap-shots/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Tap Tap Shots.jpg"
  },
  {
    "slug": "tetris",
    "name": "Tetris",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/brick-tetris/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "the-crusty-quest",
    "name": "The Crusty Ques",
    "play_url": "https://scratch.mit.edu/projects/897550794/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "the-worlds-hardest-game",
    "name": "The Worlds Hardest Game",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/flash/worlds-hardest-game/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "tic-tac-toe",
    "name": "Tic Tac Toe",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity2/tic-tac-toe/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Tic Tac Toe.jpg"
  },
  {
    "slug": "tic-tac-toe_1",
    "name": "Tic Tac Toe",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2021/unity2/tic-tac-toe/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/2 player/Tic Tac Toe.jpg"
  },
  {
    "slug": "tile-match",
    "name": "Tile Match",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/tile-match/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Tile Match.jpg"
  },
  {
    "slug": "tower-defense-game",
    "name": "Tower Defense Game",
    "play_url": "https://scratch.mit.edu/projects/897551287/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "tower-survivor",
    "name": "Tower Survivor",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/koz/tower-survivor/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "tower-of-scratch",
    "name": "Tower of Scratch",
    "play_url": "https://scratch.mit.edu/projects/897551176/embed",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "toy-cars",
    "name": "Toy Cars",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/toy-cars/index2.html",
    "categories": [
      "Car"
    ],
    "thumbnail_url": "thumbnails/car/Toy Cars_2.jpg"
  },
  {
    "slug": "trains-io",
    "name": "Trains io",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2023/construct/235/trains-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/Trains IO.jpg"
  },
  {
    "slug": "troll-level",
    "name": "Troll Level",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity2/troll-level/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Troll Level.jpg"
  },
  {
    "slug": "unblocked-shooters",
    "name": "Unblocked Shooters",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/unblocked-shooters/index2.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "urban-sniper",
    "name": "Urban Sniper",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2022/unity2/urban-sniper/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Urban Sniper_2.jpg"
  },
  {
    "slug": "vehicles-simulator",
    "name": "Vehicles Simulator",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/vehicles-simulator/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQUvEH_vp2vjOVDrOigSXYxETm-kn-bdul5bGxjbWhv5FuRlUQwj9a7HQmQLkgBMAL0CfaN0DiGNTGJfjSqAoA9JxQo0DRt39pphxyWDYRJjqlcYFly2AEix4bXt6n27cT_7HPlfVZ2CB6IF2BIElVWDujinRcKeMfHM3rZ0ci9X-QytyksRhFVLeDLgbAg=w1280"
  },
  {
    "slug": "vehicles-simulator-2",
    "name": "Vehicles Simulator 2",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/vehicles-simulator-2/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/driving/Vehicles Simulator 2_2.jpg"
  },
  {
    "slug": "velocity-rush",
    "name": "Velocity Rush",
    "play_url": "https://storage.googleapis.com/mathlessons/duckmath.html#/class3/velocity-rush",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "void-city",
    "name": "Void City",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/void-city/index2.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Void City.jpg"
  },
  {
    "slug": "voxel-world",
    "name": "Voxel World",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/unity/voxel-world/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Voxel World.jpg"
  },
  {
    "slug": "war-of-ships-io",
    "name": "War Of Ships io",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2022/unity3/war-of-ships-io/index.html",
    "categories": [
      "io"
    ],
    "thumbnail_url": "thumbnails/io/War Of Ships IO_2.jpg"
  },
  {
    "slug": "warstrike",
    "name": "WarStrike",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/unity3/warstrike/index.html",
    "categories": [
      "Shooting"
    ],
    "thumbnail_url": "thumbnails/shooting/Warstrike_2.jpg"
  },
  {
    "slug": "watermelon-game",
    "name": "Watermelon Game",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2025/construct/321/watermelon-game/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "thumbnails/classic/Watermelon Game.jpg"
  },
  {
    "slug": "we-become-what-we-behold",
    "name": "We Become What We Behold",
    "play_url": "https://dnrweqffuwjtx.cloudfront.net/games/2024/more/we-become-what-we-behold/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQXroh7q1i3DdEGrqLMtQYuGzWTFq6Ldm47wW1lIUkAUE6gWYM-Q0y-HMzk9tdnVopBZJ-jKBYBToS-_R8RY6M1S-P7TDGORyoN-LTC2RMZ2nQdWtvVD3kVUE5Ff9ITn3VFwI0WcRY5KysKy2QkaLoR8FxhOTclc50l3gPrQ4EvtF6aPn5NryUwTgbmUrqkx-1tI8t3BlmJUraTrpt0R"
  },
  {
    "slug": "worlds-hardest-game",
    "name": "World's Hardest Game",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2024/flash/worlds-hardest-game/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  },
  {
    "slug": "xmas-cookie-clicker",
    "name": "Xmas Cookie Clicker",
    "play_url": "https://unblocked-games.s3.amazonaws.com/games/2023/construct/288/xmas-cookie-clicker/index.html",
    "categories": [
      "Clicker"
    ],
    "thumbnail_url": "thumbnails/clicker/Xmas Cookie Clicker_2.jpg"
  },
  {
    "slug": "dragon-simulator-3d",
    "name": "dragon simulator 3d",
    "play_url": "https://instructor.algebracontest.com/games/dragon-simulator-multiplayer/index.html",
    "categories": [
      "Classic"
    ],
    "thumbnail_url": "https://lh3.googleusercontent.com/sitesv/AG8ngQWAE8kEn_8s0pkCR-R6ckfmOIOlq8vRFdfQL1EZiJOIsCoDvIISyP0z2GnU4ggcMI1PPj8CZpx4twe6eH3Cn6ZvkSkHYGY4pnLTCv97cED-o1jSaCI6FI6PQeDf9Lif4x2vmxvBQRDuuVI3WNaS2oFqmTvydYuoAuIgyoPNgEA42kX1IJ_S0Braf3ZTKcUV3b2Diw2ChKbIuVIcMwsV"
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('ug77_favorites') || '[]');
let ratings = JSON.parse(localStorage.getItem('ug77_ratings') || '{}');

// Mock starting ratings
const votesCount = {};
GAMES.forEach(g => {
  let hash = 0;
  for (let i = 0; i < g.name.length; i++) {
    hash += g.name.charCodeAt(i);
  }
  const likes = (hash % 120) + 95;
  const dislikes = (hash % 12) + 2;
  votesCount[g.slug] = { likes, dislikes };
});

// DOM Elements
const elements = {
  homeView: document.getElementById('home-view'),
  playView: document.getElementById('play-view'),
  gameGrid: document.getElementById('game-grid'),
  categoryList: document.getElementById('category-list'),
  searchInput: document.getElementById('search-input'),
  resultsCount: document.getElementById('results-count'),
  featuredBanner: document.getElementById('featured-banner'),
  
  // Play view elements
  gameIframe: document.getElementById('game-iframe'),
  gameTitle: document.getElementById('game-title'),
  gameCategory: document.getElementById('game-category'),
  backBtn: document.getElementById('back-btn'),
  fullscreenBtn: document.getElementById('fullscreen-btn'),
  theaterBtn: document.getElementById('theater-btn'),
  favToggleBtn: document.getElementById('fav-toggle-btn'),
  reloadBtn: document.getElementById('reload-btn'),
  likeBtn: document.getElementById('like-btn'),
  dislikeBtn: document.getElementById('dislike-btn'),
  likeCount: document.getElementById('like-count'),
  dislikeCount: document.getElementById('dislike-count'),
  likeRatioBar: document.getElementById('like-ratio-bar'),
  iframeWrapper: document.getElementById('iframe-wrapper'),
  recommendedGrid: document.getElementById('recommended-grid'),
  themeToggle: document.getElementById('theme-toggle-btn')
};

// Initialize Application
function init() {
  setupEventListeners();
  handleRouting();
  renderCategories();
  renderGames();
  setupFeatured();
  
  // Theme init
  const savedTheme = localStorage.getItem('ug77_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

// Event Listeners
function setupEventListeners() {
  // Routing
  window.addEventListener('hashchange', handleRouting);
  
  // Search
  elements.searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGames();
  });
  
  // Theme Toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Play view buttons
  elements.backBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  
  elements.fullscreenBtn.addEventListener('click', toggleFullscreen);
  elements.theaterBtn.addEventListener('click', toggleTheater);
  elements.reloadBtn.addEventListener('click', reloadGame);
  
  elements.favToggleBtn.addEventListener('click', () => {
    const slug = getActiveGameSlug();
    if (slug) toggleFavorite(slug);
  });
  
  elements.likeBtn.addEventListener('click', () => {
    const slug = getActiveGameSlug();
    if (slug) handleVote(slug, 'up');
  });
  
  elements.dislikeBtn.addEventListener('click', () => {
    const slug = getActiveGameSlug();
    if (slug) handleVote(slug, 'down');
  });
}

// Client-side Router
function handleRouting() {
  const hash = window.location.hash;
  
  if (hash.startsWith('#/game/')) {
    const slug = hash.replace('#/game/', '');
    const game = GAMES.find(g => g.slug === slug);
    if (game) {
      showPlayView(game);
    } else {
      window.location.hash = '';
    }
  } else {
    showHomeView();
  }
}

function getActiveGameSlug() {
  const hash = window.location.hash;
  if (hash.startsWith('#/game/')) {
    return hash.replace('#/game/', '');
  }
  return null;
}

// Screen Transitions
function showHomeView() {
  elements.playView.classList.add('hidden');
  elements.homeView.classList.remove('hidden');
  
  // Stop the iframe content
  elements.gameIframe.src = 'about:blank';
  document.title = 'Unblocked Games 77 Premium';
  
  // Recalculate layout
  renderGames();
}

function showPlayView(game) {
  elements.homeView.classList.add('hidden');
  elements.playView.classList.remove('hidden');
  
  // Set details
  elements.gameTitle.textContent = game.name;
  elements.gameCategory.textContent = game.categories.join(', ');
  document.title = `${game.name} - Play Unblocked Games 77`;
  
  // Set iframe source
  elements.gameIframe.src = game.play_url;
  
  // Reset buttons & classes
  elements.iframeWrapper.classList.remove('theater');
  elements.theaterBtn.querySelector('.btn-label').textContent = 'Theater Mode';
  
  // Update favorite status UI
  updateFavoriteUI(game.slug);
  
  // Update voting UI
  updateVotingUI(game.slug);
  
  // Load recommended
  renderRecommended(game);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Toggle
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('ug77_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = elements.themeToggle.querySelector('svg');
  if (theme === 'light') {
    // Sun Icon
    icon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.38-.38.38-1.02 0-1.41z" />';
  } else {
    // Moon Icon
    icon.innerHTML = '<path d="M12.3 22h-.1c-5.4 0-10-4.6-10-10 0-4.3 2.9-8.1 7.1-9.3.5-.1 1 .1 1.2.6.2.5 0 1.1-.4 1.4-2.8 2-4.1 5.6-3.1 9 1 3.4 4.1 5.9 7.6 5.9 1.6 0 3.1-.5 4.4-1.4.4-.3.9-.3 1.2.1.3.4.3.9 0 1.2-1.9 2.5-4.8 3.9-7.9 3.9z" />';
  }
}

// Category Navigation
function renderCategories() {
  const cats = ['all', 'favorites', 'Car', 'Driving', 'Shooting', 'io', 'Clicker', '2 Player', 'Classic'];
  elements.categoryList.innerHTML = '';
  
  cats.forEach(c => {
    const button = document.createElement('button');
    button.className = `cat-btn ${currentCategory === c ? 'active' : ''}`;
    
    let label = c;
    if (c === 'all') label = '🔥 All Games';
    if (c === 'favorites') label = '⭐ Favorites';
    if (c === 'io') label = '🌐 io Games';
    if (c === '2 Player') label = '👥 2 Player';
    
    button.textContent = label;
    button.addEventListener('click', () => {
      currentCategory = c;
      document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderGames();
    });
    
    elements.categoryList.appendChild(button);
  });
}

// Game Grid Renderer
function renderGames() {
  elements.gameGrid.innerHTML = '';
  
  // Filter games
  let filtered = GAMES.filter(g => {
    // Search query match
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category match
    let matchesCategory = false;
    if (currentCategory === 'all') {
      matchesCategory = true;
    } else if (currentCategory === 'favorites') {
      matchesCategory = favorites.includes(g.slug);
    } else {
      matchesCategory = g.categories.includes(currentCategory);
    }
    
    return matchesSearch && matchesCategory;
  });
  
  // Display result count
  elements.resultsCount.textContent = `Showing ${filtered.length} games`;
  
  if (filtered.length === 0) {
    elements.gameGrid.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="var(--text-muted)">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <p>No games found matching your criteria.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(g => {
    const card = document.createElement('a');
    card.href = `#/game/${g.slug}`;
    card.className = 'game-card';
    
    let thumbnailHtml = '';
    
    if (g.thumbnail_url) {
      thumbnailHtml = `<img src="${g.thumbnail_url}" alt="${g.name}" class="game-card-img" loading="lazy" referrerpolicy="no-referrer">`;
    } else {
      // Generate a beautiful abstract vector pattern image placeholder based on the name hash
      let hash = 0;
      for (let i = 0; i < g.name.length; i++) {
          hash += g.name.charCodeAt(i);
      }
      const colorH = hash % 360;
      const colorS = 65 + (hash % 20);
      const colorL = 35 + (hash % 15);
      const cardBg = `linear-gradient(135deg, hsl(${colorH}, ${colorS}%, ${colorL}%), hsl(${(colorH + 60) % 360}, ${colorS}%, ${colorL - 10}%))`;
      const letter = g.name.charAt(0);
      
      thumbnailHtml = `
        <div class="game-img-placeholder" style="background: ${cardBg}; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
          <span class="game-icon-letter">${letter}</span>
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="game-thumbnail">
        ${thumbnailHtml}
        <div class="game-play-hover">
          <svg viewBox="0 0 24 24" fill="#fff" width="40" height="40">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div class="game-info">
        <h3 class="game-card-title">${g.name}</h3>
        <div class="game-card-tags">
          ${g.categories.map(c => `<span class="game-card-tag">${c}</span>`).join('')}
        </div>
      </div>
    `;
    
    elements.gameGrid.appendChild(card);
  });
}

// Recommended Games (on Play View)
function renderRecommended(currentGame) {
  elements.recommendedGrid.innerHTML = '';
  
  // Find up to 6 games in same category
  const activeCat = currentGame.categories[0] || 'Classic';
  const similar = GAMES.filter(g => g.slug !== currentGame.slug && g.categories.includes(activeCat))
                       .slice(0, 6);
                       
  // If not enough similar, pad with other games
  if (similar.length < 6) {
    const ids = similar.map(s => s.slug);
    const padding = GAMES.filter(g => g.slug !== currentGame.slug && !ids.includes(g.slug)).slice(0, 6 - similar.length);
    similar.push(...padding);
  }
  
  similar.forEach(g => {
    const card = document.createElement('a');
    card.href = `#/game/${g.slug}`;
    card.className = 'game-card compact';
    
    let thumbnailHtml = '';
    
    if (g.thumbnail_url) {
      thumbnailHtml = `<img src="${g.thumbnail_url}" alt="${g.name}" class="game-card-img" loading="lazy" referrerpolicy="no-referrer">`;
    } else {
      let hash = 0;
      for (let i = 0; i < g.name.length; i++) {
          hash += g.name.charCodeAt(i);
      }
      const colorH = hash % 360;
      const colorS = 65 + (hash % 20);
      const colorL = 35 + (hash % 15);
      const cardBg = `linear-gradient(135deg, hsl(${colorH}, ${colorS}%, ${colorL}%), hsl(${(colorH + 60) % 360}, ${colorS}%, ${colorL - 10}%))`;
      const letter = g.name.charAt(0);
      
      thumbnailHtml = `
        <div class="game-img-placeholder" style="background: ${cardBg}; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
          <span class="game-icon-letter" style="font-size:2.2rem">${letter}</span>
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="game-thumbnail">
        ${thumbnailHtml}
        <div class="game-play-hover">
          <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div class="game-info">
        <h4 class="game-card-title">${g.name}</h4>
      </div>
    `;
    
    elements.recommendedGrid.appendChild(card);
  });
}

// Setup Featured Game Banner
function setupFeatured() {
  // Filter games that have local thumbnail images
  const gamesWithThumbnails = GAMES.filter(g => g.thumbnail_url && g.thumbnail_url.startsWith('thumbnails/'));
  const candidates = gamesWithThumbnails.length > 0 ? gamesWithThumbnails : GAMES;
  
  // Pick one randomly from candidates
  const game = candidates[Math.floor(Math.random() * candidates.length)];
  
  let hash = 0;
  for (let i = 0; i < game.name.length; i++) {
      hash += game.name.charCodeAt(i);
  }
  const colorH = hash % 360;
  const cardBg = `linear-gradient(135deg, hsl(${colorH}, 75%, 35%), hsl(${(colorH + 40) % 360}, 65%, 25%))`;
  
  elements.featuredBanner.style.background = cardBg;
  
  // Use the local thumbnail image or fall back to name initial if no thumbnail is set
  const visualHtml = game.thumbnail_url 
    ? `<img src="${game.thumbnail_url}" alt="${game.name}" class="featured-icon-circle" style="object-fit: cover; background: hsla(${colorH}, 90%, 55%, 0.3)">`
    : `<div class="featured-icon-circle" style="background: hsla(${colorH}, 90%, 55%, 0.3)"><span>${game.name.charAt(0)}</span></div>`;
  
  elements.featuredBanner.innerHTML = `
    <div class="featured-content">
      <span class="featured-badge">Featured Game</span>
      <h2 class="featured-title">${game.name}</h2>
      <p class="featured-desc">Play this hit arcade title unblocked directly in your browser. Complete fullscreen and theater mode support included.</p>
      <a href="#/game/${game.slug}" class="featured-play-btn">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" style="margin-right: 0.5rem">
          <path d="M8 5v14l11-7z"/>
        </svg>
        Play Now
      </a>
    </div>
    <div class="featured-visual">
      ${visualHtml}
    </div>
  `;
}

// User Actions: Favorites
function toggleFavorite(slug) {
  const index = favorites.indexOf(slug);
  if (index === -1) {
    favorites.push(slug);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem('ug77_favorites', JSON.stringify(favorites));
  updateFavoriteUI(slug);
  
  // If active page category is favorites, rerender games
  if (currentCategory === 'favorites') {
    renderGames();
  }
}

// Update Favorite UI
function updateFavoriteUI(slug) {
  const isFav = favorites.includes(slug);
  const icon = elements.favToggleBtn.querySelector('svg');
  const text = elements.favToggleBtn.querySelector('.btn-label');
  
  if (isFav) {
    icon.style.fill = 'var(--accent-orange)';
    icon.style.stroke = 'var(--accent-orange)';
    text.textContent = 'Favorited';
  } else {
    icon.style.fill = 'none';
    icon.style.stroke = 'currentColor';
    text.textContent = 'Add to Favorites';
  }
}

// User Actions: Voting
function handleVote(slug, type) {
  const currentVote = ratings[slug];
  
  if (currentVote === type) {
    // Undo vote
    delete ratings[slug];
    votesCount[slug][type === 'up' ? 'likes' : 'dislikes']--;
  } else {
    // If opposite vote exists, undo it
    if (currentVote) {
      votesCount[slug][currentVote === 'up' ? 'likes' : 'dislikes']--;
    }
    // Set new vote
    ratings[slug] = type;
    votesCount[slug][type === 'up' ? 'likes' : 'dislikes']++;
  }
  
  localStorage.setItem('ug77_ratings', JSON.stringify(ratings));
  updateVotingUI(slug);
}

function updateVotingUI(slug) {
  const vote = ratings[slug];
  const count = votesCount[slug];
  
  elements.likeCount.textContent = count.likes;
  elements.dislikeCount.textContent = count.dislikes;
  
  // Color the buttons
  if (vote === 'up') {
    elements.likeBtn.classList.add('voted-up');
    elements.dislikeBtn.classList.remove('voted-down');
  } else if (vote === 'down') {
    elements.likeBtn.classList.remove('voted-up');
    elements.dislikeBtn.classList.add('voted-down');
  } else {
    elements.likeBtn.classList.remove('voted-up');
    elements.dislikeBtn.classList.remove('voted-down');
  }
  
  // Calculate percentage bar
  const total = count.likes + count.dislikes;
  const pct = total > 0 ? (count.likes / total) * 100 : 100;
  elements.likeRatioBar.style.width = `${pct}%`;
}

// Play View Controls
function reloadGame() {
  const src = elements.gameIframe.src;
  elements.gameIframe.src = 'about:blank';
  setTimeout(() => {
    elements.gameIframe.src = src;
  }, 100);
}

function toggleTheater() {
  const isTheater = elements.iframeWrapper.classList.toggle('theater');
  elements.theaterBtn.querySelector('.btn-label').textContent = isTheater ? 'Default Size' : 'Theater Mode';
}

function toggleFullscreen() {
  const iframe = elements.gameIframe;
  
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { /* Safari */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { /* IE11 */
    iframe.msRequestFullscreen();
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
