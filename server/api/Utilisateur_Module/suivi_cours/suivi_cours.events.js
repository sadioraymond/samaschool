/**
 * SuiviCours model events
 */

'use strict';

import {EventEmitter} from 'events';
var SuiviCoursEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SuiviCoursEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(SuiviCours) {
  for(var e in events) {
    let event = events[e];
    SuiviCours.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SuiviCoursEvents.emit(event + ':' + doc._id, doc);
    SuiviCoursEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SuiviCoursEvents;
