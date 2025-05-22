-- ========================
-- 💣 DROP ALL TABLES
-- ========================

DROP TABLE IF EXISTS subscriptions;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS channels;
DROP TABLE IF EXISTS users;

-- ========================
-- 👤 USERS
-- ========================

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE
);

-- ========================
-- 📣 CHANNELS
-- ========================

CREATE TABLE channels (
    channel_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    owner_id INTEGER NOT NULL,

    FOREIGN KEY (owner_id) REFERENCES users(user_id) ON DELETE CASCADE
);


-- ========================
-- 🗣️ SUBSCRIPTIONS
-- ========================

CREATE TABLE subscriptions (
  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  channel_id INTEGER NOT NULL REFERENCES channels(channel_id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, channel_id)
);


-- ========================
-- 📨 MESSAGES
-- ========================


CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    channel_id INTEGER NOT NULL REFERENCES channels(channel_id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ========================
-- 📩 SUBSCRIPTIONS
-- ========================

CREATE TABLE subscriptions (
  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  channel_id INTEGER NOT NULL REFERENCES channels(channel_id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, channel_id)
);