import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./src/tests",
  use: {
    trace: "on",
    baseURL: "http://localhost:3000/",
  },
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html", { outputFolder: "pw-report" }],
    ["json", { outputFolder: "pw-report", outputFile: "report.json" }],
  ],
};
export default config;
