<template>
    <div class="flex h-screen">
      <div class="w-full h-full m-auto">
        <qrcode-stream @decode="onDecode" :track="drawOutline"></qrcode-stream>
    </div>
    <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import {QrcodeStream} from 'vue3-qrcode-reader'
    export default {
        components:{
            QrcodeStream,
            Footer

        },
        methods:{
            decode(decodeString){
                console.log(decodeString)
            },
            drawOutline(decodeData, context){
                // console.log(decodeData)
                // console.log(context)
            var points =[]
            for(var k in decodeData){
                switch(k){
                    case "topLeftCorner":
                        points[0] = decodeData[k]
                        break;
                    case "topRightCorner":
                        points[1] = decodeData[k]
                        break;
                    case "bottomRightCorner":
                        points[2] = decodeData[k]
                        break;
                    case "bottomLeftCorner":
                        points[3] = decodeData[k]
                        break;
                    default:
                        break;

                }
                

            }
            context.lineWidth = 10
            context.strokeStyle = '#781E2A'
                context.beginPath()
                context.moveTo(points[0].x, points[0].y)

                for(const {x, y} of points){
                    context.lineTo(x,y)
                }
                context.lineTo(points[0].x, points[0].y)
                context.closePath()
                context.stroke()
            console.log(points)
                // console.log(context)
            this.$router.push('/QRcodeResult')
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>