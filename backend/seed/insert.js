import User from "../models/user.js";
import Note from "../models/note.js";
import { defaultUser, defaultNotes } from "./data.js";

export async function insertInitialData() {
  let user = await User.findOne({ username: defaultUser.username });
  // check if user exists
  if (user) {
    await Note.deleteMany({ userId: user._id });
    await User.deleteOne({ _id: user._id });
    console.log("✅ Deleted old user and notes data");
  }
  // insert an initial user and notes data
  const { username, password } = defaultUser;
  const newUser = new User({ username, password });
  await newUser.save();
  console.log("✅ Inserted new user data: username: testuser, password:123456");
  user = await User.findOne({ username: newUser.username });

  // insert notes data
  const notesWithUser = defaultNotes.map((note) => ({
    ...note,
    userId: user._id,
  }));
  await Note.insertMany(notesWithUser);

  console.log("✅ Inserted new notes data");
  console.log("✅ Database initialized successfully");
}
