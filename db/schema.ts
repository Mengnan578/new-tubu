import {
  pgTable,
  uuid,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 定义users 表
// 这段代码定义了一个名为users的PostgreSQL数据表结构
// 包含以下字段:
// - id: UUID类型的主键,自动生成随机值
// - clerkId: 文本类型,唯一且不能为空,用于存储Clerk认证ID
// - name: 文本类型,不能为空,用户名
// - imageUrl: 文本类型,不能为空,用户头像URL
// - createdAt: 时间戳,默认为当前时间,记录创建时间
// - updatedAt: 时间戳,默认为当前时间,记录更新时间
export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerk_id").unique().notNull(),
    name: text("name").notNull(),
    // TODO: add banner fields
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    // 这是表的额外配置部分,用于创建索引
    // (t)=> [] 是一个接收表对象的函数,返回一个数组包含表的额外配置
    // uniqueIndex('clerk_id_idx') 创建一个名为'clerk_id_idx'的唯一索引
    // .on(t.clerkId) 指定这个索引应用在clerkId字段上
  },
  (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]
);

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull().unique(),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (t) => [uniqueIndex("name_idx").on(t.name)]
);

export const videos = pgTable("videos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  userId: uuid("user_id")
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .notNull(),
  categoryId: uuid("category_id")
    .references(() => categories.id, {
      onDelete: "set null",
    }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  videos: many(videos),
}));

export const categoryRelations = relations(categories, ({ many }) => ({
  videos: many(videos),
}));

// 定义videos表与其他表的关系
// relations函数用于建立表之间的关联关系
// 这里定义了videos表与users表的一对一关系:
// - 参数1: videos - 源表
// - 参数2: 一个接收{one}解构的函数,返回关系配置对象
export const videosRelations = relations(videos, ({ one }) => ({
  user: one(users, {
    fields: [videos.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [videos.categoryId],
    references: [categories.id],
  }),
}));
