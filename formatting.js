export function formatDate(dateString) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  
    if (dateString === today) {
      return "Today";
    } else {
      const dateParts = dateString.split('-');
      const reversedDate = dateParts.reverse().join('-');
      return reversedDate;
    }
}

export function timeTrimmed(timeString) {
    const trimmedTime = timeString.slice(0, -3);
    return trimmedTime
}

export function roundToWholeNumber(number) {
  if (number.toFixed(0) == -0) {
    return 0
  }
  return number.toFixed(0)
}

export function roundToOneDecimal(number) {
  return number.toFixed(1)
}