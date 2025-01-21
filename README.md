# react-polygon-ts Documentation

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

