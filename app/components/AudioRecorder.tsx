"use client";

import React, { useState, useRef } from 'react';
import { Mic, Pause, Play, Square, Trash2 } from 'lucide-react';
import AudioPlayer from './AudioPlayer'; // Import the new component

type RecordingStatus = 'idle' | 'recording' | 'paused' | 'stopped';

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob) => void;
  onRecordingReset: () => void;
}

const AudioRecorder = ({ onRecordingComplete, onRecordingReset }: AudioRecorderProps) => {
    const [status, setStatus] = useState<RecordingStatus>('idle');
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const cleanupStream = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };

    const startRecording = async () => {
        try {
            cleanupStream();
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;
            
            setStatus('recording');
            setAudioUrl(null);
            audioChunksRef.current = [];
            onRecordingReset();

            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) audioChunksRef.current.push(event.data);
            };

            recorder.onstop = () => {
                const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                setStatus('stopped');
                onRecordingComplete(blob);
                cleanupStream();
            };
            
            recorder.start();
        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Could not access the microphone. Please check your browser permissions.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current?.state !== 'inactive') {
            mediaRecorderRef.current?.stop();
        }
    };

    const pauseRecording = () => {
        if (mediaRecorderRef.current?.state === 'recording') {
            mediaRecorderRef.current.pause();
            setStatus('paused');
        }
    };

    const resumeRecording = () => {
        if (mediaRecorderRef.current?.state === 'paused') {
            mediaRecorderRef.current.resume();
            setStatus('recording');
        }
    };
    
    const resetRecording = () => {
        stopRecording();
        setAudioUrl(null);
        audioChunksRef.current = [];
        onRecordingReset();
        setStatus('idle');
    };

    return (
        <div className="w-full mx-auto bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <div className="flex items-center justify-center space-x-4 h-24">
                {status === 'idle' && (
                    <button type="button" onClick={startRecording} className="flex flex-col items-center justify-center h-24 w-24 bg-rose-600 text-white rounded-full transition-all duration-300 hover:bg-rose-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-300">
                        <Mic size={32} /><span className="text-sm mt-1">Start</span>
                    </button>
                )}
                {(status === 'recording' || status === 'paused') && (
                     <div className="flex items-center justify-center space-x-4">
                        <button type="button" onClick={stopRecording} className="flex flex-col items-center justify-center h-24 w-24 bg-stone-700 text-white rounded-full transition-all duration-300 hover:bg-stone-800 shadow-lg">
                            <Square size={28} /><span className="text-sm mt-1">Stop</span>
                        </button>
                        {status === 'recording' ? (
                            <button type="button" onClick={pauseRecording} className="flex flex-col items-center justify-center h-20 w-20 bg-amber-500 text-white rounded-full transition-all duration-300 hover:bg-amber-600 shadow-md">
                                <Pause size={24} /><span className="text-xs mt-1">Pause</span>
                            </button>
                        ) : (
                             <button type="button" onClick={resumeRecording} className="flex flex-col items-center justify-center h-20 w-20 bg-emerald-500 text-white rounded-full transition-all duration-300 hover:bg-emerald-600 shadow-md">
                                <Play size={24} /><span className="text-xs mt-1">Resume</span>
                            </button>
                        )}
                    </div>
                )}
                 {status === 'stopped' && (
                    <div className="text-center">
                        <p className="font-semibold text-stone-700">Recording complete.</p>
                        <p className="text-sm text-stone-500">You can preview your audio below.</p>
                    </div>
                 )}
            </div>

            {audioUrl && (
                <div className="mt-8 text-center">
                    <h4 className="font-semibold text-stone-600 mb-2">Preview</h4>
                    <AudioPlayer audioUrl={audioUrl} />
                    <button type="button" onClick={resetRecording} className="mt-4 flex items-center justify-center mx-auto gap-2 px-4 py-2 text-sm text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 transition-colors">
                        <Trash2 size={16} /> Delete & Record Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default AudioRecorder;