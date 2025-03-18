# simple-db
A simple and efficient JSON database for Node.js with TypeScript support and automatic persistence !

## Installation

```
npm install @k4i/simple.db
pnpm install @k4i/simple.db
yarn add install @k4i/simple.db
```

## Usage

To use this simple DB using JSON, follow these instructions:

### Import simple-db:
```javascript
const DB = require('@k4i/simple.db'); // CJS
import DB from "@k4i/simple.db"; // ES6
```

### Create the db:
```javascript
const db = new DB(); // by default will create db.json
const db = new DB('./mydb.json'); // create a new DB with the specified name
``` 

## Example with sample data
- [example-cjs](./example.cjs)
- [example-mjs](./example.mjs)

## Contributing
We welcome contributions! If you’d like to improve this project, feel free to submit issues, open pull requests, or share your suggestions.

## License
This project is distributed under the MIT License. Check the LICENSE file for more details.

## Contact
For any inquiries or support, you can reach out via [contact@w1sh.xyz](mailto:contact@w1sh.xyz) or join our [Discord Server](https://discord.gg/CMNd45AXvD).