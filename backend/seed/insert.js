import User from "../models/user.js";
import Note from "../models/note.js";
import { defaultUser, defaultNotes } from "./data.js";

export async function insertInitialData() {
  let user = await User.findOne({ username: defaultUser.username });
  const existing = await User.findOne({ username: defaultUser.username });

  if (existing) {
    await Note.deleteMany({ userId: existing._id });
    await User.deleteOne({ _id: existing._id });
    console.log("🗑️  已删除旧用户及其笔记");
  }

  // 👇 创建一个新的用户
  const { username, password } = defaultUser;
  const newUser = new User({ username, password });
  await newUser.save();
  console.log("✅ 已插入初始用户数据");

  user = await User.findOne({ username: defaultUser.username });

  // 👇 再插入新的笔记
  const notesWithUser = defaultNotes.map((note) => ({
    ...note,
    userId: user._id,
  }));
  await Note.insertMany(notesWithUser);

  console.log("✅ 已插入初始用户和笔记数据");
}
