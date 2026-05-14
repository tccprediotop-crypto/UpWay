import { describe, expect, it } from "vitest";

import { buildPickupCode, summarizePackages } from "@/lib/packages";
import { normalizePickupCode } from "@/lib/pickup-code";

describe("buildPickupCode", () => {
  it("normaliza o nome do morador e compacta o código", () => {
    expect(buildPickupCode("UPW-8919", "Ana Costa")).toBe("UPWAY-ANA-UPW8919");
    expect(buildPickupCode("abc-123", "João Silva")).toBe("UPWAY-JOAO-ABC123");
  });
});

describe("summarizePackages", () => {
  it("resume totais, retiradas, atrasos e tokens ativos", () => {
    const summary = summarizePackages([
      {
        status: "NOTIFIED",
        dueAt: new Date(Date.now() + 60_000)
      },
      {
        status: "TOKEN_GENERATED",
        dueAt: new Date(Date.now() + 60_000)
      },
      {
        status: "PICKED_UP",
        dueAt: new Date(Date.now() - 60_000)
      },
      {
        status: "NOTIFIED",
        dueAt: new Date(Date.now() - 60_000)
      }
    ]);

    expect(summary).toEqual({
      total: 4,
      pending: 3,
      pickedUp: 1,
      overdue: 1,
      notified: 2,
      readyWithToken: 1
    });
  });
});

describe("normalizePickupCode", () => {
  it("aceita token puro, deep link e URL http", () => {
    expect(normalizePickupCode("upway://pickup/upway-ana-8919")).toBe("UPWAY-ANA-8919");
    expect(normalizePickupCode("https://upway.app/pickup/upway-joao-8920")).toBe("UPWAY-JOAO-8920");
    expect(normalizePickupCode("upway-carlos-8918")).toBe("UPWAY-CARLOS-8918");
  });
});
