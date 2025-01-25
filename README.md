# react-polygon-ts Documentation
A simple react component in typescript to draw any polygon of n>=3 sides
## Steps to install
npm i react-polygon-ts

## Description
Component to draw polygons of n>=3 sides

## Example Usage
```tsx
import { Polygon } from 'react-polygon-ts';

function App() {
  return (
    <div>
      <h1>Polygon Example</h1>
      <Polygon sides={5} size={100} fill="lightblue" stroke="black" strokeWidth={2} />
    </div>
  );
}

export default App;
```

This example renders a pentagon with the specified size and styles.



| Prop          | Type                     | Description                                                                                             | Default      |
|---------------|--------------------------|---------------------------------------------------------------------------------------------------------|--------------|
| `sides`       | `number`                 | The number of sides for the polygon (must be `>= 3`).                                                  | **Required** |
| `size`        | `number`                 | The size of the polygon, representing the radius of the circumscribed circle.                          | **Required** |
| `strokeWidth` | `number`                 | The width of the polygon's stroke (applies to the SVG `stroke-width` attribute).                        | `2`          |
| ...props      | `React.SVGProps<SVGPolygonElement>` | Any other valid attributes for an SVG `<polygon>` element, such as `fill`, `stroke`, `strokeOpacity`. | N/A   
