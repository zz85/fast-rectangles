## Fastest Rectangles

Some thoughts:
- How many ways can you draw rectangles in a browser (eg. dom, css, 2d canvas, svg, webgl)
- How is the fastest (most number of) rectangles can you draw with each approach?

Task:
- Paint random rectangles for 5 seconds, find out how fast each approach takes.

Rational:
- For various reasons, you may want to find the most convinent approach to draw rectangles. In [Space Radar](github.com/zz85/space-radar), I find myself having > 100K rectanges to paint at times, which is why I'm exploring and testing which ways rectangles can be painted.

Rules:
- DOM, CSS, Canvas, or WebGL (three.js, stackgl or other libraries) may be used
- Stroke them
- Fill them
- Rectangle should be updatable by JS
- Rectangles are defined by (x, y, w, h)
- They are in units as fraction of the screen size (0..1)
- Each draw frame should be within 16.67s (60fps)
- Goal is to see compare the different approaches

## Current Results
0. Headless - overheads of Math.random 300K
1. Canvas - ~6.7K rectangles per 60fps frame
2. PixiJS - 11K Canvas Renderer, 9K WebGL Renderer
3. PixiJS - Single graphics. 6.5K WebGL, 8K Canvas
4. Three.js (Rect as mesh)
(fill only, no lines)
WebGl Renderer
   - each mesh as individual geometry  - 3K
   - shared geometry - 7.6K
   - shared material - 9K (3K for canvas renderer)
   - Add rect strokes - 5.6K

## To come

- Rects using a shared Three.js geometry
- Buffered Geometry
- Instanced Geometry
- Using point sprites
