import { useState } from "react";
import { CurrencyFilter } from "@features/currency/CurrencyFilter";
import { Currency, CurrencyFilterOption } from "@features/currency/currency.types";
import { SpendingCreatorForm } from "@features/spending/SpendingCreatorForm/SpendingCreatorForm";
import { SpendingList } from "@features/spending/SpendingList/SpendingList";
import { SpendingOrderSelector } from "@features/spending/SpendingOrderSelector";
import { SpendingOrderOption } from "@features/spending/spending.types";
import * as S from "./SpendingOverview.styles";

export function SpendingOverview() {
  const [order, setOrder] = useState<SpendingOrderOption>(SpendingOrderOption.SpentAtDesc);
  const [filter, setFilter] = useState<CurrencyFilterOption>(CurrencyFilterOption.ALL);

  return (
    <S.Container>
      <SpendingCreatorForm defaultCurrency={Currency.HUF} />
      <S.FilterSection>
        <SpendingOrderSelector value={order} onChange={setOrder} />
        <CurrencyFilter value={filter} onChange={setFilter} />
      </S.FilterSection>
      <SpendingList order={order} filter={filter} />
    </S.Container>
  );
}
