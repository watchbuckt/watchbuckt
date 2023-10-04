import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable('table', {
	id: integer('id')
});

integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true })



