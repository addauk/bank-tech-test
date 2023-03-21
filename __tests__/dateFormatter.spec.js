// file dateFormatter.spec.js

const { beforeEach } = require("node:test");
const DateFormatter = require("../dateFormatter");

let dateSpy;

beforeAll(() => {
  dateSpy = jest
    .spyOn(global.Date, "now")
    .mockImplementation(() => new Date("January 1,1999"));
});

afterAll(() => {
  dateSpy.mockRestore();
});

describe("DateFormatter class", () => {
  it("returns todays date in the format dd/mm/yyyy", () => {
    expect(DateFormatter.europeanToday()).toEqual("01/01/1999");
  });
});
