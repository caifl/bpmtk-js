import inherits from 'inherits';

// base modeler.
import Modeler from 'bpmn-js/lib/Modeler';

// additional features.
import MinimapModule from 'diagram-js-minimap';

// replaced features.
import ContextPadModule from './features/context-pad';
import PaletteProviderModule from './features/palette';
// import propertiesPanelModule from 'bpmn-js-properties-panel';
// import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
//import TranslateModule from './features/translate';



// import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll';
// import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';

// import CustomLoggingModule from './features/logging';


/**
 * A viewer that includes mouse navigation and other goodies.
 *
 * @param {Object} options
 */
export default function BpmtkModeler(options) {
  Modeler.call(this, options);
}

inherits(BpmtkModeler, Modeler);

BpmtkModeler.prototype._customModules = [
  ContextPadModule,
  PaletteProviderModule,
  //TranslateModule,
  MinimapModule,
  // propertiesPanelModule,
  // propertiesProviderModule
  // MinimapModule
  // ZoomScrollModule,
  // MoveCanvasModule,
  // CustomLoggingModule
];

BpmtkModeler.prototype._modules = [].concat(
  Modeler.prototype._modules,
  BpmtkModeler.prototype._customModules
);