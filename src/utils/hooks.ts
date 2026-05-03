import { useEffect, useState } from "react";

export function useLocalTime() {
  const [time, setTime] = useState<string>(() => formatTime(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function formatTime(d: Date) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  const offsetMinutes = -d.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const tz = `GMT${sign}${Math.abs(offsetMinutes) / 60}`;
  return `${hh}:${mm}:${ss} ${tz}`;
}
