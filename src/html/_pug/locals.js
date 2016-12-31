/**
 * Local Pug Data
 */

'use strict';

var locals = {};

locals.baseTitle = 'Sarah Meftah';
locals.getTitle = function(subtitle) {
    if (subtitle) {
        return locals.baseTitle + ' - ' + subtitle;
    }
    return locals.baseTitle;
};


// Order defined is the same as nav order
locals.projects = {
    'basketball_courts': {
        title: 'Basketball Courts',
        imageRootSrc: 'basketball_courts',
        href: '/projects/basketball_courts.html',
        images: [
            { src: 'image1.jpg' },
            { src: 'image2.jpg' },
            { src: 'image3.jpg' },
            { src: 'image4.jpg' },
            { src: 'image5.jpg' },
            { src: 'image6.jpg' },
            { src: 'image7.jpg' },
            { src: 'image8.jpg' }
        ]
    },

    'for_a_very_brief_moment': {
        title: 'For a Very Brief Moment',
        imageRootSrc: 'for_a_very_brief_moment',
        href: '/projects/for_a_very_brief_moment.html',
        images: [
            { src: 'bamboo-house.jpg' },
            { src: 'red-lot.jpg' },
            { src: 'hotel-room-with-a-view.jpg' },
            // { src: 'woman-with-bag.jpg' },
            { src: 'house-on-beard-street.jpg' },
            // { src: 'leon-high-school.jpg' },
            // { src: 'man-with-bag.jpg' },
            { src: 'prince-murat-motel.jpg' },
            { src: 'stars-meat-market-no-1.jpg' },
            // { src: 'stars-meat-market-no-2.jpg' },
            // { src: 'parking-garage.jpg' },
            { src: 'post-office.jpg' },
            { src: 'lamp-and-shade.jpg' },
            { src: 'house-on-the-corner.jpg' }
        ]
    },

    'new_american_landscape': {
        title: 'New American Landscape',
        imageRootSrc: 'new_american_landscape',
        href: '/projects/new_american_landscape.html',
        images: [
            { src: 'new_american_landscape_9.jpg' },
            { src: 'new_american_landscape_8.jpg' },
            { src: 'new_american_landscape_7.jpg' },
            { src: 'new_american_landscape_6.jpg' },
            { src: 'new_american_landscape_5.jpg' },
            { src: 'new_american_landscape_4.jpg' },
            { src: 'new_american_landscape_1.jpg' },
            { src: 'new_american_landscape_2.jpg' },
            { src: 'new_american_landscape_3.jpg' }
        ]
    },

    'year_2000': {
        title: 'Year 2000',
        imageRootSrc: 'year_2000',
        href: '/projects/year_2000.html',
        images: [
            { src: 'year_2000_1.jpg' },
            { src: 'year_2000_2.jpg' },
            { src: 'year_2000_3.jpg' },
            { src: 'year_2000_4.jpg' },
            { src: 'year_2000_5.jpg' },
            // { src: 'year_2000_6.jpg' },
            { src: 'year_2000_7.jpg' },
            // { src: 'year_2000_8.jpg' }
        ]
    }
};


locals.infos = [
    { title: 'Bio', href: '/info/bio.html' },
    { title: 'CV', href: '/info/cv.html' },
    { title: 'Contact', href: '/info/contact.html' }
];


module.exports = locals;
