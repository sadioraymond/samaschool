/**
 * SuiviCoursClasse model events
 */

'use strict';

import {EventEmitter} from 'events';
var SuiviCoursClasseEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SuiviCoursClasseEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(SuiviCoursClasse) {
  for(var e in events) {
    let event = events[e];
    SuiviCoursClasse.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SuiviCoursClasseEvents.emit(event + ':' + doc._id, doc);
    SuiviCoursClasseEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SuiviCoursClasseEvents;
