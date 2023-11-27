# `jq`
command line tools to deal with `json` file format using command line and accept a std in/out.

install:

`sudo apt-get install jq`


### Prettify JSON:

```bash
jq '.' json_
```

---

- To convert audio mp3 to MP4 by ffmpeg, use the following command

```bash
ffmpeg -f lavfi -i color=c=black:s=1280x720:r=5 -i audio.mp3 -crf 0 -c:a copy -shortest output.mp4
```

Description
This generates mp4 formatted video with blank black background with the color source filter instead of using an image.

Since it is just black video this is one case with lossless mode (-crf 0) will have a smaller file size than the default lossy mode.