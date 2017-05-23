/**
 * Faculte model events
 */

'use strict';

import {EventEmitter} from 'events';
var FaculteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FaculteEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Faculte) {
  for(var e in events) {
    let event = events[e];
    Faculte.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    FaculteEvents.emit(event + ':' + doc._id, doc);
    FaculteEvents.emit(event, doc);
  };
}

export {registerEvents};
export default FaculteEvents;
