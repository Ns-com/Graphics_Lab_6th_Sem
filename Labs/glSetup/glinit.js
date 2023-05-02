var gl;
var vertexBuffer;
var vertCode;
var vertShader;
var Red = `void main() {gl_FragColor = vec4(1, 0, 0, 1);}`;
var Green = `void main() {gl_FragColor = vec4(0, 1, 0, 1);}`;
var Blue = `void main() {gl_FragColor = vec4(0, 0, 1, 1);}`;
var White = `void main() {gl_FragColor = vec4(1, 1, 1, 1);}`;
function GLINIT() {
  gl = canvas.getContext("webgl");
  if (!gl) {
    throw new Error(
      "Unable to load WebGL. Your computer or browser maynot support it"
    );
  }
  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  vertCode =
    "attribute vec3 coordinates;" +
    "void main(void)" +
    "{" +
    "gl_Position = vec4(coordinates, 1.0);" +
    "gl_PointSize = 4.0;" +
    "}";
  vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, vertCode);
  gl.compileShader(vertShader);
}
