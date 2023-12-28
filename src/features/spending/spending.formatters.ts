export const SpendingDateFormatter = {
  format(date: Date): string {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return `${timeFormatter.format(date)} - ${dateFormatter.format(date)}`;
  },
} as const;
