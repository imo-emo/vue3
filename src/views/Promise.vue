<template>
    <div>
        {{name}}
        <back />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import back from '../components/back.vue';

@Component({
    components: {
        back,
    },
})

class Promises extends Vue {
    @Provide() public name = 'substring';
    private mounted(): void {
        this.name = this.name.split('').reverse().join('');
        // new Promise ((resolve, reject) => {
        //     console.log('1');
        //     reject('error');
        // }).then(() => {
        //     console.log('2');
        // }).then(() => {
        //     console.log('3');
        // }).catch((response) => {
        //     console.log(response);
        // }).then(() => {
        //     console.log(4);
        // })
        this.testResult();
    }
    private doubleAfter2Seconds = (num: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2 * num);
            }, 2000);
        });
    }
    private testResult = async () => {
        const result1 = await this.doubleAfter2Seconds(20);
        const result2 = await this.doubleAfter2Seconds(30);
        const result3 = await this.doubleAfter2Seconds(40);
        // console.log(Number(result1) + Number(result2) + Number(result3));
    }
}

export default Promises;
</script>