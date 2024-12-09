type ProgressbarProps = {
  size: number;
  text: string;
  percentage: string;
};

const Progressbar = ({ size, percentage, text }: ProgressbarProps) => {
  const strokeWidth = 5;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (size - 10) / 2;
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${size} ${size}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * Number(percentage)) / 100;

  return (
    <div>
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          className="stroke-[#ddd] fill-none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="stroke-primary circle-progress fill-none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className="text-xs font-medium"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Progressbar;
