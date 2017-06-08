/**
 * Preference model events
 */

'use strict';

import {EventEmitter} from 'events';
var PreferenceEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PreferenceEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Preference) {
  for(var e in events) {
    let event = events[e];
    Preference.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    PreferenceEvents.emit(event + ':' + doc._id, doc);
    PreferenceEvents.emit(event, doc);
  };
}

export {registerEvents};
export default PreferenceEvents;
