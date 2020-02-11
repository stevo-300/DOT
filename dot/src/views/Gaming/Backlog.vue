<template>
    <div class="gamingHome container">
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
                    Title: 'Harry Potter Lego Years 1-4',
                    Started: 'Yes',
                    Platinum: 'Yes'                    
                },
                {
                    Title: 'Harry Potter Lego Years 5-7',
                    Started: 'No',
                    Platinum: 'Yes'                    
                },
                {
                    Title: 'Star Wars: Falle Order',
                    Started: 'Yes',
                    Platinum: 'Yes'                    
                },
                {
                    Title: 'God of War',
                    Started: 'Yes',
                    Platinum: 'Yes'                    
                },
                {
                    Title: 'Ni No Kuni 2',
                    Started: 'No',
                    Platinum: 'Yes'                    
                },
                {
                    Title: 'Final Fantasy 8',
                    Started: 'Yes',
                    Platinum: 'Yes'                    
                }
            ]
        }
    }

}
</script>

<style>

</style>
