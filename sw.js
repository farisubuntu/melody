// (A) CREATE/INSTALL CACHE
self.addEventListener("install", evt => {
 self.skipWaiting();
 evt.waitUntil(
  caches.open("Demo")
   .then(cache => cache.addAll([
    "/app.js",
    "/apple-touch-icon.png",
    "/buttons.css",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/favicon.png",
    "/icon-512.png",
    "/index.css",
    "/index.html",
    "/main-ink-black-wallpaper.jpg",
    "/manifest.json",
    "/mondly-logo.jpeg",
    "/nav.css",
    "/sw.js",
    "/temp.js",
    "/tools.md",
    "/tools.md.backup",
    "/useful_console_snippets.md",
    "/w3pro.css",
    "/sections/01_welcome.html",
    "/sections/02_family.html",
    "/sections/04_romantic.html",
    "/sections/05_food_and_drinks.html",
    "/sections/07_travel.html",
    "/sections/08_weather.html",
    "/sections/14_at_home.html",
    "/sections/15_grammar-1.html",
    "/sections/22_basic_vocabularies.html",
    "/sections/23_school.html",
    "/sections/25_introductions.html",
    "/sections/3_nat_and_languages.html",
    "/sections/88_things_and_numbers.html",
    "/sections/89_times_and_calenders.html",
    "/sections/all_lessons.css",
    "/sections/all_lessons.html",
    "/sections/all_lessons.json",
    "/sections/button-85.css",
    "/sections/button-feedback.css",
    "/sections/collapsedsidebar.css",
    "/sections/components.js",
    "/sections/images_links.txt",
    "/sections/main.css",
    "/sections/media_queries.css",
    "/sections/script.js",
    "/sections/table_3.8.css",
    "/sections/table_3.8.html",
    "/sections/TEMPLATE.html",
    "/sections/theme_1.css",
    "/sections/w3pro.css",
    "/sections/audio/02_conversation.mp3",
    "/sections/audio/02_review.mp3",
    "/sections/audio/0305.mp3",
    "/sections/audio/0306.mp3",
    "/sections/audio/1501.mp3",
    "/sections/audio/1502.mp3",
    "/sections/audio/1503.mp3",
    "/sections/audio/1504.mp3",
    "/sections/audio/1505.mp3",
    "/sections/audio/15_review.mp3",
    "/sections/audio/2201.mp3",
    "/sections/audio/2202.mp3",
    "/sections/audio/2203.mp3",
    "/sections/audio/2204.mp3",
    "/sections/audio/2205.mp3",
    "/sections/audio/2206.mp3",
    "/sections/audio/22_conversation.mp3",
    "/sections/audio/301.mp3",
    "/sections/audio/302.mp3",
    "/sections/audio/303.mp3",
    "/sections/audio/8801.mp3",
    "/sections/audio/8802.mp3",
    "/sections/audio/8803.mp3",
    "/sections/audio/8804.mp3",
    "/sections/audio/8805.mp3",
    "/sections/audio/8806.mp3",
    "/sections/audio/8901.mp3",
    "/sections/audio/8902.mp3",
    "/sections/audio/8903.mp3",
    "/sections/audio/8904.mp3",
    "/sections/audio/8905.mp3",
    "/sections/audio/link_template.txt",
    "/sections/audio/TODO.txt",
    "/sections/audio/combined/01.mp3",
    "/sections/audio/combined/02.mp3",
    "/sections/audio/combined/04.mp3",
    "/sections/audio/combined/07.mp3",
    "/sections/audio/combined/14.mp3",
    "/sections/audio/combined/15.mp3",
    "/sections/audio/combined/22_MP3WRAP.mp3",
    "/sections/audio/combined/8801_MP3WRAP.mp3",
    "/sections/audio/combined/89_1_to_5.mp3"
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