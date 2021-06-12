const { MongoClient } = require('mongodb');
const { uri } = require('./config');

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => {
    console.log(`${db.name}`);
  });
}

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  }
  catch (err) {
    console.log('this is catching the err')
    console.log(err);
  }
  finally {
    await client.close();
  }
}

main().catch(console.error);