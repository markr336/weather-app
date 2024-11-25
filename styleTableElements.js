export function iconResizing(weatherCell, icon) {
  if (icon == 'clear-night' || icon == 'clear-day') {
    weatherCell.classList.add('shrink')
}
}

export function precipStyle(precipCell, precipprob) {
    if (precipprob > 29) {
        precipCell.setAttribute('style', 'color: blue')
      }
      if (precipprob > 80) {
        precipCell.setAttribute('style', 'color: blue; text-decoration: underline')
      }
      if (precipprob > 95) {
        precipCell.setAttribute('style', 'color: blue; text-decoration: underline; font-weight: bold')
      }
}