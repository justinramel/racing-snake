import calculator from '../calculator'

describe('height calculator', () => {
  it('calculates 70 inches in foot and inches', () => {
    const result = calculator({inches: 70})
    expect(result.height).toEqual('5 Foot 10 Inches')
  })
  it('calculates 71 inches in foot and inches', () => {
    const result = calculator({inches: 71})
    expect(result.height).toEqual('5 Foot 11 Inches')
  })
  it('calculates 74 inches in foot and inches', () => {
    const result = calculator({inches: 74})
    expect(result.height).toEqual('6 Foot 2 Inches')
  })
})

describe('male min pounds calculator', () => {
  it('calculates for 70 inches', () => {
    const result = calculator({inches: 70})
    expect(result.minPounds).toEqual(147)
  })
  it('calculates for 71 inches', () => {
    const result = calculator({inches: 71})
    expect(result.minPounds).toEqual(149.1)
  })
  it('calculates for 74 inches', () => {
    const result = calculator({inches: 74})
    expect(result.minPounds).toEqual(155.4)
  })
})

describe('female min pounds calculator', () => {
  it('calculates for 65 inches', () => {
    const result = calculator({inches: 65, male: false})
    expect(result.minPounds).toEqual(123.5)
  })
})

describe('male max pounds calculator', () => {
  it('calculates for 70 inches', () => {
    const result = calculator({inches: 70})
    expect(result.maxPounds).toEqual(168)
  })
  it('calculates for 71 inches', () => {
    const result = calculator({inches: 71})
    expect(result.maxPounds).toEqual(170.4)
  })
  it('calculates for 74 inches', () => {
    const result = calculator({inches: 74})
    expect(result.maxPounds).toEqual(177.6)
  })
})

describe('female max pounds calculator', () => {
  it('calculates for 65 inches', () => {
    const result = calculator({inches: 65, male: false})
    expect(result.maxPounds).toEqual(143)
  })
})


describe('min kg calculator', () => {
  it('calculates for 70 inches', () => {
    const result = calculator({inches: 70})
    expect(result.minKg).toEqual(66.67807839147521)
  })
  it('calculates for 71 inches', () => {
    const result = calculator({inches: 71})
    expect(result.minKg).toEqual(67.63062236849628)
  })
  it('calculates for 74 inches', () => {
    const result = calculator({inches: 74})
    expect(result.minKg).toEqual(70.48825429955951)
  })
})

describe('max kg calculator', () => {
  it('calculates for 70 inches', () => {
    const result = calculator({inches: 70})
    expect(result.maxKg).toEqual(76.20351816168595)
  })
  it('calculates for 71 inches', () => {
    const result = calculator({inches: 71})
    expect(result.maxKg).toEqual(77.29213984971004)
  })
  it('calculates for 74 inches', () => {
    const result = calculator({inches: 74})
    expect(result.maxKg).toEqual(80.55800491378228)
  })
})

describe('min stone calculator', () => {
  it('calculates for 70 inches', () => {
    const result = calculator({inches: 70})
    expect(result.minStone).toEqual({stone: 10, pounds: 7})
  })
  it('calculates for 71 inches', () => {
    const result = calculator({inches: 71})
    expect(result.minStone).toEqual({stone: 10, pounds: 9})
  })
  it('calculates for 74 inches', () => {
    const result = calculator({inches: 74})
    expect(result.minStone).toEqual({stone: 11, pounds: 1})
  })
})

describe('max stone calculator', () => {
  it('calculates for 70 inches', () => {
    const result = calculator({inches: 70})
    expect(result.maxStone).toEqual({stone: 12, pounds: 0})
  })
  it('calculates for 71 inches', () => {
    const result = calculator({inches: 71})
    expect(result.maxStone).toEqual({stone: 12, pounds: 2})
  })
  it('calculates for 74 inches', () => {
    const result = calculator({inches: 74})
    expect(result.maxStone).toEqual({stone: 12, pounds: 9})
  })
})
