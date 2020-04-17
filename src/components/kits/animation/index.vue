<template>
    <div :id="id" :style="{width:width + 'px',height:height + 'px',background:background}"
         @click="toggleAni"></div>
</template>

<script>
    import * as lottie from 'lottie-web'

    export default {
        props: {
            id: {
                type: String,
                default: "demo"
            },
            path: {
                type: String,
                default: "./ani/character.json"
            },
            height: {
                type: Number,
                default: 200
            },
            width: {
                type: Number,
                default: 200
            },
            renderer: {
                type: String,
                default: 'svg'
            },
            background: {
                type: String,
                default: 'transparent'
            },
            AniOption: {
                type: Object,
                default: () => {
                    return {}
                }
            }


        },
        data() {
            return {
                isPlay: true,
                speed: 1
            }
        },
        mounted() {
            this.init()
            lottie.setDirection(1);
        },
        methods: {
            init() {
                let cv = document.getElementById(this.id)
                lottie.loadAnimation({
                    container: cv, // the dom element that will contain the animation
                    renderer: this.renderer,
                    loop: true,
                    autoplay: true,
                    path: this.path, // the path to the animation json
                })
            },
            toggleAni() {
                if (!this.isPlay) {
                    lottie.play()
                    this.isPlay = true
                } else {
                    lottie.pause()
                    this.isPlay = false
                }
            },
            toggleSpeed() {
                if (this.speed == 1) {
                    lottie.setSpeed(2)
                    this.speed = 2
                } else {
                    lottie.setSpeed(1)
                    this.speed = 1
                }
            }

        }
    }
</script>
<style scoped lang="scss">
    #demo {
        width: 240px;
        height: 240px;
        margin: 24px auto;
    }
</style>
