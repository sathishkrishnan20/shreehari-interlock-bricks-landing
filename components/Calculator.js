import { useState } from 'react';
import ButtonPrimary from './misc/ButtonPrimary';

export default function Calculator() {
  const [squareFeet, setSquareFeet] = useState('');
  const [brickSize, setBrickSize] = useState('6');
  const [numberOfBricks, setNumberOfBricks] = useState(null);

  const calculateBricks = () => {
    const areaPerBrick = brickSize === '6' ? 0.5 : 0.75;
    // const totalBricks = squareFeet * 2.4;
    const totalBricks = Math.ceil(squareFeet * 2.4);
    setNumberOfBricks(totalBricks);
  };

  return (
    <div>
        <div className=" p-2  w-full max-w-md">
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2 text-white-500">Enter Square Feet:</label>
            <input
              type="number"
              value={squareFeet}
              onChange={(e) => setSquareFeet(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2 text-white-500">Select Brick Size:</label>
            <select
              value={brickSize}
              onChange={(e) => setBrickSize(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="6">6-inch</option>
              <option value="8">8-inch</option>
            </select>
          </div>
          <ButtonPrimary title="Calculate" onClick={calculateBricks}>Calculate </ButtonPrimary>
          {numberOfBricks !== null && (
            <p className="mt-4 text-lg font-bold text-white-500">
              Number of Bricks Needed: {numberOfBricks}
            </p>
          )}
        </div>
    </div>
  );
}
