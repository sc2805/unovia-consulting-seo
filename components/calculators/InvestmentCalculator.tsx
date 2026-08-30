"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type CalculatorMode = "SIP" | "LUMPSUM";

interface YearData {
  year: number;
  monthlySip: number;
  yearlyInvested: number;
  totalInvested: number;
  estimatedReturns: number;
  totalCorpus: number;
}

export default function InvestmentCalculator() {
  const [mode, setMode] = useState<CalculatorMode>("SIP");
  
  // SIP Mode States
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [initialLumpsum, setInitialLumpsum] = useState<number>(0);
  const [stepUp, setStepUp] = useState<number>(10);
  
  // Lumpsum Mode States
  const [lumpsumInvestment, setLumpsumInvestment] = useState<number>(100000);
  
  // Shared States
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);
  
  // Inflation States
  const [adjustForInflation, setAdjustForInflation] = useState<boolean>(false);
  const [inflationRate, setInflationRate] = useState<number>(6);

  const calculateResults = () => {
    const yearlyData: YearData[] = [];
    
    if (mode === "SIP") {
      let currentSip = monthlyInvestment;
      let invested = initialLumpsum;
      let totalValue = initialLumpsum;
      const r = expectedReturn / 12 / 100;
      
      for (let year = 1; year <= timePeriod; year++) {
        let yearlyInvested = 0;
        
        for(let m = 1; m <= 12; m++) {
          invested += currentSip;
          yearlyInvested += currentSip;
          totalValue = (totalValue + currentSip) * (1 + r);
        }
        
        yearlyData.push({
          year,
          monthlySip: currentSip,
          yearlyInvested: year === 1 ? yearlyInvested + initialLumpsum : yearlyInvested,
          totalInvested: Math.round(invested),
          estimatedReturns: Math.round(totalValue - invested),
          totalCorpus: Math.round(totalValue)
        });
        
        if (stepUp > 0) {
          currentSip += currentSip * (stepUp / 100);
        }
      }
      
      totalValue = Math.round(totalValue);
      invested = Math.round(invested);
      const wealthGained = totalValue - invested;
      return { invested, wealthGained, totalValue, yearlyData };
      
    } else {
      const p = lumpsumInvestment;
      const r = expectedReturn / 100; 
      let totalValue = p;
      
      for (let year = 1; year <= timePeriod; year++) {
         totalValue = totalValue * (1 + r);
         yearlyData.push({
           year,
           monthlySip: 0,
           yearlyInvested: year === 1 ? p : 0,
           totalInvested: p,
           estimatedReturns: Math.round(totalValue - p),
           totalCorpus: Math.round(totalValue)
         });
      }
      
      totalValue = Math.round(totalValue);
      const wealthGained = totalValue - p;
      return { invested: p, wealthGained, totalValue, yearlyData };
    }
  };

  const results = useMemo(calculateResults, [
    mode,
    monthlyInvestment,
    initialLumpsum,
    lumpsumInvestment,
    expectedReturn,
    timePeriod,
    stepUp,
  ]);

  const realValue = adjustForInflation 
    ? Math.round(results.totalValue / Math.pow(1 + (inflationRate / 100), timePeriod))
    : results.totalValue;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const chartData = [
    { name: "Invested Amount", value: results.invested, color: "#1e293b" }, // navy-800
    { name: "Est. Returns", value: results.wealthGained, color: "#d4af37" }, // gold-500
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {/* Top Section: Calculator & Chart */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
        {/* Left side: Controls */}
        <div className="p-8 lg:p-10 flex-1 border-b lg:border-b-0 lg:border-r border-gray-100">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">
            Investment Calculator
          </h2>

          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-lg mb-8">
            <button
              onClick={() => setMode("SIP")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                mode === "SIP"
                  ? "bg-white text-navy-800 shadow-sm"
                  : "text-gray-500 hover:text-navy-700"
              }`}
            >
              SIP
            </button>
            <button
              onClick={() => setMode("LUMPSUM")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                mode === "LUMPSUM"
                  ? "bg-white text-navy-800 shadow-sm"
                  : "text-gray-500 hover:text-navy-700"
              }`}
            >
              Lumpsum
            </button>
          </div>

          <div className="space-y-8">
            {/* Primary Investment Amount */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-semibold text-gray-700">
                  {mode === "SIP" ? "Monthly Investment" : "Total Investment"}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                  <input
                    type="number"
                    value={mode === "SIP" ? monthlyInvestment : lumpsumInvestment}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (mode === "SIP") setMonthlyInvestment(val);
                      else setLumpsumInvestment(val);
                    }}
                    className="w-32 pl-7 pr-3 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>
              </div>
              <input
                type="range"
                min={mode === "SIP" ? 500 : 10000}
                max={mode === "SIP" ? 1000000 : 100000000}
                step={mode === "SIP" ? 500 : 10000}
                value={mode === "SIP" ? monthlyInvestment : lumpsumInvestment}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (mode === "SIP") setMonthlyInvestment(val);
                  else setLumpsumInvestment(val);
                }}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            {/* Initial Lumpsum (SIP Hybrid Mode) */}
            {mode === "SIP" && (
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Initial Lumpsum (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input
                      type="number"
                      value={initialLumpsum}
                      onChange={(e) => setInitialLumpsum(Number(e.target.value))}
                      className="w-32 pl-7 pr-3 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10000000}
                  step={10000}
                  value={initialLumpsum}
                  onChange={(e) => setInitialLumpsum(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>
            )}

            {/* Expected Return */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-semibold text-gray-700">
                  Expected Return Rate (p.a)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-24 pr-8 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            {/* Time Period */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-semibold text-gray-700">
                  Time Period
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-24 pr-8 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Yr</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                step={1}
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            {/* Annual Step Up (Only for SIP) */}
            {mode === "SIP" && (
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Annual Step Up
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stepUp}
                      onChange={(e) => setStepUp(Number(e.target.value))}
                      className="w-24 pr-8 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={1}
                  value={stepUp}
                  onChange={(e) => setStepUp(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>
            )}
            
            {/* Inflation Toggle Section */}
            <div className="pt-4 border-t border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={adjustForInflation}
                  onChange={(e) => setAdjustForInflation(e.target.checked)}
                  className="w-5 h-5 text-gold-500 rounded border-gray-300 focus:ring-gold-500/50 transition-colors"
                />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-navy-800 transition-colors">
                  Adjust for Inflation
                </span>
              </label>
              
              {adjustForInflation && (
                <div className="mt-6 animate-in slide-in-from-top-2 fade-in duration-300">
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-medium text-gray-600">
                      Expected Inflation Rate (p.a)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-24 pr-8 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={15}
                    step={0.5}
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Right side: Results Visualization */}
        <div className="p-8 lg:p-10 w-full lg:w-96 flex flex-col bg-gray-50/50">
          <h3 className="text-lg font-bold text-navy-800 mb-6 text-center">
            Projected Wealth
          </h3>
          
          {/* Chart */}
          <div className="h-48 w-full relative mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry) => (
                    <Cell key={`cell-${entry.color}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: unknown) => formatCurrency(Number(value))}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Total Value</span>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4 flex-1 flex flex-col justify-end">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-navy-800" />
                <span className="text-sm text-gray-600">Invested Amount</span>
              </div>
              <span className="font-semibold text-navy-800">{formatCurrency(results.invested)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold-500" />
                <span className="text-sm text-gray-600">Est. Returns</span>
              </div>
              <span className="font-semibold text-navy-800">{formatCurrency(results.wealthGained)}</span>
            </div>

            <div className="pt-4 mt-2 border-t border-gray-200">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-navy-800">Total Value (Nominal)</span>
                <span className="text-xl font-bold text-navy-800">{formatCurrency(results.totalValue)}</span>
              </div>
              
              {adjustForInflation && (
                <div className="flex justify-between items-center pt-2">
                   <span className="text-sm font-bold text-gray-600">Real Value (Today&apos;s Value)</span>
                  <span className="text-lg font-bold text-emerald-600">{formatCurrency(realValue)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section: Year-wise Breakdown Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 lg:p-8 bg-navy-800 text-white">
          <h3 className="text-xl font-bold">Year-by-Year Growth Projection</h3>
          <p className="text-sm text-navy-200 mt-1">A detailed breakdown of how your investment compounds over time.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                {mode === "SIP" && (
                  <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Monthly SIP</th>
                )}
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Yearly Invested</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Total Invested</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Est. Returns</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Total Corpus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {results.yearlyData.map((row) => (
                <tr key={row.year} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-navy-800">{row.year}</td>
                  {mode === "SIP" && (
                    <td className="px-6 py-4 text-sm text-gray-600">{formatCurrency(row.monthlySip)}</td>
                  )}
                  <td className="px-6 py-4 text-sm text-gray-600">{formatCurrency(row.yearlyInvested)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{formatCurrency(row.totalInvested)}</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 font-medium">{formatCurrency(row.estimatedReturns)}</td>
                  <td className="px-6 py-4 text-sm text-navy-800 font-bold">{formatCurrency(row.totalCorpus)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
