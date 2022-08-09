import fetch from "../../../service/api";
import { getRituals } from "./useRituals";

jest.mock("../../../service/api");

describe("Rituals", () => {
  beforeEach(jest.resetAllMocks);

  it("should fetch rituals url", () => {
    getRituals("bud");

    expect(fetch).toBeCalledTimes(1);
  });

  it("should query for retrospectiva if the company is bud", () => {
    getRituals("bud");

    expect(fetch).toBeCalledWith("/rituals?search=retrospectiva");
  });

  it("should query for checkin if the company is other than bud", () => {
    getRituals("fabercastell");

    expect(fetch).toBeCalledWith("/rituals?search=check");
  });
});
