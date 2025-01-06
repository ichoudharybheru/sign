import React, { useRef, useState, useEffect } from "react";

const Canwas = () => {
  const canwasRef = useRef(null); 
  const [isDrawing, setIsDrawing] = useState(false); 
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 }); 
  const [canwasSize, setCanwasSize] = useState({ width: 800, height: 400 });
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
       
        setCanwasSize({ width: screenWidth - 20, height: 300 }); // 20px padding for better display
      } else if (screenWidth <= 768) {
       
        setCanwasSize({ width: screenWidth - 40, height: 400 });
      } else {
        // Larger screens
        setCanwasSize({ width: 800, height: 400 });
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); 
  }, []);
  useEffect(() => {
    const canwas = canwasRef.current;
    const ctx = canwas.getContext("2d");

    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canwas.width, canwas.height);
  }, []);

 
  const getPosition = (e) => {
    const canwas = canwasRef.current;
    const rect = canwas.getBoundingClientRect();

    if (e.touches) {
     
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };


  const startDrawing = (e) => {
    const position = getPosition(e);
    setIsDrawing(true);
    setLastPosition(position);
  };

  
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  
  const draw = (e) => {
    if (!isDrawing) return;

    const canwas = canwasRef.current;
    const ctx = canwas.getContext("2d");
    const position = getPosition(e);

    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(position.x, position.y); 
    ctx.strokeStyle = "black"; // Line color
    ctx.lineWidth = 2; // Line width
    ctx.stroke();

    setLastPosition(position); 
  };

 
  const clearCanwas = () => {
    const canwas = canwasRef.current;
    const ctx = canwas.getContext("2d");

   
    ctx.clearRect(0, 0, canwas.width, canwas.height);

 
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canwas.width, canwas.height);
  };

  
  const downloadImage = () => {
    const canvas = canwasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.png"; 
    link.href = canvas.toDataURL("image/png"); // Convert the canvas to a PNG image
    link.click(); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <canvas
        ref={canwasRef}
        width={canwasSize.width}
        height={canwasSize.height}
        style={{ border: "1px solid black", cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchMove={draw}
      ></canvas>
      <br />
      <button onClick={clearCanwas} style={{ marginTop: "10px", marginRight: "10px" }}>
        Clear Page
      </button>
      <button onClick={downloadImage} style={{ marginTop: "10px" }}>
        Download Signature
      </button>
    </div>
  );
};

export default Canwas;




