function drawFlag() {
  //RED PART
  t1 = [...[0, 0, 0], ...[0, 3.75, 0], ...[5, 0, 0]];
  t2 = [...[0, 3, 0], ...[0, 6, 0], ...[5, 3, 0]];
  //Blue PART
  t3 = [...[5.75, 2.75, 0], ...[-0.25, 6.5, 0], ...[-0.25, 2.75, 0]];
  t4 = [...[-0.25, -0.25, 0], ...[5.75, -0.25, 0], ...[-0.25, 4.25, 0]];

  //moon
  var moonVertexData = [];
  function createMoonVertexList(radius, xo, yo) {
    for (i = 0; i > -180; i -= 15) {
      moonVertexData.push(...[xo, yo, 0]);
      x = radius * Math.cos((Math.PI / 180) * i) + xo;
      y = radius * Math.sin((Math.PI / 180) * i) + yo;
      moonVertexData.push(...[x, y, 0]);
      x = radius * Math.cos((Math.PI / 180) * (i - 15)) + xo;
      y = radius * Math.sin((Math.PI / 180) * (i - 15)) + yo;
      moonVertexData.push(...[x, y, 0]);
    }
  }
  createMoonVertexList(0.75, 1.25, 4.25);
  var moonSpikeData = [];
  function createMoonSpikeList(radius, xo, yo) {
    gap = radius / 4;
    midWidth = gap / 2;
    leftX = xo - radius;
    leftY = yo;
    rightX = xo + gap - radius;
    rightY = yo;
    topX = leftX + midWidth;
    topY = yo + gap;
    for (i = 0; i < 8; i++) {
      moonSpikeData.push(
        ...[leftX, leftY, 0],
        ...[rightX, rightY, 0],
        ...[topX, topY, 0]
      );
      leftX = rightX;
      rightX = rightX + gap;
      topX = topX + gap;
    }
  }
  createMoonSpikeList(0.75, 1.25, 4.25);

  //sun
  var sunVertexData = [];
  function createSunVertexList(radius, xo, yo) {
    for (i = 0; i < 360; i += 15) {
      sunVertexData.push(...[xo, yo, 0]);
      x = radius * Math.cos((Math.PI / 180) * i) + xo;
      y = radius * Math.sin((Math.PI / 180) * i) + yo;
      sunVertexData.push(...[x, y, 0]);
      x = radius * Math.cos((Math.PI / 180) * (i + 15)) + xo;
      y = radius * Math.sin((Math.PI / 180) * (i + 15)) + yo;
      sunVertexData.push(...[x, y, 0]);
    }
  }
  createSunVertexList(0.75, 1.25, 1.25);

  //sun spikes
  var sunSpikeData = [];
  function createSunSpikeList(radius, xo, yo) {
    midWidth = radius / 8;
    for (i = -15; i < 345; i += 30) {
      x = radius * Math.cos((Math.PI / 180) * i) + xo;
      y = radius * Math.sin((Math.PI / 180) * i) + yo;
      sunSpikeData.push(...[x, y, 0]);
      x = radius * Math.cos((Math.PI / 180) * (i + 30)) + xo;
      y = radius * Math.sin((Math.PI / 180) * (i + 30)) + yo;
      sunSpikeData.push(...[x, y, 0]);
      if (i <= 90) {
        x = radius * Math.cos((Math.PI / 180) * (i + 15)) + xo + midWidth;
        y = radius * Math.sin((Math.PI / 180) * (i + 15)) + yo + midWidth;
        sunSpikeData.push(...[x, y, 0]);
      } else if (i <= 180) {
        x = radius * Math.cos((Math.PI / 180) * (i + 15)) + xo - midWidth;
        y = radius * Math.sin((Math.PI / 180) * (i + 15)) + yo + midWidth;
        sunSpikeData.push(...[x, y, 0]);
      } else if (i <= 270) {
        x = radius * Math.cos((Math.PI / 180) * (i + 15)) + xo - midWidth;
        y = radius * Math.sin((Math.PI / 180) * (i + 15)) + yo - midWidth;
        sunSpikeData.push(...[x, y, 0]);
      } else if (i <= 360) {
        x = radius * Math.cos((Math.PI / 180) * (i + 15)) + xo + midWidth;
        y = radius * Math.sin((Math.PI / 180) * (i + 15)) + yo - midWidth;
        sunSpikeData.push(...[x, y, 0]);
      }
    }
  }
  createSunSpikeList(0.75, 1.25, 1.25);

  //processing data
  const vertexData = [];
  const dataArray = [
    ...t1,
    ...t2,
    ...t3,
    ...t4,
    ...sunVertexData,
    ...moonVertexData,
    ...moonSpikeData,
    ...sunSpikeData,
  ];
  for (i = 0; i < dataArray.length; i++) {
    y = dataArray[i] / 6.5;
    vertexData.push(y);
  }

  DrawObject(
    gl.TRIANGLES,
    3,
    `void main() {gl_FragColor = vec4(0, 0, 1, 1);}`,
    vertexData,
    6,
    9
  );
  DrawObject(
    gl.TRIANGLES,
    3,
    `void main() {gl_FragColor = vec4(1, 0, 0, 1);}`,
    vertexData,
    0,
    3
  );
  DrawObject(
    gl.TRIANGLES,
    3,
    `void main() {gl_FragColor = vec4(1, 1, 1, 1);}`,
    vertexData,
    12,
    230
  );
}
