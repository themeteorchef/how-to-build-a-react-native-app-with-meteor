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
        'http://work.ninjapixel.io.s3.amazonaws.com/themeteorchef/reactnative/newYork1.jpg',
        'http://work.ninjapixel.io.s3.amazonaws.com/themeteorchef/reactnative/newYork2.jpg',
        'http://work.ninjapixel.io.s3.amazonaws.com/themeteorchef/reactnative/newYork3.jpg',
        'http://work.ninjapixel.io.s3.amazonaws.com/themeteorchef/reactnative/newYork4.jpg',
      ],
    },
  ];

  seed.forEach((city) => {
    Cities.insert(city);
  });
}
