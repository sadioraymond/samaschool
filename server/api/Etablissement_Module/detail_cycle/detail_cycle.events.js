/**
 * DetailCycle model events
 */

'use strict';

import {EventEmitter} from 'events';
var DetailCycleEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DetailCycleEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(DetailCycle) {
  for(var e in events) {
    let event = events[e];
    DetailCycle.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DetailCycleEvents.emit(event + ':' + doc._id, doc);
    DetailCycleEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DetailCycleEvents;
