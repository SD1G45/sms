import { PrismaClient } from '@prisma/client';
import { ServerInfo } from 'apollo-server';
import { execSync } from 'child_process';
import { GraphQLClient } from 'graphql-request';
import { nanoid } from 'nanoid';
import { join } from 'path';
import { Client } from 'pg';

type TestContext = {
  client: GraphQLClient
  prisma: PrismaClient
}

export function createTestContext(): TestContext {
  let ctx = {} as TestContext
  const graphqlCtx = graphqlTestContext();
  const prismaCtx = prismaTestContext();

  beforeEach(async () => {
    const client = await graphqlCtx.before();
    const prisma = await prismaCtx.before();

    Object.assign(ctx, {
      client,
      prisma,
    });
  })

  afterEach(async () => {
    await graphqlCtx.after();
    await prismaCtx.after();
  })

  return ctx
}

function graphqlTestContext() {
  let serverInstance: ServerInfo | null = null;

  return {
    async before() {
      return new GraphQLClient(`http://localhost:3001`);
    },
    async after() {
      serverInstance?.server.close()
    },
  }
}

function prismaTestContext() {
  const prismaBinary = join(__dirname, '..', 'node_modules', '.bin', 'prisma');
  let schema = '';
  let databaseUrl = '';
  let prismaClient: null | PrismaClient = null;

  return {
    async before() {
      // Generate a unique schema identifier for this test context
      schema = `test_${nanoid()}`;
      // Generate the pg connection string for the test schema
      databaseUrl = `postgres://postgres:postgres@localhost:5432/testing?schema=${schema}`;

      // Set the required environment variable to contain the connection string
      // to our database test schema
      process.env.DATABASE_URL = databaseUrl;

      // Run the migrations to ensure our schema has the required structure
      execSync(`${prismaBinary} migrate up --create-db --experimental`, {
        env: {
          ...process.env,
          DATABASE_URL: databaseUrl,
        },
      });

      // Construct a new Prisma Client connected to the generated Postgres schema
      prismaClient = new PrismaClient();

      return prismaClient;
    },
    async after() {
      // Drop the schema after the tests have completed
      const client = new Client({
        connectionString: databaseUrl,
      });
      await client.connect();
      await client.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
      await client.end();

      // Release the Prisma Client connection
      await prismaClient?.$disconnect();
    },
  }
}