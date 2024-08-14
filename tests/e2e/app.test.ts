import { test, expect } from "@playwright/test"

const vitePort = "5173"

test.beforeEach(async ({ page }) => {
  await page.goto(`http://localhost:${vitePort}/`)
})

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/Daily Boost Calendar/)
})
