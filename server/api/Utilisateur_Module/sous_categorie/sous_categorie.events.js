/**
 * SousCategorie model events
 */

'use strict';

import {EventEmitter} from 'events';
var SousCategorieEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SousCategorieEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(SousCategorie) {
  for(var e in events) {
    let event = events[e];
    SousCategorie.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SousCategorieEvents.emit(event + ':' + doc._id, doc);
    SousCategorieEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SousCategorieEvents;
