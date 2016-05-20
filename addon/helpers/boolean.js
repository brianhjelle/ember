import { MicroState } from 'ember-microstates';

const True = Object.create([true], {
  value: {value: true},
  valueOf: {value: ()=> { return true; }}
});

const False = Object.create([], {
  value: {value: false},
  valueOf: {value: ()=> { return false; }}
});


export default MicroState.extend({
  default: false,

  wrap(value) {
    return !!value ? True : False;
  },

  actions: {
    toggle(current) {
      return !current;
    },
    set(current, value) {
      return !!value;
    }
  }
});