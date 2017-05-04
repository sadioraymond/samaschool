/**
 * Suivi model events
 */

'use strict';

import {EventEmitter} from 'events';
var SuiviEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SuiviEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Suivi) {
  for(var e in events) {
    let event = events[e];
    Suivi.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SuiviEvents.emit(event + ':' + doc._id, doc);
    SuiviEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SuiviEvents;
