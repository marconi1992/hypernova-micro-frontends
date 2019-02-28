<template>
  <div class="k-product-list">
    <h2 class="k-product-list__header">{{title}}</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx" class="k-product-item" @click="select(item)">
        <img :src="item.imageUrl" class="k-product-item__image">
        <h4 class="k-product-item__title">{{ item.title }}</h4>
      </li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addItem() {
      this.items.push({ title: `Product ${this.items.length + 1}`, imageUrl: 'https://via.placeholder.com/400' })
    },
    select(item) {
      const event = new CustomEvent('itemSelected', { detail: item });
      document.dispatchEvent(event)
    }
  }
}
</script>
