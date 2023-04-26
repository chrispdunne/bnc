import Image from "next/image";
import BlurEffect from "./BlurEffect";

export default function OptimizedImage({
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
            <Image
                src={imgUrl}
                alt={"background-image"}
                fill
                style={{ objectFit: "cover", zIndex: -1 }}
                priority={index === 0}
            />
        </>
    );
}
