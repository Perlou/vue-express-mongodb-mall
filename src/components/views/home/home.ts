/**
 * home view
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import { State, Mutation, Getter, Action} from 'vuex-class'
import template from './home.vue'

@Component({
    name: 'view-home',
    mixins: [template],
    components: {}
})
export default class Home extends Vue {
    async created () {
        let res = await this.api.getProducts()
        console.log(res)
    }

    async getData () {
        
    }
}

