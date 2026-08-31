import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export interface AIQueryResponse {
  title: string;
  answer: string;
  keyTakeaways: string[];
  applicableSections?: string;
  recommendedService: {
    label: string;
    href: string;
  };
  ctaText: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const query: string = (body.query || "").trim().toLowerCase();

    if (!query) {
      return NextResponse.json({ error: "Query string is required" }, { status: 400 });
    }

    let responseData: AIQueryResponse;

    // 1. Capital Gains & Property Tax Query Intent
    if (
      query.includes("property") ||
      query.includes("capital gain") ||
      query.includes("section 54") ||
      query.includes("54ec") ||
      query.includes("house sale") ||
      query.includes("land sale")
    ) {
      responseData = {
        title: "Capital Gains Tax Exemption on Property Sale",
        answer:
          "Capital gains arising from the sale of residential property held for over 24 months are classified as Long-Term Capital Gains (LTCG) and taxed at 20% with indexation. You can completely exempt your tax liability by reinvesting gains into a new residential house under Section 54/54F or purchasing 54EC Capital Gains Bonds within 6 months.",
        keyTakeaways: [
          "Section 54: Reinvest LTCG in 1 residential house (or 2 houses if gains are below ₹2 Cr) within 2-3 years.",
          "Section 54EC: Invest up to ₹50 Lakhs in NHAI/REC bonds within 6 months of sale (5-year lock-in).",
          "Capital Gains Accounts Scheme (CGAS): Deposit unutilized gains in a CGAS bank account before ITR deadline.",
        ],
        applicableSections: "Income Tax Act 1961 — Section 54, Section 54EC, Section 54F",
        recommendedService: {
          label: "Tax Consultancy & Advisory",
          href: "/services/tax-consultancy",
        },
        ctaText: "Calculate Your Property Capital Gains Tax With Our CAs",
      };
    }

    // 2. New vs Old Tax Regime Intent
    else if (
      query.includes("new tax regime") ||
      query.includes("old tax regime") ||
      query.includes("80c") ||
      query.includes("hra") ||
      query.includes("regime") ||
      query.includes("tax slab")
    ) {
      responseData = {
        title: "New Tax Regime vs. Old Tax Regime Optimization",
        answer:
          "The New Tax Regime is the default tax structure for FY 2026-27, offering lower tax slab rates but forfeiting most exemptions. The Old Tax Regime allows you to claim Section 80C (₹1.5L), HRA exemption, Section 80D (health insurance), and home loan interest (₹2L). If your total eligible deductions exceed ₹3.75 Lakhs, the Old Tax Regime generally saves more tax.",
        keyTakeaways: [
          "New Tax Regime includes a ₹75,000 Standard Deduction for salaried employees.",
          "Section 87A rebate makes income up to ₹7 Lakhs tax-free under the New Tax Regime.",
          "Salaried individuals can choose between regimes annually at the time of ITR filing.",
        ],
        applicableSections: "Income Tax Act 1961 — Section 115BAC & Section 87A",
        recommendedService: {
          label: "Personal Tax Optimization",
          href: "/services/tax-consultancy",
        },
        ctaText: "Get Your Tax Regime Compared & Optimized",
      };
    }

    // 3. GST & Rule 37A / E-Invoicing Intent
    else if (
      query.includes("gst") ||
      query.includes("rule 37a") ||
      query.includes("itc") ||
      query.includes("e-invoice") ||
      query.includes("gstr") ||
      query.includes("input tax")
    ) {
      responseData = {
        title: "GST Compliance & Input Tax Credit (ITC) Protection",
        answer:
          "Under GST Rule 37A, buyers must reverse claimed Input Tax Credit (ITC) if their supplier fails to file GSTR-3B by September 30 following the end of the financial year. To avoid interest penalties and cash flow blocks, businesses must maintain monthly GSTR-2B reconciliation and ensure e-invoicing compliance for turnovers above ₹5 Crores.",
        keyTakeaways: [
          "Reversal Deadline: Reverse ITC by November 30 to avoid 18% annual interest penalty under Section 50.",
          "Re-claim Facility: Reversed ITC can be re-claimed in future GSTR-3B once the supplier pays tax.",
          "E-Invoicing Mandate: Mandatory IRN generation for B2B invoices for businesses with turnover > ₹5 Cr.",
        ],
        applicableSections: "CGST Rules — Rule 37A & Section 16(2)(aa)",
        recommendedService: {
          label: "GST Advisory & Reconciliation",
          href: "/services/gst-advisory",
        },
        ctaText: "Schedule A GSTR-2B & Rule 37A Audit With Our Experts",
      };
    }

    // 4. Wealth Management, SIP & Lumpsum Intent
    else if (
      query.includes("sip") ||
      query.includes("lumpsum") ||
      query.includes("mutual fund") ||
      query.includes("investment") ||
      query.includes("wealth") ||
      query.includes("reit") ||
      query.includes("private credit") ||
      query.includes("pms")
    ) {
      responseData = {
        title: "Goal-Based Wealth Allocation & Portfolio Strategy",
        answer:
          "Systematic Investment Plans (SIPs) use rupee cost averaging to manage equity volatility, while Lumpsum investments capture upside momentum during market pullbacks. For High-Net-Worth Individuals (HNIs), combining equity mutual funds with alternative assets like Private Credit (12-16% target IRR), Commercial REITs (6-9% yields), and PMS provides optimal risk-adjusted growth.",
        keyTakeaways: [
          "Step-Up SIPs: Increasing monthly SIPs by 10% annually can nearly double final 15-year wealth.",
          "Section 50AA Debt Funds: Debt mutual fund gains are taxed at slab rates; Arbitrage Funds provide tax-efficient alternatives.",
          "Multi-Asset Allocation: Diversification across equities, debt, gold, and private credit shields against drawdowns.",
        ],
        applicableSections: "SEBI & Wealth Allocation Guidelines",
        recommendedService: {
          label: "Private Wealth Management",
          href: "/services/wealth-management",
        },
        ctaText: "Build Your Customized Portfolio Strategy",
      };
    }

    // 5. NRI Tax & Remittance Intent
    else if (
      query.includes("nri") ||
      query.includes("foreign") ||
      query.includes("dtaa") ||
      query.includes("195") ||
      query.includes("nre") ||
      query.includes("nro") ||
      query.includes("remittance")
    ) {
      responseData = {
        title: "NRI Tax Compliance & Foreign Remittance (Section 195)",
        answer:
          "NRIs selling property in India face high TDS deduction (up to 20% + surcharge under Section 195). To avoid excessive tax withholding, NRIs can apply for a Lower Tax Deduction Certificate under Section 197. Furthermore, Double Taxation Avoidance Agreements (DTAA) allow NRIs to claim foreign tax credits in their residence country.",
        keyTakeaways: [
          "Section 197 Certificate: Reduces buyer TDS deduction from 20% on total sale price to actual net gains.",
          "NRE vs NRO Accounts: Interest on NRE is 100% tax-free in India; NRO interest is subject to 30% TDS.",
          "Form 15CA/15CB: Mandatory RBI compliance documentation for foreign funds repatriation up to $1M USD.",
        ],
        applicableSections: "Income Tax Act — Section 195, 197 & Section 90 (DTAA)",
        recommendedService: {
          label: "NRI Tax & Wealth Advisory",
          href: "/services/tax-consultancy",
        },
        ctaText: "Consult Our NRI Tax Specialists Today",
      };
    }

    // 6. Generic / Default Business Finance Intent
    else {
      responseData = {
        title: "Institutional Financial Strategy & CA Advisory",
        answer:
          `Regarding "${query}": Strategic financial discipline requires structured compliance across Income Tax, GST, and wealth allocation. Our team of Chartered Accountants at Unovia Consulting provides institutional-grade advisory, cash flow forecasting, and tax optimization tailored for businesses and individual investors.`,
        keyTakeaways: [
          "Comprehensive Coverage: Tax planning, GST audits, Virtual CFO services, and Private Wealth Management.",
          "CA-Led Strategy: Qualified Chartered Accountants review and execute all advisory mandates.",
          "Risk & Compliance: Zero-penalty compliance registers and optimized tax positions.",
        ],
        applicableSections: "Unovia Advisory Knowledge Desk",
        recommendedService: {
          label: "Explore Unovia Advisory Services",
          href: "/services",
        },
        ctaText: "Book A Free 1-on-1 Advisory Session",
      };
    }

    return NextResponse.json(responseData);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to process AI query";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
