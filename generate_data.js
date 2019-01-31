var gplay = require('google-play-scraper');
var store = require('app-store-scraper');

let google_play_category = ["ANDROID_WEAR","BOOKS_AND_REFERENCE","BUSINESS","COMICS","COMMUNICATION","EDUCATION","ENTERTAINMENT","FINANCE","HEALTH_AND_FITNESS","LIBRARIES_AND_DEMO","LIFESTYLE",
         "APP_WALLPAPER","MEDIA_AND_VIDEO","TOOLS","TRANSPORTATION","MEDICAL","MUSIC_AND_AUDIO","NEWS_AND_MAGAZINES","PERSONALIZATION","PHOTOGRAPHY","PRODUCTIVITY","SHOPPING","SOCIAL","SPORTS",
         "TRAVEL_AND_LOCAL","WEATHER","APP_WIDGETS","GAME_ACTION","GAME_ADVENTURE","GAME_ARCADE","GAME_BOARD","GAME_CARD","GAME_CASINO",
         "GAME_CASUAL","GAME_EDUCATIONAL","GAME_MUSIC","GAME_PUZZLE","GAME_RACING","GAME_ROLE_PLAYING","GAME_SIMULATION","GAME_SPORTS","GAME_STRATEGY",
         "GAME_TRIVIA","GAME_WORD","FAMILY","FAMILY_ACTION","FAMILY_BRAINGAMES","FAMILY_CREATE","FAMILY_EDUCATION","FAMILY_MUSICVIDEO","FAMILY_PRETEND"]


let app_store_category = ["BOOKS","BUSINESS","CATALOGS","EDUCATION","ENTERTAINMENT","FINANCE","FOOD_AND_DRINK","GAMES","GAMES_ACTION","GAMES_ADVENTURE","GAMES_ARCADE","GAMES_BOARD","GAMES_CARD","GAMES_CASINO","GAMES_DICE","GAMES_EDUCATIONAL","GAMES_FAMILY","GAMES_MUSIC", "GAMES_PUZZLE", "GAMES_RACING","GAMES_ROLE_PLAYING", "GAMES_SIMULATION", "GAMES_SPORTS", "GAMES_STRATEGY", "GAMES_TRIVIA", "GAMES_WORD", "HEALTH_AND_FITNESS", "LIFESTYLE", "MAGAZINES_AND_NEWSPAPERS", "MAGAZINES_ARTS",     "MAGAZINES_AUTOMOTIVE", "MAGAZINES_WEDDINGS", "MAGAZINES_BUSINESS", "MAGAZINES_CHILDREN", "MAGAZINES_COMPUTER", "MAGAZINES_FOOD", "MAGAZINES_CRAFTS", "MAGAZINES_ELECTRONICS", "MAGAZINES_ENTERTAINMENT", "MAGAZINES_FASHION", "MAGAZINES_HEALTH", "MAGAZINES_HISTORY", "MAGAZINES_HOME", "MAGAZINES_LITERARY", "MAGAZINES_MEN", "MAGAZINES_MOVIES_AND_MUSIC", "MAGAZINES_POLITICS", "MAGAZINES_OUTDOORS", "MAGAZINES_FAMILY", "MAGAZINES_PETS", "MAGAZINES_PROFESSIONAL", "MAGAZINES_REGIONAL", "MAGAZINES_SCIENCE", "MAGAZINES_SPORTS", "MAGAZINES_TEENS", "MAGAZINES_TRAVEL", "MAGAZINES_WOMEN","MEDICAL", "MUSIC", "NAVIGATION", "NEWS", "PHOTO_AND_VIDEO", "PRODUCTIVITY", "REFERENCE", "SHOPPING", "SOCIAL_NETWORKING", "SPORTS", "TRAVEL", "UTILITIES", "WEATHER"]


async function googleplay(i) { // loop for each category
  try{
    let p = await gplay.list({
      category: gplay.category[google_play_category[i]],
      num: 120,
      fullDetail: true
    });


    fs.appendFile('playstore.json', JSON.stringify(p) + '\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
  } catch(e) {
    console.log(e);
  }
}

async function appstore(i) {
  try {
    let p = await store.list({
            category: store.category[app_store_category[i]],
            num: 200,
            fullDetail: true
          });

          fs.appendFile('appstore.json', JSON.stringify(p) + '\n', function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
  } catch(e) {
    console.log(e);
  }
}


for (var i = 0; i < google_play_category.length; i++){
    googleplay(i)

}

for (var i = 0; i < app_store_category.length; i++){
    appstore(i)

}
