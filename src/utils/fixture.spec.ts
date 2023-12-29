import { faker } from "@faker-js/faker";
import { Fixture } from "./fixture";

describe("Fixture", () => {
  describe("object", () => {
    const defaultName = faker.person.fullName();
    const defaultAge = faker.number.int();

    const createFixture = Fixture.object<{ name: string; age: number }>({
      name: () => defaultName,
      age: () => defaultAge,
    });

    it("should generate fixture with default value", () => {
      expect(createFixture()).toEqual({
        name: defaultName,
        age: defaultAge,
      });
    });

    it("should generate fixture with overriden value", () => {
      const age = faker.number.int();

      expect(createFixture({ age })).toEqual({
        name: defaultName,
        age,
      });
    });
  });

  describe("array", () => {
    const defaultName = faker.person.fullName();
    const defaultAge = faker.number.int();

    const createFixture = Fixture.array<{ name: string; age: number }[]>({
      name: () => defaultName,
      age: () => defaultAge,
    });

    it("should generate fixtures with default values when array is passed with empty objects", () => {
      expect(createFixture([{}, {}, {}])).toEqual([
        { name: defaultName, age: defaultAge },
        { name: defaultName, age: defaultAge },
        { name: defaultName, age: defaultAge },
      ]);
    });

    it("should generate fixtures with default values when length is passed", () => {
      expect(createFixture(3)).toEqual([
        { name: defaultName, age: defaultAge },
        { name: defaultName, age: defaultAge },
        { name: defaultName, age: defaultAge },
      ]);
    });

    it("should generate fixtures with overriden values", () => {
      const name = faker.person.fullName();
      const age = faker.number.int();

      expect(createFixture([{}, { name }, { age }])).toEqual([
        { name: defaultName, age: defaultAge },
        { name, age: defaultAge },
        { name: defaultName, age },
      ]);
    });
  });
});
