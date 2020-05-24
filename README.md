# E-Commerce

E-Commerce is a minimalistic “Add To Cart & Place Order ” Project.

## Installation

First setup the node back-end

- cd into the backend/ folder then run

```bash
npm install
```

- restore the database from backend/DB folder

```bash
mongorestore --db=headless path\to\database
```

replace path\to\database to your absolute path --Exemple: C:\Users\username\Downloads\Headless\backend\DB\headless

- cd into the frontend/ and run

```bash
npm install
```

## Usage

- cd into backend/ first and run

```bash
node server.js
```

- cd into frontend/ and run

```bash
npm start
```

## Dependency MongoDB, Node

```javascript
const express = require("express");
const mongoose = require("mongoose");
// Start Server
const port = process.env.PORT || 3000; // checking for dynamic port set.
```
