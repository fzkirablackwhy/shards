<template>
  <Card class="card">
    <template #title>
      {{ title }}
    </template>
    <template #content>
      <p>
        {{ description }}
      </p>
    </template>
  </Card>
</template>

<script lang="ts">
export default {
  name: 'CardComponent',
  props: {
    title: {
      title: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
@import '../scss/_colors.scss';
.p-card.card {
  margin: 20px 0;
  color: $turquoise;
  border-radius: 20px;
  border: 1px solid;
  background: $cardBackground;
  margin-bottom: 2em;
}
.p-card .p-card-body {
  font-size: 17px;
}
</style>
