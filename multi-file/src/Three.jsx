import { angular2react } from 'angular2react'
import { lazyInjector } from './lazyInjector'

let counter = 1

export let ThreeAngular = {
  bindings: {
    three: '<'
  },
  template: `
    <div>
      three: {{this.$ctrl.three}}
      instance counter: {{$ctrl.counter}}
      <four-angular four="this.$ctrl.three * 2"></four-angular>
    </div>
  `,
  controller: function () {
    this.counter = counter++
  }
}

export let Three = angular2react('threeAngular', ThreeAngular, lazyInjector.$injector)
