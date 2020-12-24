const Stream = require("./videoStream");
const stream = new Stream({
  name: "name",
  streamUrl: "rtsp://localhost:8554/ragnus82",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});
