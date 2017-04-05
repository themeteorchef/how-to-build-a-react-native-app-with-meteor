import { Mongo } from 'meteor/mongo';

const Cities = new Mongo.Collection('Cities');

Cities.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Cities.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default Cities;
