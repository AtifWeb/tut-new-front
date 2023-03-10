/*eslint no-unused-vars: 0*/

import FabricCanvasTool from "./fabrictool";

class DefaultTool extends FabricCanvasTool {
  configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = true;
    canvas.forEachObject((o) => (o.selectable = o.evented = false));
    canvas.discardActiveObject();
    canvas.defaultCursor = "pointer";
    canvas.renderAll();
  }
}

export default DefaultTool;
