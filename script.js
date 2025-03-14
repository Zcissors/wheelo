// JavaScript to implement the spinning wheel functionality
document.addEventListener('DOMContentLoaded', () => {
    const wheelCanvas = document.getElementById('wheelCanvas');
    const ctx = wheelCanvas.getContext('2d');
    const spinBtn = document.getElementById('spinBtn');
    const winnerText = document.getElementById('winnerText');

    const generateInitialSegments = () => {
        const prizes = [{ text: '0', color: '#007F0E' }];
        for (let i = 1; i <= 39; i++) {
            prizes.push({
                text: `${i}`,
                color: i % 2 === 0 ? '#B71C1C' : '#000000'
            });
        }
        return prizes;
    };

    let segments = generateInitialSegments();
    let rotation = 0;
    let isSpinning = false;
    let winner = null;
    let spinDuration = 10;

    // Draw the wheel
    const drawWheel = () => {
        const centerX = wheelCanvas.width / 2;
        const centerY = wheelCanvas.height / 2;
        const radius = Math.min(centerX, centerY) - 20;
        ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

        // Draw outer ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2);
        ctx.strokeStyle = "#FFD700"; // Gold rim
        ctx.lineWidth = 5;
        ctx.stroke();

        const anglePerSegment = (Math.PI * 2) / segments.length;

        segments.forEach((segment, index) => {
            const startAngle = index * anglePerSegment;
            const endAngle = (index + 1) * anglePerSegment;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = segment.color;
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw the text
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startAngle + anglePerSegment / 2);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(segment.text, radius - 25, 0);
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
    };

    drawWheel();

    // Spin the wheel
    const spinWheel = () => {
        if (isSpinning) return;

        isSpinning = true;
        winner = null;
        spinBtn.disabled = true;

        const minRotation = 3600; // 5 full rotations
        const maxRotation = 8600; // 10 full rotations
        const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation) + minRotation);

        rotation += randomRotation;
        wheelCanvas.style.transition = `transform ${spinDuration}s ease-out`;
        wheelCanvas.style.transform = `rotate(${rotation}deg)`;

        setTimeout(() => {
            const degreePerSegment = 360 / segments.length;
            const normalizedDegree = rotation % 360;
            const winningSegmentIndex = Math.floor(normalizedDegree / degreePerSegment);
            const actualIndex = segments.length - 1 - winningSegmentIndex;
            winner = segments[actualIndex % segments.length].text;
            winnerText.style.display = 'block';

            winnerText.textContent = `Winner: ${winner}`;
            winnerText.className = `winner ${winner === '0' ? 'green' : (parseInt(winner) % 2 === 0 ? 'red' : 'black')}`;

            isSpinning = false;
            spinBtn.disabled = false;
        }, spinDuration * 1000);
    };

    spinBtn.addEventListener('click', spinWheel);
});