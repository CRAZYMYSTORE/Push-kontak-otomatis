const fs = require("fs");
const chalk = require("chalk");
// EDIT DISINI
global.owner = ["6282127075205"]; // no own
global.packname = "© sticker by"; // nama pack sticker
global.author = "KurrXdStore"; // nama author
global.pic = "https://telegra.ph/file/4011c7d21ec2b27ef7e02.jpg"; // url foto

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
