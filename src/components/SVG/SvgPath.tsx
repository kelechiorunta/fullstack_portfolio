import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import opentype from 'opentype.js';

export default function SvgPath({ text }) {
  const [pathData, setPathData] = useState('');

  useEffect(() => {
    async function loadFont() {
      try {
        const response = await fetch('/fonts/Poppins/Poppins-Bold.ttf');

        const buffer = await response.arrayBuffer();

        const font = opentype.parse(buffer);
        // const text = 'KELECHI'.split('');

        // 'KELECHI'.split('').map((text) => {
        const path = font.getPath(text, 0, 50, 60);

        const svgPath = path.toPathData(2);

        setPathData(svgPath);
        // });

        console.log('SVG Path Loaded');
      } catch (err) {
        console.error(err);
      }
    }

    loadFont();
  }, [text]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '50%',
        maxHeight: '60px',
        // height: '100vh',
        // background: '#c7b59b', //'white',
        display: 'block',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexWrap: 'wrap',
        flexBasis: '50%',
        flexGrow: 1,
        flexShrink: 0,
        margin: 'auto'
      }}
    >
      <svg width="100%">
        {pathData && (
          <motion.path
            d={pathData}
            stroke="#978365" //"red" //"#213e59" //"#00d4ff"
            strokeWidth={3}
            fill="transparent" //{'#c7b59b'} //"transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
              opacity: 1
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut'
            }}
          />
        )}
      </svg>
    </div>
  );
}
