import { insertInitialData } from './insert.js';

export default async function runSeed() {
  try {
    await insertInitialData();
  } catch (error) {
    console.error('❌ 初始化数据失败:', error);
  }
}
