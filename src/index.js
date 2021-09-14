import './assets/scss/main.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap'
import hljs from 'highlight.js'
import 'selectric'
import 'bootstrap-datepicker'
import '../static/js/common.js'
if (process.env.NODE_ENV === 'development') {
  import(/* webpackChunkName: "development-only" */ 'highlight.js/scss/atelier-estuary-light.scss')
  import(/* webpackChunkName: "development-only" */ './assets/scss/development.scss')
}

document.addEventListener('DOMContentLoaded', function () {
  // Handler when the DOM is fully loaded
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
  })

  $('.tpi-selectric').find('select').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  })

  $('#datepicker-demo-1').datepicker({
    language: 'zh-TW',
    format: 'yyyy/mm/dd',
    clearBtn: true,
    orientation: 'bottom auto',
    autoclose: true
  })
})
