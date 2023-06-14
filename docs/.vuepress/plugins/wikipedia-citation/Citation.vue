<template>
  <div class="citation">
    Wikipedia contributors,
    "{{ title }}"
    <i>Wikipedia</i>,
    <a
      target="_blank"
      v-bind:href="link">
      {{ link }}
    </a>
    (accessed {{ access }}).
  </div>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    }
  },

  computed: {
    link () {
      const url = `https://${this.language}.wikipedia.org/w/index.php`;
      const paramTitle = `title=${encodeURIComponent(this.title)}`;
      const paramOldid = `oldid=${this.version}`;

      return `${url}?${paramTitle}&${paramOldid}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.citation
  font-size 90%
  word-break break-all
</style>
