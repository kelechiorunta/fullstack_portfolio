import opentype from 'opentype.js';

opentype.load('/fonts/Montserrat-Bold.ttf', (err, font) => {
  if (err) {
    console.error(err);
    return;
  }

  const path = font.getPath('WELCOME', 0, 100, 72);

  const svgPathData = path.toPathData(1);

  console.log(svgPathData);
});
