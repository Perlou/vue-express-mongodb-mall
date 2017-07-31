/**
 * 所有组件的基类
 * @author Perlou(perloukevin@gmail.com)
 */

import Vue from 'vue'
import api from 'api'

export default class Base extends Vue {
    readonly api = api
}
