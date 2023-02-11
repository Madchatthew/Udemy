var mongoose        = require('mongoose'),
    Campground      = require('./models/campground'),
    Comment         = require('./models/comment')

var seeds = [
    {
        name:           'Mountain Top',
        image:          'https://pixabay.com/get/55e8dc404f5aab14f1dc84609620367d1c3ed9e04e507440752d7add9049cd_340.jpg',
        description:    'blah blah blah blah blah blah'
    },
    {
        name:           'Desert Mesa',
        image:          'https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e507440752d7add9049cd_340.jpg',
        description:    'blah blah blah blah blah blah'
    },
    {
        name:           'Valley Below',
        image:          'https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e507440752d7add9049cd_340.jpg',
        description:    'blah blah blah blah blah blah'
    }
]

async function seedDB() {
    // Remove all campgrounds
    try {
        await Campground.remove({})
        console.log('Campgrounds Removed!')
        await Comment.remove({})
        console.log('Comments Removed!')
        for(const seed of seeds) {
            let campground = await Campground.create(seed)
            console.log('Campground Created!')
            let comment = await Comment.create(
                {
                    text:   'This place is great, but I wish there was internet',
                    author: 'Homer'
                }
            )
            console.log('Comment Created!')
            campground.comments.push(comment)
            campground.save()
            console.log('Comment Added To Campgrounds!')
        }
    } catch(err){
        console.log(err)
    }
}

module.exports = seedDB