/**
 * DetailAnnonce model events
 */

'use strict';

import {EventEmitter} from 'events';
var DetailAnnonceEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DetailAnnonceEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(DetailAnnonce) {
  for(var e in events) {
    let event = events[e];
    DetailAnnonce.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DetailAnnonceEvents.emit(event + ':' + doc._id, doc);
    DetailAnnonceEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DetailAnnonceEvents;
