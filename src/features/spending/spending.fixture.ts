import { faker } from "@faker-js/faker";
import { Currency } from "@features/currency/currency.types";
import { Fixture } from "@utils/fixture";
import { Spending } from "./spending.types";

export const SpendingFixture = {
  createSpendings: Fixture.array<Spending[]>({
    id: faker.number.int,
    description: faker.commerce.product,
    amount: () => faker.number.int({ min: 1, max: 1_000_000 }),
    currency: () => Currency.HUF,
    spent_at: () => faker.date.past().toISOString(),
  }),
} as const;
