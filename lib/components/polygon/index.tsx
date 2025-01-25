

type TPolygonProps = {
  sides: number; // Number of sides for the polygon
  size: number; // Size of the polygon (radius of the circumscribed circle)
  strokeWidth: number;
} & React.SVGProps<SVGPolygonElement>; // Include all valid SVGPolygonElement attributes

export function Polygon({
  sides,
  size,
  fill = "#3498db",
  stroke = "#2c3e50",
  strokeWidth = 2,
  ...props
}: TPolygonProps) {
  if (sides < 3) {
    return <p>A polygon must have at least 3 sides.</p>;
  }
  const padding = strokeWidth / 1;

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = (2 * Math.PI * i) / sides; // Angle for each vertex
    const x = size + size * Math.cos(angle);
    const y = size + size * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox={`-${padding} -${padding} ${(size + padding) * 2} ${(size + padding) * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={points}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        transform={`rotate(${90} ${size} ${size})`} // Apply rotation around the center
        {...props}
      />
    </svg>
  );
};


