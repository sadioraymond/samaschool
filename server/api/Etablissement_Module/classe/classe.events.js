/**
 * Classe model events
 */

'use strict';

import {EventEmitter} from 'events';
var ClasseEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClasseEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Classe) {
  for(var e in events) {
    let event = events[e];
    Classe.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ClasseEvents.emit(event + ':' + doc._id, doc);
    ClasseEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ClasseEvents;
