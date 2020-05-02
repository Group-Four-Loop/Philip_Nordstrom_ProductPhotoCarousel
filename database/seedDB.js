// var save = { save };
const { save } = require('./index.js');

//seeds database with 100 identical records.
for (var i = 0; i < 100; i++) {
  save();
}
//now do this 100x, and add data from S3 bucket.


//minor change.