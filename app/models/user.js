import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr('string'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  avatar: attr('string'),
  isAdmin: attr('boolean', {
    defaultValue: false
  }),
  created: attr('date', {
    defaultValue() {return new Date();}
  }),
  bookmarks: hasMany('bookmark')
});
