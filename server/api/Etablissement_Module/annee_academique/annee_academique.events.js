/**
 * AnneeAcademique model events
 */

'use strict';

import {EventEmitter} from 'events';
var AnneeAcademiqueEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AnneeAcademiqueEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(AnneeAcademique) {
  for(var e in events) {
    let event = events[e];
    AnneeAcademique.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    AnneeAcademiqueEvents.emit(event + ':' + doc._id, doc);
    AnneeAcademiqueEvents.emit(event, doc);
  };
}

export {registerEvents};
export default AnneeAcademiqueEvents;
