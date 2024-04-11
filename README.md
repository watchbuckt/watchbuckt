# Watchbuckt

A Monorepo using `Turbo` and `PNPM` for the whole watchbuckt platform.

## Apps and Packages

- `native`: [React Native](https://reactnative.dev/) app built with [Expo](https://docs.expo.dev/)
- `web`: [Remix](https://remix.run/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `core-app`: a shared package containing a component library a shared logic.

- `social`: An API built with [Hono](https://hono.dev/) and SQLite ([Turso](https://turso.tech/)) with the [Drizzle](https://www.prisma.io/) ORM.
- `media`: An API built with [Fastify](https://fastify.dev/) and MongoDB (using Mongoose).

- `core-lib`: a shared pacckage for type definitions and validations.
