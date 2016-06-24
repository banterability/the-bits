The Bits
--------
[![Build Status](https://travis-ci.org/banterability/the-bits.svg?branch=master)](https://travis-ci.org/banterability/the-bits)

![The bits! The bits!](https://s3.amazonaws.com/f.cl.ly/items/120u3h1W031T21411n1l/the-bits-cap.gif)

Handy bits of frequenty-used JS.


### The Bits

#### `color.contrastingColor(comparisonColor: array, darkContrastingOption: any, lightContrastingOption: any)`

Given a comparison color (as an array of `[r, g, b]` values), determine whether a dark or light color would be more visible. The `darkContrastingOption` and `lightContrastingOption` arguments are not parsed and are returned as passed, so they can be in any format useful to you.

```javascript
Bits.color.contrastingColor([255, 255, 255], 'black', 'white');
// -> 'black'
Bits.color.contrastingColor([0, 0, 0], '#000', '#fff');
// -> '#fff'
```

#### `dom.find(selector: string, root?: element)`

Wrapper around `querySelector`. Takes an optional `root` argument that scopes the search to another element.

```javascript
Bits.dom.find('div');
// -> <div>
Bits.dom.find('h1', sectionElement);
// -> <div>
```

#### `dom.findAll(selector: string, root?: element)`

Behaves like `querySelectorAll`, but returns an iterable Array instead of a NodeList. Takes an optional `root` argument that scopes the search to another element.

```javascript
Bits.dom.findAll('img');
// -> Array[<img>, <img>]
Bits.dom.findAll('li', ulElement);
// -> Array[<li>, <li>, <li>]
```

#### `extend(tk)`

Extends the destination object with the attributes of the source object. If a key exists in both, the source object will overwrite the destination.

Description TK

```javascript
Bits.extend({a: 1}, {b: 2});
// -> {a: 1, b: 2}
```

#### `humanize.commaize(value: number)`

Converts a number into a string, adding commas after every three digits as necessary. Preserves decimal values, if present.

```javascript
Bits.humanize.commaize(105);
// -> '105'
Bits.humanize.commaize(1050);
// -> '1,050'
Bits.humanize.commaize(10508.99);
// -> '10,508.99'
```

#### `humanize.isPlural(value: number)`

Returns a boolean of whether or not a value should be described as a plural.

```javascript
Bits.humanize.isPlural(0);
// -> true
Bits.humanize.isPlural(1);
// -> false
Bits.humanize.isPlural(2);
// -> true
```

#### `humanize.padZeros(value: number)`

Converts a number into a string, padding single-digit values with a zero. Useful for times (8:05 p.m.)

```javascript
Bits.datetime.padZeros(1);
// -> '01'
Bits.datetime.padZeros(15);
// -> '15'
```

#### `range(from: number, to: number)`

Returns an array of integers between two values (inclusive).

Description TK

```javascript
Bits.range(1, 5);
// -> [1, 2, 3, 4, 5]
```

### Development

#### Testing

```bash
$ npm test
```

#### Packaging for browser use

```bash
$ npm run-script build
```

The browser-friendly script is available at `bits.brower.js`.
