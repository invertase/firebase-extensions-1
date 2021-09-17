// integration-test/test/test.js
import { assert, expect } from "chai";
import * as admin from "firebase-admin";
import * as inputPayload from './input-payload.json';

const DB_COLLECTION = "shipments";
/*
  * ============
  *    Setup
  * ============
*/
admin.initializeApp();
const db = admin.firestore();
db.settings({
  host: "localhost:3000",
  ssl: false
});

/*
 * ============
 *  Test Cases
 * ============
 */
beforeEach(async () => {
  // Clear the database between tests
  void deleteCollection(DB_COLLECTION);
});

async function deleteCollection(path: string) {
  const batch = db.batch();
  const documents = await db.collection(path).listDocuments();
  for (const doc of documents) {
    batch.delete(doc);
  }
  batch.commit();
}

describe("getRates", async () => {
  it("returns the get rates result", async () => {

    // Add new shipment to db
    const newShipment = await db.collection('shipments').add(inputPayload);

    // Wait for result
    const update = await new Promise((resolve, reject) => {
      void newShipment.onSnapshot(
        (snapshot) => {
          const data = snapshot.data();
          resolve(data);
        }, 
        reject
      )
    })
    assert(expect(update).is.not.empty);
  });
});