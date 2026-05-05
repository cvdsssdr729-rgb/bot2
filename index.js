const { Client } = require('discord.js-selfbot-v13');

const client = new Client();
const TOKEN = "MTUwMDY3MzM3OTM1Mzc1OTc1NQ.GyVv0A.Kv_-PjurN4HIg9A-2vZon8VRmArwiOneiIYgoE";

// ============ KANAŁY NA KTÓRYCH BOT NASŁUCHUJE ============
const KANALY = [
  '1315581369266737192',
  '1315581226580578304',
  '1315580986519457826',
  '1315584116481327135',
  '1304781590202941462',
  '1304782317621088257',
  '1304781541175590943',
  '1359820916237799574',
  '1309603165393522749',
  '1309603320142364693',
  '1302285894207799377',
  '1304781492941094922',
];

// ============ BLACKLISTA UŻYTKOWNIKÓW ============
const BLACKLIST = [
  '1138065606457970788',
  '1268210410478370856',
  '1458092661281132618',
  '1384257566132928553',
  '1421758139140673657',
  '1263218014577360897',
  '1096533068220739614',
  '952810689012043808',
  '1422540888424579132',
  '1408376578764705832',
  '1464343590586290287',
  '776499166129160202',
  '694685755020148766',
  '320967882882416640',
  '781792204452134922',
  '1337125903897198694',
  '1344703902611931326',
  '1072773789236088842',
  '1337757826474577971',
];

// ============ OPÓŹNIENIE (w milisekundach) ============
const OPOZNIENIE = 2500;

// ============ PRODUKTY PODZIELONE NA MARKI ============

const products = {
  // NIKE
  "nike dunk": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508174519&affcode=xfrostyy",
  "nike dunk sb": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7727364557&affcode=xfrostyy",
  "nike air max 90": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513803902&affcode=xfrostyy",
  "nike air max 95": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513956598&affcode=xfrostyy",
  "nike air max 97": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511821407&affcode=xfrostyy",
  "nike air max plus": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514208160&affcode=xfrostyy",
  "nike tn": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511941888&affcode=xfrostyy",
  "nike shox": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508717088&affcode=xfrostyy",
  "nike nocta tech": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511817339&affcode=xfrostyy",
  "nike tech suit": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508107297&affcode=xfrostyy",
  "nike tech hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514164652&affcode=xfrostyy",
  "nike pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511813230&affcode=xfrostyy",
  "nike shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512751159&affcode=xfrostyy",
  "nike t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507685614&affcode=xfrostyy",
  "nike slide": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509973596&affcode=xfrostyy",
  "nike bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509448296&affcode=xfrostyy",
  "nike socks": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505760295&affcode=xfrostyy",
  "nike suit": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507685614&affcode=xfrostyy",
  "nike air": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511892544&affcode=xfrostyy",
  "nike mind 001": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7702660885&affcode=xfrostyy",

  // AIR FORCE
  "air force 1": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510034021&affcode=xfrostyy",
  "air force 1 x lv": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510797594&affcode=xfrostyy",

  // JORDAN
  "jordan 1 high": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511870407&affcode=xfrostyy",
  "jordan 1 low": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514146930&affcode=xfrostyy",
  "jordan 4": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507573306&affcode=xfrostyy",
  "jordan 5": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511870407&affcode=xfrostyy",
  "jordan 6": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510077697&affcode=xfrostyy",
  "jordan 11": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513768390&affcode=xfrostyy",
  "jordan 12": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507595931&affcode=xfrostyy",
  "jordan 13": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508947061&affcode=xfrostyy",
  "jordan 312": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509505704&affcode=xfrostyy",
  "jordan bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514643114&affcode=xfrostyy",
  "jordan socks": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507573304&affcode=xfrostyy",
  "jordan shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7757924266&affcode=xfrostyy",

  // ADIDAS
  "adidas gazelle": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506152949&affcode=xfrostyy",
  "adidas campus": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509028109&affcode=xfrostyy",
  "adidas samba": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511375544&affcode=xfrostyy",
  "adidas spezial": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512296405&affcode=xfrostyy",
  "adidas superstar": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510654157&affcode=xfrostyy",
  "adidas socks": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511867470&affcode=xfrostyy",

  // NEW BALANCE
  "new balance 550": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511910292&affcode=xfrostyy",
  "new balance 9060": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509543359&affcode=xfrostyy",
  "new balance 1000": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510004541&affcode=xfrostyy",
  "new balance 1906r": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509633165&affcode=xfrostyy",
  "new balance 2002r": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507485569&affcode=xfrostyy",
  "new balance 610t": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505766319&affcode=xfrostyy",
  "new balance 991v2": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509650563&affcode=xfrostyy",
  "new balance u574": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511565107&affcode=xfrostyy",
  "new balance mr993": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511880934&affcode=xfrostyy",

  // YEEZY
  "yeezy 350": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507610688&affcode=xfrostyy",
  "yeezy 500": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513736650&affcode=xfrostyy",
  "yeezy 700": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507529041&affcode=xfrostyy",
  "yeezy foam": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510039941&affcode=xfrostyy",
  "yeezy slide": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505772193&affcode=xfrostyy",

  // STONE ISLAND
  "stone island hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511943850&affcode=xfrostyy",
  "stone island hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511915899&affcode=xfrostyy",
  "stone island t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511340637&affcode=xfrostyy",
  "stone island jeans": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512204337&affcode=xfrostyy",
  "stone island jacket": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511915899&affcode=xfrostyy",
  "stone island shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509695695&affcode=xfrostyy",
  "stone island polo": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513244172&affcode=xfrostyy",

  // ESSENTIALS
  "essentials hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506424493&affcode=xfrostyy",
  "essentials shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510781920&affcode=xfrostyy",
  "essentials t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506860725&affcode=xfrostyy",
  "essentials pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510031953&affcode=xfrostyy",

  // STUSSY
  "stussy bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509470028&affcode=xfrostyy",
  "stussy hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7651106996&affcode=xfrostyy",
  "stussy t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512778877&affcode=xfrostyy",
  "stussy shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508293334&affcode=xfrostyy",
  "stussy hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510019070&affcode=xfrostyy",
  "stussy wallet": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509166226&affcode=xfrostyy",

  // CORTEIZ
  "corteiz t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511880936&affcode=xfrostyy",
  "corteiz hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7534285731&affcode=xfrostyy",
  "corteiz pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7534285731&affcode=xfrostyy",
  "corteiz shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511567928&affcode=xfrostyy",
  "corteiz hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512546132&affcode=xfrostyy",
  "corteiz balaclava": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514625440&affcode=xfrostyy",
  "corteiz vest": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509207698&affcode=xfrostyy",

  // HELLSTAR
  "hellstar hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509979471&affcode=xfrostyy",
  "hellstar t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513456381&affcode=xfrostyy",
  "hellstar shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507219471&affcode=xfrostyy",

  // TRAPSTAR
  "trapstar pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509181842&affcode=xfrostyy",
  "trapstar suit": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512503074&affcode=xfrostyy",
  "trapstar t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508300870&affcode=xfrostyy",
  "trapstar hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511949686&affcode=xfrostyy",

  // SUPREME
  "supreme hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7648211681&affcode=xfrostyy",
  "supreme pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7648211681&affcode=xfrostyy",
  "supreme bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505778105&affcode=xfrostyy",

  // BAPE
  "bape hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512575826&affcode=xfrostyy",
  "bape t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512857037&affcode=xfrostyy",
  "bape shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509135114&affcode=xfrostyy",
  "bapesta": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509059398&affcode=xfrostyy",

  // LV
  "lv bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512272719&affcode=xfrostyy",
  "lv belt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514150866&affcode=xfrostyy",
  "lv slide": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508937295&affcode=xfrostyy",
  "lv hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510803538&affcode=xfrostyy",
  "lv bracelet": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507215391&affcode=xfrostyy",
  "lv keychain": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510036001&affcode=xfrostyy",
  "lv sweater": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508780332&affcode=xfrostyy",
  "lv trainer": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512408158&affcode=xfrostyy",
  "lv skate": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7730372182&affcode=xfrostyy",

  // GUCCI
  "gucci bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512747285&affcode=xfrostyy",
  "gucci belt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509123172&affcode=xfrostyy",
  "gucci hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512252999&affcode=xfrostyy",

  // DIOR
  "dior belt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511479434&affcode=xfrostyy",
  "dior jeans": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514129054&affcode=xfrostyy",
  "dior b22": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506403399&affcode=xfrostyy",
  "dior b27": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505789915&affcode=xfrostyy",
  "dior b30": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511860567&affcode=xfrostyy",
  "dior b33": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7651164118&affcode=xfrostyy",
  "dior hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506393818&affcode=xfrostyy",
  "dior glasses": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510628779&affcode=xfrostyy",
  "dior bag": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508207759&affcode=xfrostyy",

  // CHROME HEARTS
  "chrome hearts hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508277498&affcode=xfrostyy",
  "chrome hearts t-shirt": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508385644&affcode=xfrostyy",
  "chrome hearts hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506395832&affcode=xfrostyy",
  "chrome hearts jeans": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505776105&affcode=xfrostyy",
  "chrome hearts bracelet": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7509483914&affcode=xfrostyy",
  "chrome hearts wallet": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506878419&affcode=xfrostyy",

  // RALPH LAUREN
  "ralph lauren hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508285438&affcode=xfrostyy",
  "ralph lauren sweater": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506395467&affcode=xfrostyy",
  "ralph lauren polo": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510091830&affcode=xfrostyy",
  "ralph lauren shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510815314&affcode=xfrostyy",
  "ralph lauren hat": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506295548&affcode=xfrostyy",
  "ralph lauren socks": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508798100&affcode=xfrostyy",
  "ralph lauren pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511937836&affcode=xfrostyy",

  // DENIM TEARS
  "denim tears t-shirts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512780789&affcode=xfrostyy",
  "denim tears pants": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512514732&affcode=xfrostyy",
  "denim tears shorts": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508719014&affcode=xfrostyy",
  "denim tears hoodie": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512514732&affcode=xfrostyy",

  // CARTIER
  "cartier glasses": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513215016&affcode=xfrostyy",
  "cartier necklace": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512798651&affcode=xfrostyy",
  "cartier bracelet": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506805425&affcode=xfrostyy",
  "cartier ring": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7512784799&affcode=xfrostyy",

  // APPLE
  "apple pencil": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508205827&affcode=xfrostyy",
  "airpods 2": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513301602&affcode=xfrostyy",
  "airpods pro 2": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7514103454&affcode=xfrostyy",
  "airpods pro max": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7511397655&affcode=xfrostyy",
  "apple watch": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7504226154&affcode=xfrostyy",
  "iphone 17 case": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7651171746&affcode=xfrostyy",
  "apple charging head": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7507627651&affcode=xfrostyy"
};

// ============ MAPOWANIE POLSKICH NAZW NA ANGIELSKIE ============
const polishToEnglish = {
  // NIKE
  "buty nike": "nike dunk",
  "buta nike": "nike dunk",
  "najki": "nike dunk",
  "spodenki nike": "nike shorts",
  "spodenek nike": "nike shorts",
  "koszulka nike": "nike t-shirt",
  "koszulki nike": "nike t-shirt",
  "koszulkę nike": "nike t-shirt",
  "bluza nike": "nike tech hoodie",
  "bluzy nike": "nike tech hoodie",
  
  // AIR FORCE
  "af1": "air force 1",
  "siłowki": "air force 1",
  "siłowek": "air force 1",
  "air force": "air force 1",
  
  // JORDAN
  "jordany": "jordan 4",
  "jordanów": "jordan 4",
  "j4": "jordan 4",
  "buty jordan": "jordan 4",
  "buta jordan": "jordan 4",
  "spodenki jordan": "jordan shorts",
  "spodenek jordan": "jordan shorts",
  "skarpetki jordan": "jordan socks",
  "skarpetek jordan": "jordan socks",
  "torba jordan": "jordan bag",
  "torby jordan": "jordan bag",
  
  // ADIDAS
  "adidasy": "adidas samba",
  "adidasów": "adidas samba",
  "buty adidas": "adidas samba",
  "buta adidas": "adidas samba",
  
  // NEW BALANCE
  "nb": "new balance 9060",
  
  // YEEZY
  "yzy": "yeezy foam",
  "yezzy": "yeezy foam",
  
  // STONE ISLAND
  "czapka stone island": "stone island hat",
  "czapki stone island": "stone island hat",
  "czapkę stone island": "stone island hat",
  "bluza stone island": "stone island hoodie",
  "bluzy stone island": "stone island hoodie",
  "bluzę stone island": "stone island hoodie",
  "koszulka stone island": "stone island t-shirt",
  "koszulki stone island": "stone island t-shirt",
  "koszulkę stone island": "stone island t-shirt",
  "spodenki stone island": "stone island shorts",
  "spodenek stone island": "stone island shorts",
  "jeansy stone island": "stone island jeans",
  "jeansów stone island": "stone island jeans",
  "stone island hoodie": "stone island hoodie",
  "stone island hat": "stone island hat",
  "stone island t-shirt": "stone island t-shirt",
  
  // ESSENTIALS
  "bluza essentials": "essentials hoodie",
  "bluzy essentials": "essentials hoodie",
  "bluzę essentials": "essentials hoodie",
  "spodenki essentials": "essentials shorts",
  "spodenek essentials": "essentials shorts",
  "koszulka essentials": "essentials t-shirt",
  "koszulki essentials": "essentials t-shirt",
  "koszulkę essentials": "essentials t-shirt",
  "essentials hoodie": "essentials hoodie",
  "essentials shorts": "essentials shorts",
  
  // STUSSY
  "czapka stussy": "stussy hat",
  "czapki stussy": "stussy hat",
  "czapkę stussy": "stussy hat",
  "bluza stussy": "stussy hoodie",
  "bluzy stussy": "stussy hoodie",
  "bluzę stussy": "stussy hoodie",
  "koszulka stussy": "stussy t-shirt",
  "koszulki stussy": "stussy t-shirt",
  "koszulkę stussy": "stussy t-shirt",
  "spodenki stussy": "stussy shorts",
  "spodenek stussy": "stussy shorts",
  "torba stussy": "stussy bag",
  "torby stussy": "stussy bag",
  "stussy hoodie": "stussy hoodie",
  "stussy hat": "stussy hat",
  "stussy t-shirt": "stussy t-shirt",
  
  // CORTEIZ
  "czapka corteiz": "corteiz hat",
  "czapki corteiz": "corteiz hat",
  "czapkę corteiz": "corteiz hat",
  "bluza corteiz": "corteiz hoodie",
  "bluzy corteiz": "corteiz hoodie",
  "bluzę corteiz": "corteiz hoodie",
  "koszulka corteiz": "corteiz t-shirt",
  "koszulki corteiz": "corteiz t-shirt",
  "koszulkę corteiz": "corteiz t-shirt",
  "spodenki corteiz": "corteiz shorts",
  "spodenek corteiz": "corteiz shorts",
  "corteiz hoodie": "corteiz hoodie",
  "corteiz hat": "corteiz hat",
  "corteiz t-shirt": "corteiz t-shirt",
  
  // HELLSTAR
  "bluza hellstar": "hellstar hoodie",
  "bluzy hellstar": "hellstar hoodie",
  "bluzę hellstar": "hellstar hoodie",
  "koszulka hellstar": "hellstar t-shirt",
  "koszulki hellstar": "hellstar t-shirt",
  "koszulkę hellstar": "hellstar t-shirt",
  "hellstar hoodie": "hellstar hoodie",
  
  // TRAPSTAR
  "bluza trapstar": "trapstar hoodie",
  "bluzy trapstar": "trapstar hoodie",
  "bluzę trapstar": "trapstar hoodie",
  "spodnie trapstar": "trapstar pants",
  "spodni trapstar": "trapstar pants",
  "trapstar hoodie": "trapstar hoodie",
  
  // SUPREME
  "bluza supreme": "supreme hoodie",
  "bluzy supreme": "supreme hoodie",
  "bluzę supreme": "supreme hoodie",
  "supreme hoodie": "supreme hoodie",
  
  // BAPE
  "bluza bape": "bape hoodie",
  "bluzy bape": "bape hoodie",
  "bluzę bape": "bape hoodie",
  "koszulka bape": "bape t-shirt",
  "koszulki bape": "bape t-shirt",
  "koszulkę bape": "bape t-shirt",
  "bape hoodie": "bape hoodie",
  
  // LV
  "torba lv": "lv bag",
  "torby lv": "lv bag",
  "torbę lv": "lv bag",
  "pasek lv": "lv belt",
  "paski lv": "lv belt",
  "paska lv": "lv belt",
  "klapki lv": "lv slide",
  "klapek lv": "lv slide",
  "czapka lv": "lv hat",
  "czapki lv": "lv hat",
  "czapkę lv": "lv hat",
  "lv bag": "lv bag",
  "lv belt": "lv belt",
  
  // GUCCI
  "torba gucci": "gucci bag",
  "torby gucci": "gucci bag",
  "torbę gucci": "gucci bag",
  "pasek gucci": "gucci belt",
  "paski gucci": "gucci belt",
  "paska gucci": "gucci belt",
  "gucci bag": "gucci bag",
  
  // DIOR
  "pasek dior": "dior belt",
  "paski dior": "dior belt",
  "paska dior": "dior belt",
  "czapka dior": "dior hat",
  "czapki dior": "dior hat",
  "okulary dior": "dior glasses",
  "okularów dior": "dior glasses",
  "dior belt": "dior belt",
  
  // CHROME HEARTS
  "czapka chrome hearts": "chrome hearts hat",
  "czapki chrome hearts": "chrome hearts hat",
  "bluza chrome hearts": "chrome hearts hoodie",
  "bluzy chrome hearts": "chrome hearts hoodie",
  "bluzę chrome hearts": "chrome hearts hoodie",
  "chrome hearts hat": "chrome hearts hat",
  
  // RALPH LAUREN
  "bluza ralph lauren": "ralph lauren hoodie",
  "bluzy ralph lauren": "ralph lauren hoodie",
  "bluzę ralph lauren": "ralph lauren hoodie",
  "czapka ralph lauren": "ralph lauren hat",
  "czapki ralph lauren": "ralph lauren hat",
  "koszulka ralph lauren": "ralph lauren polo",
  "koszulki ralph lauren": "ralph lauren polo",
  "ralph lauren hoodie": "ralph lauren hoodie",
  
  // CARTIER
  "okulary cartier": "cartier glasses",
  "okularów cartier": "cartier glasses",
  "naszyjnik cartier": "cartier necklace",
  "naszyjniki cartier": "cartier necklace",
  "bransoletka cartier": "cartier bracelet",
  "bransoletki cartier": "cartier bracelet",
  "pierścionek cartier": "cartier ring",
  "pierścionki cartier": "cartier ring",
  "cartier glasses": "cartier glasses",
  
  // APPLE
  "ladowarka apple": "apple charging head",
  "ładowarka apple": "apple charging head",
  "etui iphone": "iphone 17 case",
  "etui na iphone": "iphone 17 case",
  "zegarek apple": "apple watch",
  "zegarki apple": "apple watch",
  "apple pencil": "apple pencil",
  "airpods": "airpods 2"
};

// ============ SŁOWA PROŚBY ============
const requestWords = [
  'daj', 'dajcie', 'podeślij', 'podeslij', 'podaj', 'ma ktoś', 'macie',
  'potrzebuję', 'potrzebuje', 'szukam', 'potrzebny', 'link do', 'linka do',
  'podajcie', 'wrzuć', 'wrzuc', 'jakieś', 'jakies', 'ma ktos',
  'give', 'send', 'anyone have', 'got link', 'need', 'looking for', 'link to', 'w2c'
];

// ============ USUWANIE AFFILIATE ============
function removeAffiliate(link) {
  return link.replace(/&affcode=xfrostyy/g, '').replace(/\?affcode=xfrostyy/g, '');
}

// ============ FUNKCJA SPRAWDZAJĄCA PROŚBĘ ============
function isRequest(message) {
  const lowerMsg = message.toLowerCase();
  for (const word of requestWords) {
    if (lowerMsg.includes(word)) return true;
  }
  return false;
}

// ============ FUNKCJA ZNAJDOWANIA PRODUKTU ============
function findProduct(query) {
  const lowerQuery = query.toLowerCase();
  
  for (const [polish, english] of Object.entries(polishToEnglish)) {
    if (lowerQuery.includes(polish)) {
      if (products[english]) return products[english];
    }
  }
  
  for (const [productName, link] of Object.entries(products)) {
    if (lowerQuery.includes(productName.toLowerCase())) {
      return link;
    }
  }
  return null;
}

// ============ KOMENDA DO BLACKLISTY ============
client.on('messageCreate', async (message) => {
  if (message.author.id !== client.user.id) return;
  if (!message.content.startsWith('!blacklist')) return;
  
  const args = message.content.split(' ');
  const action = args[1];
  const userId = args[2];
  
  if (action === 'add' && userId) {
    if (!BLACKLIST.includes(userId)) {
      BLACKLIST.push(userId);
      message.reply(`Dodano ${userId} do blacklisty`);
    }
  } else if (action === 'remove' && userId) {
    const index = BLACKLIST.indexOf(userId);
    if (index !== -1) {
      BLACKLIST.splice(index, 1);
      message.reply(`Usunięto ${userId} z blacklisty`);
    }
  } else {
    message.reply(`Blacklista: ${BLACKLIST.join(', ') || 'pusta'}`);
  }
});

// ============ GŁÓWNY NASŁUCH ============
client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}`);
  console.log(`Załadowano ${Object.keys(products).length} produktów`);
  console.log(`Bot nasłuchuje na ${KANALY.length} kanałach`);
  console.log(`Blacklista: ${BLACKLIST.length} użytkowników`);
  console.log(`Opóźnienie: ${OPOZNIENIE/1000}s`);
});

client.on('messageCreate', async (message) => {
  if (!KANALY.includes(message.channel.id)) return;
  if (message.author.id === client.user.id) return;
  if (BLACKLIST.includes(message.author.id)) return;
  
  const content = message.content;
  
  if (isRequest(content)) {
    const link = findProduct(content);
    if (link) {
      const cleanLink = removeAffiliate(link);
      setTimeout(() => {
        message.reply(cleanLink);
        console.log(`Wysłano link dla: "${content.substring(0, 50)}"`);
      }, OPOZNIENIE);
    }
  }
});

client.login(TOKEN);