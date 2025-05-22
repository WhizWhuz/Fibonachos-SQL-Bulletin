CREATE TABLE channels (
    channel_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    owner_id INTEGER NOT NULL,

    FOREIGN KEY (owner_id) REFERENCES users(user_id) ON DELETE CASCADE
);






