import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const foo = sqliteTable('foo', {
  id: integer('id'),
  name: text('name'),
});

integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true });
