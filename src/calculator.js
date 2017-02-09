function calculator (input) {
  if (input.male === undefined) input.male = true
  const minPounds = calcMinPounds(input.inches, input.male)
  const maxPounds = calcMaxPounds(input.inches, input.male)

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

function calcMinPounds (inches, male) {
  return male ? inches * 2.1 : inches * 1.9
}

function calcMaxPounds (inches, male) {
  return male ? inches * 2.4 : inches * 2.2
}

function toKg (pounds) {
  return pounds / 2.2046226218
}

function toStone (lbs) {
  let remaining = lbs
  const stone = Math.floor(lbs / 14)
  remaining -= (stone * 14)
  const pounds = Math.floor(remaining % 14)
  return {
    stone,
    pounds
  }
}

export default calculator
