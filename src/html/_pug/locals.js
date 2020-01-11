/**
 * Local Pug Data
 */

'use strict'

var locals = {}

locals.currentYear = (new Date()).getYear() + 1900

locals.baseTitle = 'Sarah Meftah'
locals.getTitle = function (subtitle) {
  if (subtitle) {
    return locals.baseTitle + ' - ' + subtitle
  }
  return locals.baseTitle
}

// Order defined is the same as nav order
locals.projects = {
  'grim': {
    title: 'Grim',
    imageRootSrc: 'grim',
    href: '/projects/grim.html',
    images: [
      { src: 'image1.jpg' },
      { src: 'image2.jpg' },
      { src: 'image3.jpg' },
      { src: 'image4.jpg' },
      { src: 'image5.jpg' },
      { src: 'image6.jpg' },
      { src: 'image7.jpg' },
      { src: 'image8.jpg' },
      { src: 'image9.jpg' }
    ]
  },

  'the_sunset': {
    title: 'The Sunset',
    imageRootSrc: 'the_sunset',
    href: '/projects/the_sunset.html',
    images: [
      { src: 'image1.jpg' },
      { src: 'image2.jpg' },
      { src: 'image3.jpg' },
      { src: 'image4.jpg' },
      { src: 'image5.jpg' },
      { src: 'image6.jpg' },
      { src: 'image7.jpg' },
      { src: 'image8.jpg' },
      { src: 'image9.jpg' },
      { src: 'image10.jpg' },
      { src: 'image11.jpg' },
      { src: 'image12.jpg' },
      { src: 'image13.jpg' },
      { src: 'image14.jpg' },
      { src: 'image15.jpg' },
      { src: 'image16.jpg' },
      { src: 'image17.jpg' },
      { src: 'image18.jpg' },
      { src: 'image19.jpg' },
      { src: 'image20.jpg' },
      { src: 'image21.jpg' },
      { src: 'image22.jpg' },
      { src: 'image23.jpg' },
      { src: 'image24.jpg' },
      { src: 'image25.jpg' }
    ]
  },

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
      { src: 'image8.jpg' },
      { src: 'image9.jpg' },
      { src: 'image10.jpg' },
      { src: 'image11.jpg' }
    ]
  },

  'nightwatch': {
    title: 'Nightwatch',
    imageRootSrc: 'nightwatch',
    href: '/projects/nightwatch.html',
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

  'new_landscapes': {
    title: 'New Landscapes',
    imageRootSrc: 'new_landscapes',
    href: '/projects/new_landscapes.html',
    images: [
      { src: 'new_landscapes_9.jpg' },
      { src: 'new_landscapes_8.jpg' },
      { src: 'new_landscapes_7.jpg' },
      { src: 'new_landscapes_6.jpg' },
      { src: 'new_landscapes_5.jpg' },
      { src: 'new_landscapes_4.jpg' },
      // { src: 'new_landscapes_1.jpg' },
      { src: 'new_landscapes_2.jpg' },
      { src: 'new_landscapes_3.jpg' }
    ]
  }
}

locals.infos = [
  { title: 'Bio', href: '/info/bio.html' },
  { title: 'CV', href: '/info/cv.html' },
  { title: 'Contact', href: '/info/contact.html' }
]

locals.og = {
  image: 'http://sarahmeftah.com/img/link_preview.jpg',
  url: 'http://sarahmeftah.com'
}

locals.links = {
  homepage: {
    coverImage: '/projects/grim.html'
  }
}

module.exports = locals
