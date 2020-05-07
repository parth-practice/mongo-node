const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const CirculationRepo = require('./repos/circulationRepo');
const data = require('./circulation.json');

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

async function main() {
    const client = new MongoClient(url);
    await client.connect();

    const results = await CirculationRepo.loadData(data);
    assert.equal(data.length, results.insertedCount)

    await client.db(dbName).dropDatabase();
    const admin = client.db(dbName).admin();

    console.log("List of Database:::", await admin.listDatabases());
}

main();