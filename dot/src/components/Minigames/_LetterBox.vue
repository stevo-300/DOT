<template>
  <div ref="lb" class="LetterBox">{{ Letter }}</div>
</template>

<script>
export default {
  name: "_LetterBox",
  props: {
    Letter: String,
    visible: Boolean,
    playSound: Boolean,
    colour: String,
    showLetter: Boolean
  },
  data() {
    return {
      show: true,
      bigL: '',
      divElem: '',

    };
  },
  methods: {
    toggle() {
      if (this.playSound) {
        this.$refs.lb.style.color = 'black'
        this.playChime();
      }
    },
    playChime() {
      console.log("chirp");
    },
    isVisible() {
      if (this.visible) {
        this.$refs.lb.classList.add('Visible')
        this.$refs.lb.classList.remove('Hidden')
      } else {
        this.$refs.lb.classList.remove('Visible')
        this.$refs.lb.classList.add('Hidden')
      }
    }
  },
  mounted() {
    this.isVisible();
    if (this.showLetter) {
      this.bigL = this.Letter
    }
  },
  watch: {
    showLetter: function(n, o) {
      if (n) {
        this.toggle()
        console.log(`${this.Letter} - ${n} - ${o}`)
      }
    },
    visible: function(n, o) {
      this.isVisible()
    }
  }
};
</script>

<style scoped>
div.LetterBox {
  font-weight: bold;
  padding: 5px 10px;
  font-size: 2em;
  color: white;
}
div.LetterBox.Visible {
  border: 3px red solid;
}
div.LetterBox.Hidden {
  border: 0px;
}
</style>
