import {
  boolean,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("Users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }),
  location: varchar("location", { length: 255 }),
  ipAddress: varchar("ip_address", { length: 255 }),
  emailVerified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
