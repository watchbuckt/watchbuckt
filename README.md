# Watchbuckt

A Monorepo using `Turbo` and `PNPM` for the whole watchbuckt platform.

## Apps and Packages

- `native`: [React Native](https://reactnative.dev/) app built with [Expo](https://docs.expo.dev/)
- `web`: [Remix](https://remix.run/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `core-app`: a shared package containing a component library a shared logic.
- `social`: An API built with [Hono](https://hono.dev/) and SQLite ([Turso](https://turso.tech/)) with the [Drizzle](https://www.prisma.io/) ORM.
- `media`: An API built with [Fastify](https://fastify.dev/) and MongoDB (using Mongoose).
- `core-lib`: a shared pacckage for type definitions and validations.

## LICENSE

Watchbuckt - A platform for couch potatos.

Copyright (C) 2024 Jihed Mastouri & contributors.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
