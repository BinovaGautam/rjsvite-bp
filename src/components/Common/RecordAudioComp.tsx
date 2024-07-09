"use client";
// import { LuClock4 } from "react-icons/lu";
import { PrimaryProgress, Card  } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { IBaseTimer } from "@/lib/Types";
import {  cn } from "@/lib";

interface IAudioRecordingComp {
    // timers ?: IBaseTimer[];
    className?: string;
    timer : IBaseTimer;
}

const AudioRecordingComp = ({
    timer,
    className
}: IAudioRecordingComp) => {
    const [rcTime , setRcTime] = useState<number>(0)
    const [recordingCompleted , setRecordingCompleted] = useState<boolean>(false)

    const {
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
        isPaused,
        recordingTime,
        mediaRecorder,
    } = useAudioRecorder();

    const handleStartRecording = () => {
        if(isRecording) return console.log('ALREADY RECORDING')
        console.log('FROM THE START RECORDING FUNCTION ======>>>.', timer)
        //playAudioAction(START_SPEAKING_AUDIO)
    }

    const handleStopRecording = () => {
        stopRecording();
        setRecordingCompleted(true)
       // playAudioAction(END_SPEAKING_AUDIO)
    }

    useEffect(() => {
        console.log('INSIDE THE EFFECT HOOK ======>>>.', timer)
        if(!timer) return;
        // start recording if timer is present and recording is not started
         let interval = setInterval(() => {
            setRcTime(prev => prev + 1)
         }, 1000)
       
         let timeout = setTimeout(() => {
                console.log('TIMEOUT REACHED', timer)
                handleStopRecording()
                clearInterval(interval)
         }, (timer.duration || 1)*1000 )

         handleStartRecording()

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }

    },[])

  

    const progressPercent = useMemo(() => {
        return (rcTime / (timer.duration || 1)) * 100
    }, [rcTime])

    if(recordingCompleted) return <div>Recording Completed</div>

    return (
        <div className={cn(className)} >
            {!!recordingBlob && <audio src={URL.createObjectURL(recordingBlob)} controls />}
            <br/>
            <Card className={cn("flex items-center rounded-md px-8 bg-alpha")} >
                <FaMicrophone size={30} className="text-primary" />
                <div className="flex flex-col m-4 ">
                     <p>Recording Audio...</p>
                    <PrimaryProgress value={progressPercent} />
                </div>
              
            </Card>
            <br/>

         
        </div>
    );
};

export default AudioRecordingComp;