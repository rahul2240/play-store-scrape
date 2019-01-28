var gplay = require('google-play-scraper');

const fs = require('fs');



cate = ["ANDROID_WEAR","BOOKS_AND_REFERENCE","BUSINESS","COMICS","COMMUNICATION","EDUCATION","ENTERTAINMENT","FINANCE","HEALTH_AND_FITNESS","LIBRARIES_AND_DEMO","LIFESTYLE",
         "APP_WALLPAPER","MEDIA_AND_VIDEO","TOOLS","TRANSPORTATION","MEDICAL","MUSIC_AND_AUDIO","NEWS_AND_MAGAZINES","PERSONALIZATION","PHOTOGRAPHY","PRODUCTIVITY","SHOPPING","SOCIAL","SPORTS",
         "TRAVEL_AND_LOCAL","WEATHER","APP_WIDGETS","GAME_ACTION","GAME_ADVENTURE","GAME_ARCADE","GAME_BOARD","GAME_CARD","GAME_CASINO",
         "GAME_CASUAL","GAME_EDUCATIONAL","GAME_MUSIC","GAME_PUZZLE","GAME_RACING","GAME_ROLE_PLAYING","GAME_SIMULATION","GAME_SPORTS","GAME_STRATEGY",
         "GAME_TRIVIA","GAME_WORD","FAMILY","FAMILY_ACTION","FAMILY_BRAINGAMES","FAMILY_CREATE","FAMILY_EDUCATION","FAMILY_MUSICVIDEO","FAMILY_PRETEND"]
result = []

async function sta(i) {
  try{
    let p = await gplay.list({
      category: gplay.category[cate[i]],
      num: 10,
      fullDetail: true
    });


    fs.appendFile('text.txt', JSON.stringify(p) + '\n\n\n\n\n\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
  } catch(e) {
    console.log(e);
  }
}


for(let i=0; i < cate.length; i++){
  sta(i);
}
