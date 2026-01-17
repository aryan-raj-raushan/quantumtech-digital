const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "../constants/json/city.json");

const outputPath = path.join(__dirname, "../constants/json/india-cities.json");

const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const normalized = raw
  .map(({ city, state }) => {
    const slug = city
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z\s]/g, "")
      .replace(/\s+/g, "-");

    return {
      slug,
      name: city.trim(),
      state: state.trim(),
    };
  })
  .filter(
    (item, index, self) =>
      index === self.findIndex((c) => c.slug === item.slug),
  );

fs.writeFileSync(outputPath, JSON.stringify(normalized, null, 2));

console.log(`✅ Normalized ${normalized.length} cities`);
