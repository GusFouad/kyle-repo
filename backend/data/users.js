// In-memory user store (replace with a real DB in production)
const users = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
    // bcrypt hash of "password123"
    password: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy",
  },
];

module.exports = users;

