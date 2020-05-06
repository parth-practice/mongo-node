const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

async function main() {
    const client = new MongoClient(url);
    await client.connect();

    const admin = client.db(dbName).admin();

    console.log("List of Database:::", await admin.listDatabases());
}

main();