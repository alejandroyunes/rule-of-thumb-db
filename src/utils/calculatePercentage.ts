export const calculatePercentage = (value: number, total: number) => {
  return total !== 0 ? ((value / total) * 100).toFixed(1) : '0.0'
}