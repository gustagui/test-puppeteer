const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php');
  await page.type('#endereco', '08485460');
  await page.click('#btn_pesquisar');
  await page.waitForTimeout(3000);
  const result = await page.evaluate(() => {
    return document.querySelector('tbody').innerText;
  });

  console.log(result)

  await browser.close();
})();