const fs = require('fs');
const remark = require('remark');
const remarkHtml = require('remark-html')

const staffRaw = fs.readFileSync('_staff.json');
const staff = JSON.parse(staffRaw);

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

module.exports = staff;
