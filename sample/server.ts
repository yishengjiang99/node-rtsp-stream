const Stream = require("node-rtsp-stream");
const stream = new Stream({
  name: "name",
  streamUrl: "rtp://127.0.0.1:1234",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});
