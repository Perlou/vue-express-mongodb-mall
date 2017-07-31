/**
 * Footer
 * @author Perlou <perloukevin@gmail.com>
 * @date 2017-07-31 18:08:16
 * @since 2.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './footer.vue'

@Component({
    name: 'tags-footer',
    mixins: [template]
})
export default class Footer extends Vue {

}
