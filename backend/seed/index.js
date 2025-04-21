import { insertInitialData } from "./insert.js";

export default async function runSeed() {
  try {
    await insertInitialData();
  } catch (error) {
    console.error("❌ fail to initialize data:", error);
  }
}
