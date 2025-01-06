import React, { useRef, useState, useEffect } from "react";

const Canwas = () => {
  const canvasRef = useRef(null); // Reference to the canvas
  const [isDrawing, setIsDrawing] = useState(false); // Drawing state
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 }); // Last position of touch/mouse
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 400 });
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
        // Small screens (mobile)
        setCanvasSize({ width: screenWidth - 20, height: 300 }); // 20px padding for better display
      } else if (screenWidth <= 768) {
        // Medium screens (tablets)
        setCanvasSize({ width: screenWidth - 40, height: 400 });
      } else {
        // Larger screens
        setCanvasSize({ width: 800, height: 400 });
      }
    };

    handleResize(); // Set the size on initial load
    window.addEventListener("resize", handleResize); // Update size on window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fill the canvas with white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Get mouse or touch position relative to the canvas
  const getPosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches) {
      // For touch events, use the first touch point
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    // For mouse events
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // Start drawing (Mouse Down / Touch Start)
  const startDrawing = (e) => {
    const position = getPosition(e);
    setIsDrawing(true);
    setLastPosition(position);
  };

  // Stop drawing (Mouse Up / Touch End)
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Draw on the canvas (Mouse Move / Touch Move)
  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const position = getPosition(e);

    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y); // Start from the last position
    ctx.lineTo(position.x, position.y); // Draw to the current position
    ctx.strokeStyle = "black"; // Line color
    ctx.lineWidth = 2; // Line width
    ctx.stroke();

    setLastPosition(position); // Update the last position
  };

  // Clear the canvas and reset the white background
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fill the canvas with white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // Download the canvas as an image
  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.png"; // Default file name
    link.href = canvas.toDataURL("image/png"); // Convert the canvas to a PNG image
    link.click(); // Simulate a click to download the image
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
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
      <button onClick={clearCanvas} style={{ marginTop: "10px", marginRight: "10px" }}>
        Clear Page
      </button>
      <button onClick={downloadImage} style={{ marginTop: "10px" }}>
        Download Signature
      </button>
    </div>
  );
};

export default Canwas;




