"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, CheckCircle, Info, Quote } from "lucide-react";

type Token =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "code"; text: string; lang?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "p"; text: string }
  | { type: "blank" };

// Parse inline formatting: **bold**, *italic*, and [link text](url)
function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Regex matches [link text](url) OR **bold** OR *italic*
  const pattern = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*(.+?)\*\*)|(\*(.+?)\*)/g;

  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    const matchIndex = match.index;

    // Push preceding text
    if (matchIndex > lastIndex) {
      nodes.push(text.substring(lastIndex, matchIndex));
    }

    if (match[1]) {
      // Link: [link text](url)
      const linkText = match[2];
      const url = match[3];
      const isInternal = url.startsWith("/");

      if (isInternal) {
        nodes.push(
          <Link
            key={matchIndex}
            href={url}
            className="inline-flex items-center gap-0.5 font-bold text-navy-800 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-gold-600 transition-colors"
          >
            {parseInline(linkText)}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={matchIndex}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-navy-800 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-gold-600 transition-colors"
          >
            {parseInline(linkText)}
            <ExternalLink className="w-3 h-3 text-gold-500 inline" />
          </a>
        );
      }
    } else if (match[4]) {
      // Bold: **bold**
      nodes.push(
        <strong key={matchIndex} className="font-bold text-navy-900">
          {match[5]}
        </strong>
      );
    } else if (match[6]) {
      // Italic: *italic*
      nodes.push(
        <em key={matchIndex} className="italic text-gray-800">
          {match[7]}
        </em>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.substring(lastIndex));
  }

  return nodes;
}

function tokenize(raw: string): Token[] {
  const lines = raw.split("\n");
  const tokens: Token[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trimEnd();

    if (line === "") {
      tokens.push({ type: "blank" });
      i++;
      continue;
    }

    // Fenced code block ```
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimEnd().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      tokens.push({ type: "code", text: codeLines.join("\n"), lang });
      continue;
    }

    // Markdown Table | col 1 | col 2 |
    if (line.startsWith("|") && line.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trimEnd().startsWith("|") && lines[i].trimEnd().endsWith("|")) {
        tableLines.push(lines[i].trimEnd());
        i++;
      }

      if (tableLines.length >= 2) {
        const parseRow = (str: string) =>
          str
            .split("|")
            .slice(1, -1)
            .map((c) => c.trim());

        const headers = parseRow(tableLines[0]);
        // Filter out separator line |---|---|
        const bodyLines = tableLines.slice(1).filter((l) => !/^\|[\s-:]+\|/.test(l));
        const rows = bodyLines.map(parseRow);

        tokens.push({ type: "table", headers, rows });
        continue;
      }
    }

    if (line.startsWith("## ")) {
      tokens.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      tokens.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      tokens.push({ type: "blockquote", text: line.slice(2).trim() });
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trimEnd().startsWith("- ") || lines[i].trimEnd().startsWith("* "))
      ) {
        items.push(lines[i].trimEnd().slice(2).trim());
        i++;
      }
      tokens.push({ type: "ul", items });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trimEnd())) {
        items.push(lines[i].trimEnd().replace(/^\d+\.\s/, "").trim());
        i++;
      }
      tokens.push({ type: "ol", items });
      continue;
    }

    tokens.push({ type: "p", text: line });
    i++;
  }

  return tokens;
}

export default function BlogContent({ content }: { content: string }) {
  const tokens = tokenize(content.trim());

  return (
    <div className="prose-blog text-slate-700 space-y-6 text-base leading-relaxed">
      {tokens.map((token, idx) => {
        switch (token.type) {
          case "blank":
            return null;

          case "h2": {
            const id = token.text
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h2
                key={idx}
                id={id}
                className="scroll-mt-32 text-2xl md:text-3xl font-extrabold text-navy-900 mt-12 mb-5 pb-3 border-b-2 border-gold-200 flex items-center gap-3 tracking-tight"
              >
                <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-gold-400 to-gold-600 inline-block" />
                {token.text}
              </h2>
            );
          }

          case "h3": {
            const id = token.text
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h3
                key={idx}
                id={id}
                className="scroll-mt-32 text-xl font-bold text-navy-800 mt-8 mb-3 tracking-tight"
              >
                {token.text}
              </h3>
            );
          }

          case "blockquote": {
            const isNote = token.text.startsWith("Note:") || token.text.startsWith("Example:");
            return (
              <div
                key={idx}
                className={`my-8 p-5 md:p-6 rounded-2xl border ${
                  isNote
                    ? "bg-amber-50/80 border-amber-200/90 text-amber-900"
                    : "bg-navy-900 text-white border-navy-800 shadow-xl"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isNote ? "bg-amber-200 text-amber-800" : "bg-gold-500 text-navy-900"
                    }`}
                  >
                    {isNote ? <Info className="w-5 h-5" /> : <Quote className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 text-sm md:text-base leading-relaxed font-medium">
                    {parseInline(token.text)}
                  </div>
                </div>
              </div>
            );
          }

          case "table":
            return (
              <div key={idx} className="my-8 overflow-x-auto rounded-2xl border border-gray-200/80 shadow-lg bg-white">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy-900 text-gold-400">
                      {token.headers.map((h, i) => (
                        <th
                          key={i}
                          className="px-5 py-4 font-bold uppercase tracking-wider text-xs border-b border-navy-800"
                        >
                          {parseInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {token.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 0 ? "bg-white hover:bg-gold-50/20 transition-colors" : "bg-gray-50/50 hover:bg-gold-50/20 transition-colors"}
                      >
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-5 py-4 text-navy-800 font-medium whitespace-pre-line">
                            {parseInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "code":
            return (
              <div key={idx} className="my-6 rounded-2xl bg-navy-950 p-5 font-mono text-xs md:text-sm text-gold-300 overflow-x-auto border border-navy-800 shadow-xl">
                <pre>{token.text}</pre>
              </div>
            );

          case "ul":
            return (
              <ul key={idx} className="my-5 space-y-3 pl-1">
                {token.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-700 text-base">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed flex-1">{parseInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={idx} className="my-5 space-y-3 pl-1">
                {token.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3.5 text-slate-700 text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-800 text-gold-400 text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
                      {j + 1}
                    </span>
                    <span className="leading-relaxed flex-1">{parseInline(item)}</span>
                  </li>
                ))}
              </ol>
            );

          case "p":
            return (
              <p key={idx} className="text-slate-700 leading-[1.85] text-base md:text-lg mb-5 font-normal">
                {parseInline(token.text)}
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
