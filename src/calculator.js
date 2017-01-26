function calculator (input = {inches: 70}) {
  const minPounds = calcMinPounds(input.inches)
  const maxPounds = calcMaxPounds(input.inches)

  return {
    height: toFeet(input.inches),
    minPounds,
    maxPounds,
    minKg: toKg(minPounds),
    maxKg: toKg(maxPounds),
    minStone: toStone(minPounds),
    maxStone: toStone(maxPounds)
  }
}

function toFeet (inches) {
  const feet = Math.floor(inches / 12)
  const inch = inches % 12
  return `${feet} Foot ${inch} Inches`
}

function calcMinPounds (inches) {
  return inches * 2.1
}

function calcMaxPounds (inches) {
  return inches * 2.4
}

function toKg (pounds) {
  return pounds / 2.2046226218
}

function toStone (pounds) {
  let remaining = pounds
  const stone = Math.floor(pounds / 14)
  remaining -= (stone * 14)
  const ounces = Math.floor(remaining % 14)
  return `${stone} stone, ${ounces} lbs`
}

export default calculator
