#get-set

get(k) and set(k,v) properties of your object

##Usage

```bash
npm install get-set
```

```javascript
var GetSet = require('get-set');

//Define your constructor
var MyModel = function() {};

MyModel.prototpe = new GetSet();
```

```javascript
.get(key)
```

```javascript
.set(key,val);
//or
.set(object); //Object of key-val pairs
```

