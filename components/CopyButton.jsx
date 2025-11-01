"use client";
import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <button className="btn" onClick={onCopy} aria-label={label} title={label}>
      {copied ? "Copied" : label}
    </button>
  );
}
