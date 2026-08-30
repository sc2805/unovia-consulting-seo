const fs = require("fs");
const path = require("path");

function run() {
  const dbPath = path.join(__dirname, "../lib/blog-db.json");
  if (fs.existsSync(dbPath)) {
    const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    let updated = 0;
    data.articles = data.articles.map((art) => {
      if (!art.date) {
        art.date = art.publicationDate;
        updated++;
      }
      return art;
    });
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`Successfully patched ${updated} articles in database with missing 'date' key.`);
  } else {
    console.log("Database file not found at " + dbPath);
  }
}

run();
