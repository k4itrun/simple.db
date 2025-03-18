import * as fs from 'fs';

const ERR_MSG = 'Error: If you need help? https://discord.gg/CMNd45AXvD';

type Database = Record<string, any>;

export class DB {
  private json: fs.PathLike;
  private db: Database;

  constructor(filePath: string = './db.json') {
    this.json = filePath;
    this.db = {};

    if (!fs.existsSync(this.json)) {
      fs.writeFileSync(this.json, '{}', 'utf-8');
    } else {
      this.loadFile();
    }
  }

  private loadFile(): void {
    const savedData = JSON.parse(fs.readFileSync(this.json, 'utf-8'));
    if (typeof savedData === 'object') {
      this.db = savedData;
    }
  }

  private save(): void {
    fs.writeFileSync(this.json, JSON.stringify(this.db, null, 2), 'utf-8');
  }

  get<T>(key: string): T | undefined {
    if (!key) return console.error(ERR_MSG), undefined;
    return this.db[key];
  }

  fetch<T>(key: string): T | undefined {
    return this.get<T>(key);
  }

  has(key: string): boolean {
    if (!key) return console.error(ERR_MSG), false;
    return key in this.db;
  }

  set<T>(key: string, value: T): void {
    if (!key || value === undefined) return console.error(ERR_MSG);
    this.db[key] = value;
    this.save();
  }

  delete(key: string): void {
    if (!key) return console.error(ERR_MSG);
    delete this.db[key];
    this.save();
  }

  add(key: string, count: number): void {
    if (!key || count === undefined) return console.error(ERR_MSG);
    if (typeof this.db[key] !== 'number') this.db[key] = 0;
    this.db[key] += count;
    this.save();
  }

  sub(key: string, count: number): void {
    if (!key || count === undefined) return console.error(ERR_MSG);
    if (typeof this.db[key] !== 'number') this.db[key] = 0;
    this.db[key] -= count;
    this.save();
  }

  push<T>(key: string, element: T): void {
    if (!key || element === undefined) return console.error(ERR_MSG);
    if (!Array.isArray(this.db[key])) this.db[key] = [];
    this.db[key].push(element);
    this.save();
  }

  clear(): void {
    this.db = {};
    this.save();
  }

  all(): Database {
    return this.db;
  }
}

export default DB;
