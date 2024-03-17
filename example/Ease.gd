class_name Ease


static func sine(t: float, strength: float) -> float:
	var eased: float = sin((t - 0.5) * PI) / 2 + 0.5
	return mix(eased, t, strength)


static func cubic(t: float, strength: float) -> float:
	var eased: float = t * t * (3 - 2 * t)
	return mix(eased, t, strength)


static func mix(a: float, b: float, amountOfA: float) -> float:
	return b + (a - b) * amountOfA