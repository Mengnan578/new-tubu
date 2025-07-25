// 这个脚本用于向数据库中插入类别数据
import { db } from "../db";
import { categories } from "../db/schema";

const categoryName = [
  "Cards and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

// 往数据库中插入一些数据
async function main() {
  try {
    const values = categoryName.map((name) => ({
      name,
      description: `A category for ${name}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
}

main();
