import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

 const PlayerContextProvider = ({children}) => {
    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()
    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState(
        {
            currentTime: {
                second: 0,
                minute: 0
            },
            totalTime: {
                second: 0,
                minute: 0
            }
        }
    )
    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }
    const pause = () => { 
        audioRef.current.pause()
        setPlayStatus(false)
    }
    const playWidthId = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play()
        setPlayStatus(true)
    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWidthId,
    }
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)) + '%'
                setTime(
                    {
                        currentTime: {
                            second: Math.floor(audioRef.current.currentTime % 60).padStart(2,0),
                            minute: Math.floor(audioRef.current.currentTime / 60).padStart(2,0)
                        },
                        totalTime: {
                            second: Math.floor(audioRef.current.duration % 60).padStart(2,0),
                            minute: Math.floor(audioRef.current.duration / 60).padStart(2,0)
                        }
                    }
                )
            }
        }, 1000);
    },[audioRef])
    return (
        <PlayerContextProvider value={contextValue}>
            {children}
        </PlayerContextProvider>
    )
}
export default PlayerContextProvider