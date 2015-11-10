The Bits
--------
[![Build Status](https://travis-ci.org/banterability/the-bits.svg?branch=master)](https://travis-ci.org/banterability/the-bits)

![The bits! The bits!](https://s3.amazonaws.com/f.cl.ly/items/120u3h1W031T21411n1l/the-bits-cap.gif)

Handy bits of frequenty-used JS.


### The Bits

#### `datetime.padZeros(value: number)`

Converts a number into a string, padding single-digit values with a zero. Useful for times (8:05 p.m.)

```javascript
Bits.datetime.padZeros(1);
// -> '01'
Bits.datetime.padZeros(15);
// -> '15'
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

#### `humanize.commaize(value: number)`

Converts a number into a string, adding commas after every three digits as necessary. Preserves decimal values.

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

### Development

#### Testing

```bash
$ npm test
```

#### Packaging for browser use

```bash
$ npm run-script build
```
