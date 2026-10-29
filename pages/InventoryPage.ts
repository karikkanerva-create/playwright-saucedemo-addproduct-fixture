import { expect, type Locator, type Page } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';

export class InventoryPage {
  readonly header: HeaderComponent;
  readonly inventoryItems: Locator;

  constructor(private readonly page: Page) {
    this.header = new HeaderComponent(page);
    this.inventoryItems = page.getByTestId('inventory-item');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.inventoryItems.first()).toBeVisible();
}

  async addProductToCart(name: string): Promise<void> {
    const product = this.page.locator('.inventory_item').filter({ hasText: name });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeProductFromCart(name: string): Promise<void> {
    const product = this.page.locator('.inventory_item').filter({ hasText: name });
    await product.getByRole('button', { name: 'Remove' }).click();
  }
}
