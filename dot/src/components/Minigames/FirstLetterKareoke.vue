<template>
  <div class="container">
    <div class="row lineRow" v-for="(line, i) in song" :key="i">
      <div class="letterElem" v-for="(lett, j) in line"
        :key="j"
        >
<LetterBox
        :playSound="true"
        :visible="true"
        colour="red"
        :showLetter="lett.show"
        :Letter="lett.letter"
      >
      </LetterBox>
      </div>
      
    </div>
  </div>
</template>

<script>
import LetterBox from "./_LetterBox";
export default {
  components: {
    LetterBox
  },
  data() {
    return {
      song: [
        [
          {
            letter: "a",
            show: false,
            delay: 2000
          },
          {
            letter: "b",
            show: false,
            delay: 4000
          },
          {
            letter: "c",
            show: false,
            delay: 6000
          }
        ],
        [
          {
            letter: "a",
            show: false,
            delay: 8000
          },
          {
            letter: "b",
            show: false,
            delay: 9000
          },
          {
            letter: "c",
            show: false,
            delay: 10000
          }
        ],
        [
          {
            letter: "a",
            show: false,
            delay: 11000
          },
          {
            letter: "b",
            show: false,
            delay: 12000
          }
        ],
        [
          {
            letter: "a",
            show: false,
            delay: 14000
          },
          {
            letter: "b",
            show: false,
            delay: 16000
          },
          {
            letter: "c",
            show: false,
            delay: 18000
          },
          {
            letter: "d",
            show: false,
            delay: 20000
          }
        ]
      ],
      counter: 1
    };
  },
  methods: {
    run() {
      this.song.forEach(e => {
        e.forEach(async (f) => {
          await this.sleep(f.delay)
          // console.log(sleepTime)
          console.log(f.letter)
          f.show = true
          this.counter += 1
          // setTimeout(function(){ f.show = true; }, 3000);
        })
      })
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  mounted() {
    this.run();
  }
};
</script>

<style scoped>
.lineRow {
  margin-top: 10px;
}
.letterElem {
  margin-right: 10px;
}
</style>
