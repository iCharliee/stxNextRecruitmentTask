import { test, expect } from '@playwright/test';

test('dolor column is properly sorted', async ({ page }) => {
    let homePage = 'https://the-internet.herokuapp.com/challenging_dom';
    await page.goto(homePage);
  
    const dolorValues = await page.$$eval('table tbody tr', rows => {
      return rows.map(row => {
        const cells = row.querySelectorAll('td');
        const value = cells[2]?.textContent?.trim() || '';
        return value;
      });
    });
    
    const sortedDolor = [...dolorValues].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  
    console.log(dolorValues);
    console.log(sortedDolor);
    expect(dolorValues).toEqual(sortedDolor);
});