import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Cities from './cities';
import rateLimit from '../../modules/rate-limit.js';

export const findOneCity = new ValidatedMethod({
  name: 'cities.findOne',
  validate: new SimpleSchema({
    name: { type: String, optional: false },
  }).validator(),
  run({name}) {
    return Cities.findOne({ name });
  },
});

rateLimit({
  methods: [
    findOneCity,
  ],
  limit: 5,
  timeRange: 1000,
});
