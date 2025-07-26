/** Common config for bookstore. */



let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = process.env.DATABASE_URL || "postgresql://postgres:my1stServer@localhost:5432/books-test";
} else {
  DB_URI = process.env.DATABASE_URL || "postgresql://postgres:my1stServer@localhost:5432/books";
}

console.log("DB_URI:", DB_URI);

module.exports = { DB_URI };