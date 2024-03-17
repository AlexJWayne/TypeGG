export class Ease {
  static sine(t: float, strength: float = 1): float {
    const eased = sin((t - 0.5) * PI) / 2 + 0.5
    return this.mix(eased, t, strength)
  }

  static cubic(t: float, strength: float = 1): float {
    const eased = t * t * (3 - 2 * t)
    return this.mix(eased, t, strength)
  }

  private static mix(a: float, b: float, amountOfA: float): float {
    return b + (a - b) * amountOfA
  }
}
