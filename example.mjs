import DB from "./dist/esm/src/simple.db.js";

const db = new DB('./db.json');

console.log("Setting server status...");
db.set("serverStatus", { status: "Online" });
console.log("Server status set:", db.get("serverStatus"));

console.log("Adding money...");
db.add("money", 500);
console.log("Current money:", db.get("money"));

console.log("Pushing server settings...");
db.push("serverSettings", { whitelist: "on", playerCount: "24" });
console.log("Server settings:", db.get("serverSettings"));

console.log("Checking if 'money' key exists:", db.has("money"));
console.log("Checking if 'money_' key exists:", db.has("money_"));

console.log("Subtracting money...");
db.sub("money", 100);
console.log("Updated money:", db.get("money"));

console.log("Fetching server status...");
console.log(db.fetch("serverStatus"));

console.log("Deleting server status...");
db.delete("serverStatus");
console.log("Server status after deletion:", db.get("serverStatus"));

console.log("Clearing database...");
db.clear();
console.log("Database after clearing:", db.all());