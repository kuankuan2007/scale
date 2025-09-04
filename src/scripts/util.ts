export function calcTimeDiff(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}
export function formatTimeDiff(ms: number) {
  const res = calcTimeDiff(ms);
  if (res.hours) return `${res.hours}小时 ${res.minutes}分 ${res.seconds}秒`;
  if (res.minutes) return `${res.minutes}分 ${res.seconds}秒`;
  return `${res.seconds}秒`;
}
