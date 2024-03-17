
/**
 * RandomNumberGenerator is a class for generating pseudo-random numbers. It currently uses [url=https://www.pcg-random.org/]PCG32[/url].
 *
 * **Note:** The underlying algorithm is an implementation detail and should not be depended upon.
 *
 * To generate a random float number (within a given range) based on a time-dependant seed:
 *
 * @example 
 * 
 * var rng = RandomNumberGenerator.new()
 * func _ready():
 *     var my_random_number = rng.randf_range(-10.0, 10.0)
 * @summary 
 * 
 *
*/
declare class RandomNumberGenerator extends RefCounted  {

  
/**
 * RandomNumberGenerator is a class for generating pseudo-random numbers. It currently uses [url=https://www.pcg-random.org/]PCG32[/url].
 *
 * **Note:** The underlying algorithm is an implementation detail and should not be depended upon.
 *
 * To generate a random float number (within a given range) based on a time-dependant seed:
 *
 * @example 
 * 
 * var rng = RandomNumberGenerator.new()
 * func _ready():
 *     var my_random_number = rng.randf_range(-10.0, 10.0)
 * @summary 
 * 
 *
*/
  new(): RandomNumberGenerator; 
  static "new"(): RandomNumberGenerator 


/**
 * Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.
 *
 * **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.
 *
 * **Note:** Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed **before** modifying the [member state]:
 *
 * **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.
 *
 * @example 
 * 
 * var rng = RandomNumberGenerator.new()
 * rng.seed = hash("Godot")
 * rng.state = 100 # Restore to some previously saved state.
 * @summary 
 * 
 *
*/
seed: int;

/**
 * The current state of the random number generator. Save and restore this property to restore the generator to a previous state:
 *
 * @example 
 * 
 * var rng = RandomNumberGenerator.new()
 * print(rng.randf())
 * var saved_state = rng.state # Store current state.
 * print(rng.randf()) # Advance internal state.
 * rng.state = saved_state # Restore the state.
 * print(rng.randf()) # Prints the same value as in previous.
 * @summary 
 * 
 *
 * **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [member seed] instead.
 *
 * **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.
 *
*/
state: int;

/** Returns a pseudo-random float between [code]0.0[/code] and [code]1.0[/code] (inclusive). */
randf(): float;

/** Returns a pseudo-random float between [param from] and [param to] (inclusive). */
randf_range(): float;

/** Returns a [url=https://en.wikipedia.org/wiki/Normal_distribution]normally-distributed[/url] pseudo-random number, using Box-Muller transform with the specified [param mean] and a standard [param deviation]. This is also called Gaussian distribution. */
randfn(): float;

/** Returns a pseudo-random 32-bit unsigned integer between [code]0[/code] and [code]4294967295[/code] (inclusive). */
randi(): int;

/** Returns a pseudo-random 32-bit signed integer between [param from] and [param to] (inclusive). */
randi_range(): int;

/** Sets up a time-based seed for this [RandomNumberGenerator] instance. Unlike the [@GlobalScope] random number generation functions, different [RandomNumberGenerator] instances can use different seeds. */
randomize(): void;

  connect<T extends SignalsOf<RandomNumberGenerator>>(signal: T, method: SignalFunction<RandomNumberGenerator[T]>): number;






}

