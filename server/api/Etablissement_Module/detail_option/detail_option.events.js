/**
 * DetailOption model events
 */

'use strict';

import {EventEmitter} from 'events';
var DetailOptionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DetailOptionEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(DetailOption) {
  for(var e in events) {
    let event = events[e];
    DetailOption.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DetailOptionEvents.emit(event + ':' + doc._id, doc);
    DetailOptionEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DetailOptionEvents;
