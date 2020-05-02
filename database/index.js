var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nordstrom', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected to the database')
});


let carouselSchema = new mongoose.Schema({
  id: Number,
  itemName: String,
  type: String,
  colors: {
    //note: the first item of each array will be the round color swatch.
    //need to change color1, etc. to reflect the name of each color/material.
    color1:[String, String, String, String, String, String, String, String],
    color2:[String, String, String, String, String, String, String, String],
    color3:[String, String, String, String, String, String, String, String]
  }
  // anothertype: String
});

let Carousel = mongoose.model('Carousel', carouselSchema)

module.exports = {
  save: function() {

    let newItem = {
      id: 0,
      itemName: 'Bonobos Athletic Stretch Washed Chinos',
      type: 'shoes',
      colors: {
        color1:['https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg'],
        color2:['https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg'],
        color3:['https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg', 'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg']
      }
    }

    let item = new Carousel(newItem)

    item.save(function (err, item) {
      if (err){
        console.error(err);
      } else {
        console.log('SUCCESS: ', item)
      }
      // fluffy.speak();
    });


//asdf
  },

  getAll: function(callback){
    Carousel.find({}, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        callback(docs)
      }
    })

  }
}


// save()



