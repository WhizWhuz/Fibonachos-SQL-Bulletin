CREATE TABLE subscriptions (
  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  channel_id INTEGER NOT NULL REFERENCES channels(channel_id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, channel_id)
);