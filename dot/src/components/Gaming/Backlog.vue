<template>
  <div class="gamingHome">
    <span class="Title">Gaming Backlog</span>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Title: "Harry Potter Lego Years 1-4",
          Started: "Yes",
          PlatinumCandidate: "Yes",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Harry Potter Lego Years 5-7",
          Started: "No",
          PlatinumCandidate: "Yes",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Star Wars: Falle Order",
          Started: "Yes",
          PlatinumCandidate: "Yes",
          Completed: false,
          Platinum: false
        },
        {
          Title: "God of War",
          Started: "Yes",
          PlatinumCandidate: "Yes",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Ni No Kuni 2",
          Started: "No",
          PlatinumCandidate: "Yes",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Final Fantasy 8",
          Started: "Yes",
          PlatinumCandidate: "Yes",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Sekiro",
          Started: "No",
          PlatinumCandidate: "No",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Nioh 2",
          Started: "No",
          PlatinumCandidate: "No",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Last of Us",
          Started: "No",
          PlatinumCandidate: "No",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Last of Us 2",
          Started: "No",
          PlatinumCandidate: "No",
          Completed: false,
          Platinum: false
        },
        {
          Title: "Titanfall 2",
          Started: "No",
          PlatinumCandidate: "No",
          Completed: false,
          Platinum: false
        }
      ]
    };
  }
};
</script>

<style>
</style>
