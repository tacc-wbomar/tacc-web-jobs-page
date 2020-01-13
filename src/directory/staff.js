// Include dependencies
const fs = require('fs');
const remark = require('remark');
const remarkHtml = require('remark-html')

// Get and parse staff data
const staffRaw = fs.readFileSync('_staff.json');
const staff = JSON.parse(staffRaw);

/** Convert biography from Markdown to HTML */
function parseBiography() {
  let data = {};
  for (var member in staff) {
    data = staff[member];

    if (! data.biography) {
      return;
    }

    data.biography = remark()
      .use(remarkHtml)
      .processSync(data.biography).toString();
  }
}

// Manipulate data
parseBiography();

module.exports = staff;
