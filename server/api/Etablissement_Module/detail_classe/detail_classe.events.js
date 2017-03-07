/**
 * DetailClasse model events
 */

'use strict';

import {EventEmitter} from 'events';
var DetailClasseEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DetailClasseEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(DetailClasse) {
  for(var e in events) {
    let event = events[e];
    DetailClasse.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DetailClasseEvents.emit(event + ':' + doc._id, doc);
    DetailClasseEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DetailClasseEvents;
