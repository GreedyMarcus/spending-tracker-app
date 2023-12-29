import axios from "axios";
import { envConfig } from "@configs/env.config";
import { Currency } from "@features/currency/currency.types";
import { CreateSpendingData, Spending, SpendingOrderOption } from "./spending.types";

const api = axios.create({ baseURL: `${envConfig.backendApiBaseUrl}/spendings` });

export async function getSpendings(order: SpendingOrderOption, currency?: Currency): Promise<Spending[]> {
  const response = await api.get<Spending[]>("/", { params: { order, currency } });
  return response.data;
}

export async function createSpending(data: CreateSpendingData): Promise<Spending> {
  const response = await api.post<Spending>("/", data);
  return response.data;
}
