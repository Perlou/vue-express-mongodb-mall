/**
 * LoginWin
 * @author Perlou <perloukevin@gmail.com>
 * @date 2017-08-01 16:45:00
 * @since 2.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './loginWin.vue'

@Component({
    name: 'tag-wins-loginwin',
    mixins: [template]
})
export default class LoginWin extends Vue {
    /**
     * data
     */
    isShow = false
    done = () => {}

    created () {
        this.$parent.$on('login-win', (done = Function) => {
            this.isShow = true
            this.done = done
        })
    }
}
