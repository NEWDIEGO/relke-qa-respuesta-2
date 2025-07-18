import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.relbase.cl/ingresar');
  //1.- iniciar sesión
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).click();
  await page.getByRole('textbox', { name: 'Correo Electrónico' }).fill('qa_junior@relke.cl');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Demo123456!');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  //2.- menu principal y ventas
  await page.getByRole('link', { name: ' Ventas' }).click();
  //nota de ventas y nuevo
  await page.locator('.shadow > .box > .box-btn > .table-actions-toolbar > .btn-group > a').first().click();
  //3.- ingresar los datos
  await page.getByTitle('Casa matriz').click();
  await page.getByRole('treeitem', { name: 'Casa matriz' }).click();
  await page.locator('#select2-sales_note_ware_house_id-container').click();
  await page.getByRole('treeitem', { name: 'Bodega principal' }).click();
  await page.locator('#select2-sales_note_customer_id-container').click();
  await page.locator('input[type="search"]').fill('test');
  await page.locator('input[type="search"]').press('ArrowDown');
  await page.locator('input[type="search"]').press('ArrowUp');
  await page.locator('input[type="search"]').press('Enter');
  await page.locator('#select2-sales_note_type_document_sii-container').click();
  await page.getByRole('treeitem', { name: 'BOLETA ELECTRÓNICA' }).click();
  await page.locator('#sales_note_contact').click();
  await page.locator('#sales_note_contact').fill('');
  await page.locator('#sales_note_contact').press('CapsLock');
  await page.locator('#sales_note_contact').fill('A');
  await page.locator('#sales_note_contact').press('CapsLock');
  await page.locator('#sales_note_contact').fill('Almagro #2334');
  await page.locator('#sales_note_delivery_time').click();
  await page.locator('#sales_note_delivery_time').press('ArrowDown');
  await page.locator('#sales_note_delivery_time').press('ArrowUp');
  await page.locator('#sales_note_delivery_time').fill('20-07-2025');
  await page.locator('#sales_note_delivery_time').press('Enter');
  await page.locator('#select2-sales_note_channel_id-container').click();
  await page.getByRole('treeitem', { name: 'Web' }).click();
  await page.locator('.input-group-addon > .fa').first().click();
  await page.getByRole('cell', { name: '18' }).click();
  await page.locator('div:nth-child(5) > .col-md-4 > .input-group > .input-group-addon').click();
  await page.getByRole('cell', { name: '20', exact: true }).click();
  await page.locator('#select2-sales_note_type_payment_id-container').click();
  await page.getByRole('treeitem', { name: 'Efectivo' }).click();
  await page.getByTitle('Pesos').click();
  await page.getByRole('treeitem', { name: 'Pesos' }).click();
  await page.locator('#sales_note_label_value').click();
  await page.locator('#sales_note_label_value').fill('9586749');
  await page.locator('#sales_note_label_value').press('Enter');
  await page.getByTitle('Base').click();
  await page.getByRole('treeitem', { name: '[- 15%] Mayorista' }).click();
  await page.locator('#select2-sales_note_e_document_products_attributes_0_product_id-container').click();
  await page.locator('input[type="search"]').fill('mouse');
  await page.getByRole('treeitem', { name: '[MO3321] Mouse MS-117C Óptico' }).click();
  await page.locator('#sales_note_e_document_products_attributes_0_quantity').click();
  await page.locator('#sales_note_e_document_products_attributes_0_quantity').fill('1');
  await page.locator('#sales_note_e_document_products_attributes_0_discount').click();
  await page.getByRole('textbox', { name: 'Ej: Datos de transferencia. (' }).click();
  await page.getByRole('textbox', { name: 'Ej: Datos de transferencia. (' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Datos de transferencia. (' }).fill('El producto viene con cargador tipo C');
  await page.getByRole('textbox', { name: 'Ej: Datos de transferencia. (' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Observaciones y/o comentarios' }).click();
  await page.getByRole('textbox', { name: 'Observaciones y/o comentarios' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Observaciones y/o comentarios' }).fill('El pedido se debe entregar antes o en el día de la entrega.');
  await page.locator('#sales_note_e_document_products_attributes_0_discount').click();
  await page.locator('#sales_note_e_document_products_attributes_0_discount').fill('10');
  await page.locator('#sales_note_e_document_products_attributes_0_surcharge').click();
  await page.locator('#sales_note_e_document_products_attributes_0_surcharge').fill('300');
  await page.locator('td:nth-child(6)').click();
  await page.locator('#new_edocument_form div').filter({ hasText: 'Producto * Descripción' }).nth(1).click();
  await page.locator('#sales_note_global_discount').click();
  await page.locator('#sales_note_global_discount').fill('1');
  await page.locator('#new_edocument_form div').filter({ hasText: 'Subtotal $ 3.932 Descuento' }).nth(2).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //4.- enviar y descargar
  await page.getByRole('button', { name: ' Enviar' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: ' Descargar PDF' }).click();
  const download = await downloadPromise;
});