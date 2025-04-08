'use client';

import React, { useState } from 'react';

export default function AdminPanelHome() {
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [cells, setCells] = useState(Array(9).fill(''));

  const handleClick = (i: number) => {
    if (cells[i] !== '') return;
    const newCells = [...cells];
    newCells[i] = turn;
    setCells(newCells);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setCells(Array(9).fill(''));
    setTurn('X');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">👋 Welcome, Admin!</h1>
        <p className="text-lg text-gray-600 mb-6">
          You&apos;re logged into the admin panel. Use the sidebar to manage your dashboard, users, services, and more.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">🎮 Take a break: Play Tic-Tac-Toe</h2>
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            {cells.map((cell, index) => (
              <button
                key={index}
                className="w-20 h-20 text-2xl font-bold text-gray-800 bg-white border-2 border-gray-300 rounded-md hover:bg-blue-100"
                onClick={() => handleClick(index)}
              >
                {cell}
              </button>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            Current Turn: <span className="font-semibold">{turn}</span>
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}
