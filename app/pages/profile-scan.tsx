import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import jsQR from 'jsqr';

const ProfileScan: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (err) {
        setError("Camera access error. Please allow camera access.");
      }
    };

    startCamera();

    return () => {
      const stream = videoRef.current?.srcObject as MediaStream | null;
      stream?.getTracks().forEach((track) => track.stop());
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const scan = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas && video.readyState === 4) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code) {
          if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
          navigate('/profile/scan/success', { state: { scannedData: code.data }, viewTransition: true });
          return;
        }
      }
      frameRef.current = requestAnimationFrame(scan);
    };

    frameRef.current = requestAnimationFrame(scan);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black relative text-white">
      {error && <div className="absolute p-4 bg-red-700 rounded">{error}</div>}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />
      <canvas ref={canvasRef} className="absolute w-full h-full opacity-0" />
      <div className="relative z-10 w-80 h-80 border-4 border-blue-500 rounded-lg flex items-center justify-center">
        <p className="text-sm absolute bottom-4">Align QR code within the frame</p>
      </div>
    </div>
  );
};

export default ProfileScan;