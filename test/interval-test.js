/* global describe it */
'use strict'

var assert = require('assert')
var tnl = require('../')
var map = tnl.map

describe('intervals', function () {
  describe('simplify', function () {
    it('simplifies intervals', function () {
      var simples = map(tnl.simplify)
      assert.deepEqual(simples('1P 2M 3M 4P 5P 6M 7M'),
        [ '1P', '2M', '3M', '4P', '5P', '6M', '7M' ])
      assert.deepEqual(simples('8A 9A 10A 11A 12A 13A 14A'),
        [ '1A', '2A', '3A', '4A', '5A', '6A', '7A' ])
      assert.deepEqual(simples('15d 16m 17m 18d 19d 20m 21m'),
        [ '1d', '2m', '3m', '4d', '5d', '6m', '7m' ])
      assert.deepEqual(simples('-15d -16m -17m -18d -19d -20m -21m'),
        [ '-1d', '-2m', '-3m', '-4d', '-5d', '-6m', '-7m' ])
    })
  })
  describe('simple', function () {
    it('get simple from interval', function () {
      var simples = map(tnl.simpleNum)
      assert.deepEqual(simples('1P 2M 3M 4P 5P 6M 7M'),
      [ 1, 2, 3, 4, 5, 6, 7 ])
      assert.deepEqual(simples('8A 9A 10A 11A 12A 13A 14A'),
      [ 1, 2, 3, 4, 5, 6, 7 ])
      assert.deepEqual(simples('15d 16m 17m 18d 19d 20m 21m'),
      [ 1, 2, 3, 4, 5, 6, 7 ])
    })
  })
  describe('number', function () {
    var numbers = map(tnl.number)
    it('get number from intervals', function () {
      assert.deepEqual(numbers('1P 3M 6m 9M 11P'),
      [1, 3, 6, 9, 11])
    })
  })
  describe('quality', function () {
    var qualities = map(tnl.quality)
    it('get quality of intervals', function () {
      assert.deepEqual(qualities('2dd 2d 2m 2M 2A 2AA'),
      [ 'dd', 'd', 'm', 'M', 'A', 'AA' ])
      assert.deepEqual(qualities('4dd 4d 4P 4A 4AA'),
      [ 'dd', 'd', 'P', 'A', 'AA' ])
      assert.deepEqual(qualities('8P 9M 10M 11P 12P 13M 14M'),
      [ 'P', 'M', 'M', 'P', 'P', 'M', 'M' ])
      assert.deepEqual(qualities('15A 16A 17A 18A 19A 20A 21A'),
      [ 'A', 'A', 'A', 'A', 'A', 'A', 'A' ])
    })
  })
})