import React, { useRef, useState, useEffect } from "react";

const CameraView = () => {
  const videoRef = useRef(null);
  const [spokenText, setSpokenText] = useState("");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        videoRef.current.srcObject = stream;

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true; // Enable interim results
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
          let finalTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript + " ";
            }
          }
          setSpokenText(finalTranscript);
        };

        recognition.start();
      } catch (error) {
        console.error("Error starting camera:", error);
      }
    };

    startCamera();
  }, []);

  return (
    <div>
      <h1>Camera View</h1>
      <video ref={videoRef} autoPlay playsInline />
      <div>
        <h2>Spoken Text:</h2>
        <p>{spokenText}</p>
      </div>
    </div>
  );
};

export default CameraView;
