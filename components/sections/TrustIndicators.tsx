"use client";

// =============================================================================
// MarketTicker — Live market data via TradingView ticker tape widget
// Shows: SENSEX, NIFTY 50, BANK NIFTY, NIFTY IT, Gold, USD/INR
// =============================================================================

import { useEffect, useRef } from "react";
import { Activity } from "lucide-react";

export default function TrustIndicators() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetContainer.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BSE:SENSEX",        title: "SENSEX" },
        { proName: "FX_IDC:USDINR",     title: "USD/INR" },
        { proName: "FOREXCOM:SPXUSD",   title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD",   title: "NASDAQ 100" },
        { proName: "TVC:GOLD",          title: "Gold" },
        { proName: "TVC:SILVER",        title: "Silver" },
        { proName: "TVC:UKOIL",         title: "Brent Crude" },
        { proName: "FX:EURUSD",         title: "EUR/USD" },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    widgetContainer.appendChild(script);
    containerRef.current.appendChild(widgetContainer);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      id="market-ticker"
    >
      {/* Dark navy band */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />

      {/* Label bar */}
      <div className="relative z-10 flex items-center gap-2 px-4 sm:px-6 pt-3 pb-1">
        <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase text-gold-400">
          <Activity className="w-3 h-3 animate-pulse" />
          Live Market Data
        </span>
        <span className="text-[10px] text-gray-500 ml-1">· Powered by TradingView</span>
      </div>

      {/* TradingView ticker tape */}
      <div
        ref={containerRef}
        className="relative z-10 w-full"
        style={{ minHeight: "46px" }}
      />
    </section>
  );
}
