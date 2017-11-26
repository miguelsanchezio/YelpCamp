var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});

var data = [
    {
        name: "Camp NY",
        image: "https://www.campnocounselors.com/wp-content/uploads/2016/01/Camp.No_.Counselors-NY-May-28-2015-10-c16-9-800x450.jpg",
        description: "Nullam laoreet in felis id aliquet. Ut diam tellus, feugiat ut mauris sit amet, tempor blandit augue. Vivamus nec laoreet ex. Sed ut eros tincidunt, iaculis tellus a, dapibus mauris. Nulla dictum libero at commodo lacinia. Aenean laoreet sollicitudin ipsum, a pharetra velit efficitur eget. Duis quis lacus tellus. Mauris est lectus, consequat in ipsum in, tempor vulputate arcu. Pellentesque commodo vel nisi sit amet bibendum. Nam pretium feugiat leo, vitae sollicitudin dolor viverra quis. Nullam egestas sem metus, at luctus purus ullamcorper id."
    },
    {
        name: "Camp Litty",
        image: "http://www.lutherhaven.com/wp-content/uploads/2016/05/campfire01.jpg",
        description: "Nullam laoreet in felis id aliquet. Ut diam tellus, feugiat ut mauris sit amet, tempor blandit augue. Vivamus nec laoreet ex. Sed ut eros tincidunt, iaculis tellus a, dapibus mauris. Nulla dictum libero at commodo lacinia. Aenean laoreet sollicitudin ipsum, a pharetra velit efficitur eget. Duis quis lacus tellus. Mauris est lectus, consequat in ipsum in, tempor vulputate arcu. Pellentesque commodo vel nisi sit amet bibendum. Nam pretium feugiat leo, vitae sollicitudin dolor viverra quis. Nullam egestas sem metus, at luctus purus ullamcorper id."
    },
    {
        name: "Jack Jack D",
        image: "http://www.creativelanguageclass.com/wp-content/uploads/2015/05/camp.jpg",
        description: "Nullam laoreet in felis id aliquet. Ut diam tellus, feugiat ut mauris sit amet, tempor blandit augue. Vivamus nec laoreet ex. Sed ut eros tincidunt, iaculis tellus a, dapibus mauris. Nulla dictum libero at commodo lacinia. Aenean laoreet sollicitudin ipsum, a pharetra velit efficitur eget. Duis quis lacus tellus. Mauris est lectus, consequat in ipsum in, tempor vulputate arcu. Pellentesque commodo vel nisi sit amet bibendum. Nam pretium feugiat leo, vitae sollicitudin dolor viverra quis. Nullam egestas sem metus, at luctus purus ullamcorper id."
    }
];

function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err)
        // }
        // console.log("Removed campgrounds!");
        // // add a few campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log("Added a campground!");
        //             //create comment
        //             Comment.create(
        //                 {
        //                     text: "Ayy lmao, this place lit AF fam.",
        //                     author: "lil mayo"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment!");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
};

module.exports = seedDB;
