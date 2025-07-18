# Desafío QA - Relke

Este repositorio contiene la solución al desafío técnico de automatización con Playwright para el proceso de selección de QA Engineer Junior en Relke.

## ✅ Flujo automatizado

1. Inicio de sesión
2. Navegación al módulo de Notas de Venta
3. Creación de una nota de venta completa con:
   - Cliente
   - Producto
   - Cantidad
   - Descuento
   - Recargo
   - Observaciones
4. Envío del formulario
5. Validación del total mayor a $0
6. Descarga del PDF generado

## 🚀 Cómo ejecutar

```bash
npx playwright test tests/crear-nota-de-venta.spec.js