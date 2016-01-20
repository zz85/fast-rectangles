## Fastest Rectangles

Some thoughts:
- How many ways can you draw rectangles in a browser (eg. dom, css, 2d canvas, svg, webgl)
- How is the fastest (most number of) rectangles can you draw with each approach?

Task:
- Paint random rectangles for 5 seconds, find out how fast each approach takes.

Rational:
- For various reasons, you may want to find the most convinent approach to draw rectangles. In [Space Radar](github.com/zz85/space-radar), I find myself having > 100K rectanges to paint at times, which is why I'm exploring and testing which ways rectangles can be painted.

Tests Cases:
- DOM, CSS, Canvas, or WebGL (three.js, stackgl or other libraries) may be used
- Fill them
- Stroke them
- Rectangle should be updatable by JS
- Rectangles are defined by (x, y, w, h)
- Canvas dimension is 1024x768.
- Random rects dimensions is width/4, height/4
- They are in units as fraction of the screen size (0..1)
- Each draw frame should be within 16.67s (60fps)
- Goal is to see compare the different approaches

## Current Results

These numbers are estimated number of triangles that can be drawn in a single 60fps frame (which has only 16.67ms rendering time). As with all benchmarks, these numbers should be taken with a grain of salt. There are many factors depending on different scenarios so milleage always vary.

0. Headless - (overheads of Math.random) 76K
1. Canvas - 2.7K rectangles
2. PixiJS - 3.1K Canvas Renderer, 2.3K WebGL Renderer
3. PixiJS - Single graphics. 1.8K WebGL, 2.4K Canvas
4. Three.js (Rect as mesh)

- each mesh as individual geometry (WebGl Renderer)
   - no shared geometry & no shared material - 1K
	   - shared geometry - 1.8K
	   - shared material - 3.7K (1.1K for canvas renderer)
	   - Add rect strokes (fill only, no lines) - 1.7K
	   - Almost similar using buffergeometry + line buffers (1.7K)

	- Single Buffer Geometry
		- 5K

	- Instance Geometry
		- 20K rectangles (Fill + Stroke)

## To come

## Others
- Indexed / Interved Buffers?
- Using point sprites
