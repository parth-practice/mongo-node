const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const CirculationRepo = require('./repos/circulationRepo');
const data = require('./circulation.json');

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

async function main() {
    const client = new MongoClient(url);
    await client.connect();

    try {
        const results = await CirculationRepo.loadData(data);
        assert.equal(data.length, results.insertedCount)

        const getData = await CirculationRepo.get();
        assert.equal(data.length, getData.length);

        const filterData = await CirculationRepo.get({Newspaper: getData[4].Newspaper});
        assert.deepEqual(filterData[0], getData[4]);

        console.log("FilterData::", filterData);
    } catch (error) {
        console.log(error);
    } finally {
        // Droping database
        await client.db(dbName).dropDatabase();
        const admin = client.db(dbName).admin();

        console.log("List of Database:::", await admin.listDatabases());
    }
}

main();