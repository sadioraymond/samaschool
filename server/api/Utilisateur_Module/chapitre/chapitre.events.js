/**
 * Chapitre model events
 */

'use strict';

import {EventEmitter} from 'events';
var ChapitreEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ChapitreEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Chapitre) {
  for(var e in events) {
    let event = events[e];
    Chapitre.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ChapitreEvents.emit(event + ':' + doc._id, doc);
    ChapitreEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ChapitreEvents;
