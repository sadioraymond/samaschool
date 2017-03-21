/**
 * Exercice model events
 */

'use strict';

import {EventEmitter} from 'events';
var ExerciceEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ExerciceEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Exercice) {
  for(var e in events) {
    let event = events[e];
    Exercice.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ExerciceEvents.emit(event + ':' + doc._id, doc);
    ExerciceEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ExerciceEvents;
