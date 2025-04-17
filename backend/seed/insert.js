import User from '../models/user.js';
import Note from '../models/note.js';
import bcrypt from 'bcrypt';
import { defaultUser, defaultNotes } from './data.js';

export async function insertInitialData() {

    let user = await User.findOne({ username: defaultUser.username });

    // 👇 如果没有这个用户，就创建一个
    if (!user) {
      const hashedPassword = await bcrypt.hash(defaultUser.password, 10);
      user = await User.create({
        username: defaultUser.username,
        password: hashedPassword,
      });
    }
    
    // 👇 先删掉这个用户的旧笔记
    await Note.deleteMany({ userId: user._id });
    
    const notesWithUser = defaultNotes.map(note => ({ ...note, userId: user._id }));
    await Note.insertMany(notesWithUser);
    
    console.log('✅ 已插入初始用户和笔记数据');
}
