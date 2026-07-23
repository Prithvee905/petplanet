import { useState } from 'react';

// TODO: confirm real pricing with the clinic
const getEstimatedPrices = (weightKg: number) => {
  const baseGrooming = 1500;
  const baseDental = 3000;
  const baseCheckup = 500;

  // Simple scaling formula based on weight
  const weightFactor = weightKg > 20 ? (weightKg - 20) * 50 : 0;

  return {
    grooming: baseGrooming + weightFactor,
    dental: baseDental + weightFactor * 1.5,
    checkup: baseCheckup, // Checkups usually don't scale by weight
  };
};

export function PriceSlider() {
  const [weight, setWeight] = useState<number>(15);
  const prices = getEstimatedPrices(weight);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />

      <h3 className="text-3xl font-display font-bold text-white mb-2">Estimate Your Price</h3>
      <p className="text-gray-400 mb-8 max-w-md">Slide to select your pet's approximate weight to see our starting prices for common services.</p>

      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <label htmlFor="weight-slider" className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            Pet Weight
          </label>
          <span className="text-3xl font-display font-bold text-orange">
            {weight}{weight === 40 ? '+' : ''} kg
          </span>
        </div>
        
        <input
          id="weight-slider"
          type="range"
          min="1"
          max="40"
          step="1"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange"
          style={{
            background: `linear-gradient(to right, #F07820 0%, #F07820 ${(weight / 40) * 100}%, #1f2937 ${(weight / 40) * 100}%, #1f2937 100%)`
          }}
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
          <span>1 kg</span>
          <span>20 kg</span>
          <span>40+ kg</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-black/40 border border-white/5 rounded-xl p-5">
          <p className="text-gray-400 text-sm mb-1">General Checkup</p>
          <p className="text-2xl font-bold text-white">₹{prices.checkup}</p>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-xl p-5">
          <p className="text-gray-400 text-sm mb-1">Full Grooming</p>
          <p className="text-2xl font-bold text-white">₹{prices.grooming}</p>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-xl p-5">
          <p className="text-gray-400 text-sm mb-1">Dental Cleaning</p>
          <p className="text-2xl font-bold text-white">₹{prices.dental}</p>
        </div>
      </div>

      <div className="bg-orange/10 border border-orange/20 rounded-lg p-4 flex items-start gap-3">
        <div className="text-orange mt-0.5">ⓘ</div>
        <p className="text-sm text-orange/80 leading-relaxed">
          <strong>Estimated price</strong> — final cost confirmed at consultation. Prices may vary based on coat condition, temperament, and specific medical needs.
        </p>
      </div>
    </div>
  );
}
