// (A) CREATE/INSTALL CACHE
self.addEventListener("install", evt => {
 self.skipWaiting();
 evt.waitUntil(
  caches.open("Demo")
   .then(cache => cache.addAll([
    "app.js",
    "apple-touch-icon.png",
    "buttons.css",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "icon-512.png",
    "index.css",
    "index.html",
    "main-ink-black-wallpaper.jpg",
    "manifest.json",
    "mondly-logo.jpeg",
    "nav.css",
    "sw.js",
    "temp.js",
    "tools.md",
    "tools.md.backup",
    "useful_console_snippets.md",
    "w3pro.css",
    "01_welcome.html",
    "02_family.html",
    "04_romantic.html",
    "05_food_and_drinks.html",
    "07_travel.html",
    "08_weather.html",
    "14_at_home.html",
    "15_grammar-1.html",
    "22_basic_vocabularies.html",
    "23_school.html",
    "25_introductions.html",
    "3_nat_and_languages.html",
    "88_things_and_numbers.html",
    "89_times_and_calenders.html",
    "all_lessons.css",
    "all_lessons.html",
    "all_lessons.json",
    "button-85.css",
    "button-feedback.css",
    "collapsedsidebar.css",
    "components.js",
    "images_links.txt",
    "main.css",
    "media_queries.css",
    "script.js",
    "table_3.8.css",
    "table_3.8.html",
    "TEMPLATE.html",
    "theme_1.css",
    "w3pro.css",
    "02_conversation.mp3",
    "02_review.mp3",
    "0305.mp3",
    "0306.mp3",
    "1501.mp3",
    "1502.mp3",
    "1503.mp3",
    "1504.mp3",
    "1505.mp3",
    "15_review.mp3",
    "2201.mp3",
    "2202.mp3",
    "2203.mp3",
    "2204.mp3",
    "2205.mp3",
    "2206.mp3",
    "22_conversation.mp3",
    "301.mp3",
    "302.mp3",
    "303.mp3",
    "8801.mp3",
    "8802.mp3",
    "8803.mp3",
    "8804.mp3",
    "8805.mp3",
    "8806.mp3",
    "8901.mp3",
    "8902.mp3",
    "8903.mp3",
    "8904.mp3",
    "8905.mp3",
    "link_template.txt",
    "TODO.txt",
    "01.mp3",
    "02.mp3",
    "04.mp3",
    "07.mp3",
    "14.mp3",
    "15.mp3",
    "22_MP3WRAP.mp3",
    "8801_MP3WRAP.mp3",
    "89_1_to_5.mp3"
   ]))
   .catch(err => console.error(err))
 );
});

// (B) CLAIM CONTROL INSTANTLY
self.addEventListener("activate", evt => self.clients.claim());

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", evt => evt.respondWith(
 caches.match(evt.request).then(res => res || fetch(evt.request))
));

/* (C) LOAD WITH NETWORK FIRST, FALLBACK TO CACHE IF OFFLINE
self.addEventListener("fetch", evt => evt.respondWith(
 fetch(evt.request).catch(() => caches.match(evt.request))
));*/