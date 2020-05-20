var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect('mongodb://photos_db/nordstrom', {useNewUrlParser: true, useUnifiedTopology: true});
//'mongodb://photos_db/nordstrom'  -  use for deployment
//'mongodb://localhost:27017/nordstrom'  -  use for local testing
// 127.0.0.1:27017

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
    color1:[String, String, String, String, String, String, String, String],
    color2:[String, String, String, String, String, String, String, String],
    color3:[String, String, String, String, String, String, String, String]
  },
  colorNames: [String, String, String]
});

let Carousel = mongoose.model('Carousel', carouselSchema)

module.exports = {
  save: function() {
    let arrOfAllItems = [];
    // let shoesTotal = 100;
    // let pantsTotal = 500;
    // let shirtsTotal = 900;

    let shoesItem = {
      id: 100,
      itemName: faker.commerce.productName(),
      type: 'shoes',
      colors: {
        //color: black
        color1: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black/2e77313b-bd04-418c-b6db-eb9c13e190c5.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black/50cd45f3-820c-4b69-932d-6636fd8b5aae.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black/5d0115bd-6a7e-4af0-8045-11f404d4a470.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black/857c4488-085c-4ffb-aa28-72b986d652da.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black/a3e21723-d5a3-436e-ad24-d368a9d63d04.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black/b9d0b091-c160-410a-ae54-da0d00aa01c8.jpg'
        ],
        //color: Black White Checker White
        color2: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black_White_Checker_White/312084d4-67ec-4b62-bb53-f45dcfccb125.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black_White_Checker_White/5c36a82b-ba07-4078-a414-0adce83caa1e.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black_White_Checker_White/5e1037f6-63a1-4624-a444-8ea061263f9f.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black_White_Checker_White/8105baf2-7bb1-4147-a59e-1ea7b01d6fb5.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black_White_Checker_White/857c4488-085c-4ffb-aa28-72b986d652da.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_Black_White_Checker_White/d7e4c97a-c6ef-4dd8-b76e-08f7be6e8842.jpg'
        ],
        //color: true white
        color3: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/0fd7792e-1444-4b18-8b71-cf51664795e2.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/301a5ddf-feeb-4f74-8c43-7c17c7d294fc.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/3e440b16-dc49-4b87-8fcd-8000e2bdf499.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/4539294d-3bd3-48e3-9f69-3477a59abfb0.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/68cfd514-cf29-4e1b-9dc1-bfc4e05e434c.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/6a8de12d-d0c9-4053-85b2-18552f93b8b5.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/889b0413-5b72-47f5-8ed5-4b273113aefa.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/9b05889d-a523-4d53-882d-74c243b59758.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shoes/Color_True_White/c25ecb7b-af2b-4224-903d-5e2d96fb626a.jpg'
        ]
      },
      colorNames: ['Black', 'Black White Checker White', 'True White']

    }

    let pantsItem = {
      id: 500,
      itemName: faker.commerce.productName(),
      type: 'pants',
      colors: {
        //jet black
        color1: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/2742dd0a-a638-4028-9123-628deaf38292.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/88c726b5-86cf-42a7-a27f-e49cfe9228c3.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/aaa7ec08-da93-47cc-a802-286b8c36ec4f.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/b286f47c-46b9-47ee-a0c3-80096978f6e2.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/be221d7b-7790-42e0-8254-6a72426bac05.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Jet_Black/ff607f73-f623-4386-a148-8b709bf75867.jpg'
        ],
        //steely
        color2: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Steely/367665f0-4569-45b7-b795-b6324156d1de.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Steely/5e7a9c51-a1a7-43a1-827e-2688b863970b.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Steely/61e3fa8c-e05a-410c-9926-036e402ea4c5.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Steely/7b6d2389-e7af-435f-a027-6f04e8f1bb77.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Steely/a856e2b2-a22d-434b-8e0d-4dce6b83e0af.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Steely/f2fecaad-2860-4220-ab9e-8556b13702be.jpg'
        ],
        //wheat
        color3: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/05cae3f9-4440-4e4f-b17b-d55132be610f.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/441becaf-554b-4c1b-9ea4-d850a65f14bf.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/45401d74-b40f-43cb-aec0-4b00375d1b0c.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/46dc8a48-c4f7-42f9-9387-b035b20ec0db.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/543f0f00-1cf8-47da-b2b7-b7967c1c215e.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/pants/Color_Wheat/c0440a9d-f513-4bae-9cf8-7a46fd70a9e9.jpg'
        ]
      },
      colorNames: ['Jet Black', 'Steely', 'Wheat']

    }

    let shirtItem = {
      id: 900,
      itemName: faker.commerce.productName(),
      type: 'shirt',
      colors: {
        //color: Blackberry White
        color1: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/1f6ef202-58c9-4645-9730-1a60fbf11610.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/226b02a3-6caa-442c-b132-7be6b6723517.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/2411e43a-48c5-49e6-aaab-77c4016f7f3d.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/49e60637-1a35-469f-b959-f7ddc9b9156c.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/5b39c29c-fa76-4dea-adda-c7e1aca52723.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/6b927f32-74f4-42f3-b7ab-24c8dac0946c.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/a7db420a-40e1-4f8e-9a0d-5cf3c165b859.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Blackberry_White/cd69d398-ad36-4088-896c-c8f29183e4de.jpg'
        ],
        //color: heather black
        color2: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/1070f576-0e45-4cb0-9c02-2020d0882097.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/22bf282c-eac3-4587-bdcc-a704ddadff37.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/49e60637-1a35-469f-b959-f7ddc9b9156c.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/5b39c29c-fa76-4dea-adda-c7e1aca52723.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/5b504c2d-990f-404c-a913-afe9dcd7efd2.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/7de58a2c-7128-4c25-af1a-3424b43e8a77.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/c2d6ea88-e649-4353-b75c-e667e808195d.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/dee6d5c3-c67e-41e9-9ae1-d447f5d6a129.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Heather_Black/f70dd6a2-4309-4e07-8ee2-aa250b8c764d.jpg'
        ],
        //color: strong blue
        color3: [
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Strong_Blue/54515bad-1279-4fca-8569-b4a4d7c1b373.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Strong_Blue/54f01441-7d11-41c7-921c-51faf409cb69.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Strong_Blue/5b4c3db0-9ca1-4b87-882e-4df3d655fd37.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Strong_Blue/6bb26a01-08b4-41fc-b9e7-c6ae8f1e1e9e.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Strong_Blue/b04e6544-11bc-4deb-a244-2879ac01b421.jpg',
          'https://nordstromcarouselpublic.s3-us-west-1.amazonaws.com/shirt/Color_Strong_Blue/dad6c6fe-e86e-42b7-a36b-51781b48502a.jpg'
        ]
      },
      colorNames: ['Blackberry White', 'Heather Black', 'Strong Blue']

    }

    let seedShoes = function(){
      for (var i = 0; i < 33; i++) {
        let item = new Carousel(shoesItem);
        arrOfAllItems.push(item);
        shoesItem.id++;

      }
    }

    let seedPants = function(){
      for (var i = 0; i < 33; i++) {
        let item = new Carousel(pantsItem);
        arrOfAllItems.push(item);
        pantsItem.id++;
      }
    }

    let seedShirts = function(){
      for (var i = 0; i < 33; i++) {
        let item = new Carousel(shirtItem);
        arrOfAllItems.push(item);
        shirtItem.id++;
      }
    }

    //run the above functions to add data to array.
    seedShoes();
    seedPants();
    seedShirts();

    // let integerBetweenOneAndThree = function() {
    //   return Math.floor(Math.random() * (3) + 1);
    // }

    // let item;
    // var selectItem = integerBetweenOneAndThree()

    // if (selectItem === 1) {
    //   item = new Carousel(pantsItem)
    // } else if (selectItem === 2) {
    //   item = new Carousel(shirtItem)
    // } else if (selectItem === 3) {
    //   item = new Carousel(shoesItem)
    // } else {
    //   console.log('uh oh, cannot find a piece of clothing to display, see database/index.js')
    // }


    // item.save(function (err, item) {
    //   if (err){
    //     console.error(err);
    //   } else {
    //     console.log('SUCCESS: ', item)
    //   }
    // });

    Carousel.collection.insertMany(arrOfAllItems)
    .then(() => {
      console.log('we are seeded!')
    })
    .catch(err => {
      console.log('not reseeded!')
    });

    //COME BACK TO THIS TO FINISH INSERT MANY!!!
    // db.carousels.insertMany(arrOfAllItems, function(error, docs) {
    //   if (error) {
    //     console.log(error)
    //   } else {
    //     console.log(null, docs)
    //   }
    // });


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


