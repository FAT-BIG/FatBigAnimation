<template>
    <div class="home">
        <div class="list-content">
            <div class="list-item" v-for="(item,index) in ani" v-clipboard:copy="item">
                <div class="ani-card">
                    <animation :id="'ani' + index" :path="'./ani/' + item +'.json' "/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                ani: [
                    "loading-brochure",
                    "bookmark",
                    "loading-book",
                    "alert-setting",
                    "walkProcesses",
                    "image-loading",
                    "fingerScan",
                    "check",
                    "character",
                    "error-404",
                    "medal",
                    "gift",
                    "van",
                    "successfully-added",
                    "data-analysis",
                    "swimming-pool",
                    "red-success",
                    "yellow-success",
                    "blue-success",
                    "pink-success",
                    "green-success"
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>

    .home {
        width: 100%;
        padding: 0 24px;
        box-sizing: border-box;

        .list-content {
            width: 100%;
            padding: 24px 0;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .list-item {
                width: calc(100% / 4);
                padding: 24px;
                box-sizing: border-box;
                cursor: pointer;

                .ani-card {
                    display: flex;
                    justify-content: center;
                    background: rgba(255, 255, 255, 1);
                    border-radius: 0px;
                    border: 1px solid rgba(0, 0, 0, 0);
                    box-sizing: border-box;
                    //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .05);
                    transition: all ease .8s;

                    &:hover {
                        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .1);
                        border-radius: 12px;
                        //box-shadow: 2px 2px 40px rgba(0, 0, 0, .1);
                        border-color: rgba(255,0,0,.8);
                        background: rgba(255, 255, 255, .6);
                    }
                }

            }

        }

    }

</style>
