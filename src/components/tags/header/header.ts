/**
 * Header
 * @author Perlou <perloukevin@gmail.com>
 * @date 2017-07-31 17:59:56
 * @since 2.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './header.vue'

@Component({
    name: 'tags-header',
    mixins: [template]
})
export default class Header extends Vue {

}
