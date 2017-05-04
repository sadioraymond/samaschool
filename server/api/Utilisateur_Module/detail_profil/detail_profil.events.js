/**
 * DetailProfil model events
 */

'use strict';

import {EventEmitter} from 'events';
var DetailProfilEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DetailProfilEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(DetailProfil) {
  for(var e in events) {
    let event = events[e];
    DetailProfil.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DetailProfilEvents.emit(event + ':' + doc._id, doc);
    DetailProfilEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DetailProfilEvents;
