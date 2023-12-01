- Creating captions: https://www.vtt-creator.com/editor
- for html5 video player: use video.js player:
sample:

```html
<!DOCTYPE html>
<html>

<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width">
 <title>Video.js Player</title>
 <link href="style.css" rel="stylesheet" type="text/css" />
 <link href="https://vjs.zencdn.net/8.6.1/video-js.css" rel="stylesheet" />
 <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
 <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
</head>

<body>
 <div class="video-wrapper">
  <video id="top-video" class="video-js" controls preload="auto" poster="poster.png" data-setup="{}">
   <source src="sample-5s.mp4" type="video/mp4" />
   <source src="sample-5s.webm" type="video/webm" />
   <p class="vjs-no-js">
    Your browser dosen't support html5 video
   </p>
  </video>
 </div>
 <script src="https://vjs.zencdn.net/8.6.1/video.min.js"></script>


