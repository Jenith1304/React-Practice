import React, { useImperativeHandle, useRef, useState, type RefObject } from 'react'
interface VideoPlayerHandle {
    play: () => void;
    pause: () => void;
    seek: (seconds: number) => void;
}

const Practical38_VideoPLayerHandle = () => {
    const player = useRef<VideoPlayerHandle>(null);

    return (
        <div>Practical38_VideoPLayerHandle
            <VideoPlayer ref={player} src="movie.mp4" />
            <button onClick={() => player.current?.play()}>Play</button>
            <button onClick={() => player.current?.seek(50)}>Seek</button>
        </div>
    )
}
type PropsType = {
    ref: RefObject<VideoPlayerHandle | null>,
    src: string
}

function VideoPlayer({ ref, src }: PropsType) {
    const playerRef = useRef<HTMLVideoElement | null>(null)
    const [isPlaying, setIsplaying] = useState(true)

    useImperativeHandle(ref, () => ({
        play() {
            const video = playerRef.current
            if (!video) return;
            video.play()
            setIsplaying(true)
        },
        pause() {
            const video = playerRef.current
            if (!video) return;
            video.pause()
            setIsplaying(false)

        },
        seek(seconds: number) {
            const video = playerRef.current
            if (video) {
                const seekTime =
                    (seconds / 100) * video.duration;
                video.currentTime = seekTime;
                console.log(seekTime)
            }

        }

    }))


    return <video src={src} ref={playerRef} />
}

export default Practical38_VideoPLayerHandle