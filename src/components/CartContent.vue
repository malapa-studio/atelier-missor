<template>
  <table class="text-left border border-blue-500 w-full table-auto">
    <thead>
      <tr>
        <th>Produit</th>
        <th>Prix</th>
        <th>Quantité</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-4">Buste de Marc Aurèle</td>
        <td>€480.00 EUR</td>
        <td>
          <input
            type="number"
            placeholder="..."
            class="input w-1/2 bg-black border border-missor-primary focus:border focus:border-missor-primary"
            min="1"
            value="1"
          />
        </td>
        <td>€480.00 EUR</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
</template>
