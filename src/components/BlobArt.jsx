import { useMemo } from "react";

// Generate a random blob path using bezier curves
function generateBlobPath(size, complexity = 6, variance = 0.4) {
    const center = size / 2;
    const radius = size * 0.35;
    const points = [];

    for (let i = 0; i < complexity; i++) {
        const angle = (i / complexity) * Math.PI * 2;
        const randomRadius = radius * (1 + (Math.random() - 0.5) * variance * 2);
        points.push({
            x: center + Math.cos(angle) * randomRadius,
            y: center + Math.sin(angle) * randomRadius,
        });
    }

    // Create smooth bezier curve through points
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length; i++) {
        const p0 = points[(i - 1 + points.length) % points.length];
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const p3 = points[(i + 2) % points.length];

        const cp1x = p1.x + (p2.x - p0.x) * 0.2;
        const cp1y = p1.y + (p2.y - p0.y) * 0.2;
        const cp2x = p2.x - (p3.x - p1.x) * 0.2;
        const cp2y = p2.y - (p3.y - p1.y) * 0.2;

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return path + " Z";
}

// Aesthetic color palettes
const palettes = [
    ["#ff6b6b", "#feca57", "#ff9ff3"], // Warm sunset
    ["#5f27cd", "#341f97", "#8854d0"], // Deep purple
    ["#00d2d3", "#54a0ff", "#5f27cd"], // Ocean dream
    ["#ff9f43", "#ee5a24", "#f368e0"], // Tropical
    ["#10ac84", "#1dd1a1", "#48dbfb"], // Mint fresh
    ["#e17055", "#fdcb6e", "#fab1a0"], // Peachy
    ["#6c5ce7", "#a29bfe", "#fd79a8"], // Soft violet
    ["#00b894", "#55efc4", "#81ecec"], // Aqua
];

function getRandomPalette() {
    return palettes[Math.floor(Math.random() * palettes.length)];
}

function BlobArt({ className = "", seed = null }) {
    const blobs = useMemo(() => {
        const colors = getRandomPalette();
        const size = 200;

        return [
            {
                path: generateBlobPath(size, 6, 0.5),
                color: colors[0],
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
                scale: 0.8 + Math.random() * 0.6,
                opacity: 0.7 + Math.random() * 0.3,
            },
            {
                path: generateBlobPath(size, 7, 0.4),
                color: colors[1],
                x: 30 + Math.random() * 40,
                y: Math.random() * 40 - 20,
                scale: 0.7 + Math.random() * 0.5,
                opacity: 0.6 + Math.random() * 0.3,
            },
            {
                path: generateBlobPath(size, 5, 0.6),
                color: colors[2],
                x: Math.random() * 60 - 10,
                y: 20 + Math.random() * 30,
                scale: 0.6 + Math.random() * 0.4,
                opacity: 0.5 + Math.random() * 0.3,
            },
        ];
    }, [seed]);

    return (
        <div className={`overflow-hidden ${className}`}>
            <svg
                viewBox="0 0 200 200"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full"
                style={{ filter: "blur(1px)" }}
            >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                            result="goo"
                        />
                    </filter>
                </defs>
                <g filter="url(#goo)">
                    {blobs.map((blob, i) => (
                        <path
                            key={i}
                            d={blob.path}
                            fill={blob.color}
                            opacity={blob.opacity}
                            transform={`translate(${blob.x}, ${blob.y}) scale(${blob.scale})`}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}

export { BlobArt };
