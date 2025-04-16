import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 数据库连接
mongoose.connect(process.env.DB_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));


// 引入路由
import authRoutes from './routes/auth.js';
import noteRoutes from './routes/notes.js';

app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
