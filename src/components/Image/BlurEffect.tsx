export default function BlurEffect() {
    return (
        <div
            className="absolute"
            style={{
                inset: 0,
                backdropFilter: "blur(12px)",
                filter: "blur(0)",
                zIndex: 0,
            }}
        />
    );
}
