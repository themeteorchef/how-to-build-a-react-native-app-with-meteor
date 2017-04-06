import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Cities from '../../api/cities/cities';

if (!Meteor.isProduction) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Carl', last: 'Winslow' },
    },
    roles: ['admin'],
  }];

  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}

if (Cities.find().count() === 0) {
  const seed = [
    {
      name: 'New York',
      lat: 40.758896,
      lng: -73.985130,
      text: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
      photos: [
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/newYork1.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/newYork2.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/newYork3.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/newYork4.jpg',
      ],
    },
    {
      name: 'London',
      lat: 51.476852,
      lng: -0.000500,
      text: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',

      photos: [
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/london1.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/london2.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/london3.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/london4.jpg',
      ],
    },
    {
      name: 'Melbourne',
      lat: -37.815018,
      lng: 144.946014,
      text: 'Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city\'s centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. In the Southbank area, the Melbourne Arts Precinct is the site of Arts Centre Melbourne – a performing arts complex – and the National Gallery of Victoria, with Australian and indigenous art.',
      photos: [
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/melbourne1.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/melbourne2.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/melbourne3.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/melbourne4.jpg',
      ],
    },
    {
      name: 'San Francisco',
      lat: 37.733795,
      lng: -122.446747,
      text: 'San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It\'s known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District\'s Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.',
      photos: [
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/sanFran1.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/sanFran2.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/sanFran3.jpg',
        'https://s3-eu-west-1.amazonaws.com/work.ninjapixel.io/themeteorchef/reactnative/sanFran4.jpg',
      ],
    },
  ];

  seed.forEach((city) => {
    Cities.insert(city);
  });
}
