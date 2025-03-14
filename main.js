import React, { useState, useRef, useEffect } from 'react';

const SpinningWheel = () => {
  // Generate 38 red/black prizes plus a green 0
  const generateInitialSegments = () => {
    const prizes = [
      { text: '0', color: '#007F0E' } // Green 0
    ];
    
    for (let i = 1; i <= 38; i++) {
      prizes.push({
        text: `${i}`,
        color: i % 2 === 0 ? '#B71C1C' : '#000000' // Alternating red and black
      });
    }
    return prizes;
  };
  
  const [segments, setSegments] = useState(generateInitialSegments());
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [spinDuration, setSpinDuration] = useState(10);
  
  const wheelRef = useRef(null);
  
  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinner(null);
    
    // Calculate a random rotation between 5 and 10 full rotations plus a random offset
    const minRotation = 1800; // 5 full rotations
    const maxRotation = 3600; // 10 full rotations
    const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation) + minRotation);
    
    // Set the final rotation value
    const newRotation = rotation + randomRotation;
    setRotation(newRotation);
    
    // Calculate the winner after the spin completes
    setTimeout(() => {
      const degreePerSegment = 360 / segments.length;
      const normalizedDegree = newRotation % 360;
      const winningSegmentIndex = Math.floor(normalizedDegree / degreePerSegment);
      const actualIndex = segments.length - 1 - winningSegmentIndex;
      const winningSegment = segments[actualIndex % segments.length];
      
      setWinner(winningSegment.text);
      setIsSpinning(false);
    }, spinDuration * 1000);
  };
  
  // Draw wheel when segments change
  useEffect(() => {
    const canvas = wheelRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw outer ring first
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2);
    ctx.strokeStyle = "#FFD700"; // Gold rim
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw segments
    const anglePerSegment = (Math.PI * 2) / segments.length;
    segments.forEach((segment, index) => {
      const startAngle = index * anglePerSegment;
      const endAngle = (index + 1) * anglePerSegment;
      
      // Draw segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Create a label background for better text visibility
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerSegment / 2);
      
      // Draw a small white background behind the text
      const labelDistance = radius - 25;
      const labelWidth = 22;
      const labelHeight = 20;
      
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(labelDistance, -labelHeight/2, labelWidth, labelHeight);
      
      // Draw the text on the white background
      ctx.fillStyle = segment.color;
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(segment.text, labelDistance + labelWidth/2, 0);
      
      ctx.restore();
    });
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw center decoration
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#FFD700';
    ctx.fill();
    
  }, [segments]);
  
  return (
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Roulette Spinning Wheel</h1>
      
      <div className="relative mb-8">
        <canvas 
          ref={wheelRef} 
          width={550} 
          height={550} 
          className="transform transition-transform" 
          style={{ 
            transform: `rotate(${rotation}deg)`, 
            transitionDuration: `${isSpinning ? spinDuration : 0}s`,
            transitionTimingFunction: isSpinning ? 'cubic-bezier(0.1, 0.7, 0.1, 1)' : 'ease' 
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4">
          <div className="w-0 h-0 border-l-12 border-r-12 border-t-16 border-t-red-600 border-l-transparent border-r-transparent"></div>
        </div>
        
        {/* Add a fixed center decoration that doesn't rotate */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
      
      <button 
        onClick={spinWheel} 
        disabled={isSpinning}
        className={`px-8 py-4 text-white text-xl font-bold rounded-full mb-4 ${isSpinning ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
      >
        {isSpinning ? `Spinning... (${Math.ceil(spinDuration)}s)` : 'Spin the Wheel!'}
      </button>
      
      {winner && (
        <div className={`text-3xl font-bold mb-6 p-6 rounded-lg border ${
          winner === '0' 
            ? 'bg-green-100 border-green-300 text-green-800' 
            : parseInt(winner) % 2 === 0 ? 'bg-red-100 border-red-300 text-red-800' : 'bg-gray-800 border-gray-600 text-white'
        }`}>
          Winner: {winner}!
        </div>
      )}
      
      <div className="w-full max-w-md mt-6">
        <div className="mb-8">
          <label className="block mb-2 text-lg font-bold">Spin Duration (seconds):</label>
          <input
            type="range"
            min="5"
            max="20"
            value={spinDuration}
            onChange={(e) => setSpinDuration(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg">{spinDuration} seconds</div>
        </div>
      </div>
    </div>
  );
};

export default SpinningWheel;