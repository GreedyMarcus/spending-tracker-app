declare global {
  /**
   * Defines a stricter type for objects by excluding arrays.
   */
  type NonArrayObject = Record<string, unknown>;

  /**
   * Defines a mapping from properties of type T to corresponding generator functions,
   * ensuring the generated values maintain the original type structure.
   */
  type PropertyGeneratorMap<T> = {
    [P in keyof T]: () => T[P];
  };
}

export {};
