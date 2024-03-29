const fs = require("fs");

function swapKeyAndValue(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value]?.push(key) || (acc[value] = [key]);
    return acc;
  }, {});
}

async function pack() {
  const res = fs.readFileSync("config.json");

  const colors = JSON.parse(res);
  const swipedColors = swapKeyAndValue(colors);

  fs.writeFileSync(
    "index.cjs.js",
    `
    const colors = ${JSON.stringify(colors)};
    const swipedColors = ${JSON.stringify(swipedColors)};
    function kanji2Color(key) {
        return colors[key];
    }
    function color2Kanji(value) {
        return swipedColors[value];
    }
    module.exports = { kanji2Color, color2Kanji,colors,swipedColors };
    `
  );
  fs.writeFileSync(
    "index.esm.js",
    `
    const colors = ${JSON.stringify(colors)};
    const swipedColors = ${JSON.stringify(swipedColors)};
    function kanji2Color(key) {
        return colors[key];
    }
    function color2Kanji(value) {
        return swipedColors[value];
    }
    export { kanji2Color, color2Kanji,colors,swipedColors };
    `
  );
}
pack();
