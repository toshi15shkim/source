function uint16ToFloat32(high, low) {
	  var buffer = new ArrayBuffer(4);
	  var intView = new Uint16Array(buffer);
	  var floatView = new Float32Array(buffer);

	  intView[0] = low;
	  intView[1] = high;
	  return floatView[0];
}