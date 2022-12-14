import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  shares: String,
  description: String,
});

// Collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);
