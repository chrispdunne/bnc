import BlurEffect from "./BlurEffect";

export default function NonOptimizedImage({
    imgUrl,
    index,
    shouldBlur,
}: {
    imgUrl: string;
    index: number;
    shouldBlur?: boolean;
}) {
    return (
        <>
            {shouldBlur && <BlurEffect />}
            <div
                className=" bg-cover bg-fixed absolute inset-0 -z-10"
                style={{ backgroundImage: `url(${imgUrl}` }}
            />
        </>
    );
}
