/**
 * Cours model events
 */

'use strict';

import {EventEmitter} from 'events';
var CoursEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CoursEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Cours) {
  for(var e in events) {
    let event = events[e];
    Cours.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    CoursEvents.emit(event + ':' + doc._id, doc);
    CoursEvents.emit(event, doc);
  };
}

export {registerEvents};
export default CoursEvents;
