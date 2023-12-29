export const Fixture = {
  object<T extends NonArrayObject>(generatorMap: PropertyGeneratorMap<T>) {
    return (value: Partial<T> = {}) => ({
      ...(Object.fromEntries(Object.keys(generatorMap).map((key) => [key, generatorMap[key]()])) as T),
      ...(value as T),
    });
  },
  array<T extends NonArrayObject[]>(generatorMap: PropertyGeneratorMap<T[number]>) {
    return (values: number | Partial<T[number]>[]) => {
      if (typeof values === "number") {
        values = Array.from({ length: values }, () => ({}));
      }

      return values.map(this.object(generatorMap)) as T;
    };
  },
} as const;
