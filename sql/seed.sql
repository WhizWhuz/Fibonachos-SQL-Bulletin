-- /*USER SEED*/
-- /*Create new user*/
-- INSERT INTO users (username, email)
-- VALUES ('testuser1', 'testuser1@email.com');

-- /*Get a list of all users*/
-- SELECT * FROM users
-- /*END OF USER SEED*/


-- ========================
-- 👤 USERS
-- ========================
INSERT INTO users (username, email) VALUES
  ('Jesper', 'jesper@dojo.dev'),
  ('Koda', 'koda@scrollmail.com'),
  ('Rin', 'rin@tacotemple.io');

-- ========================
-- 📣 CHANNELS
-- ========================
INSERT INTO channels (name, description, owner_id) VALUES
  ('Filmälskare', 'Diskutera dina favoritfilmer!',
    (SELECT user_id FROM users WHERE username = 'Jesper')
  ),
  ('Taco Lovers', 'All things taco, all the time.',
    (SELECT user_id FROM users WHERE username = 'Koda')
  ),
  ('FrontendNinjas', 'React, Vue, or just vibes.',
    (SELECT user_id FROM users WHERE username = 'Rin')
  );

-- ========================
-- 📝 MESSAGES
-- ========================
INSERT INTO messages (content, user_id, channel_id) VALUES
  ('Jag älskar Tarantino-filmer!',
    (SELECT user_id FROM users WHERE username = 'Jesper'),
    (SELECT channel_id FROM channels WHERE name = 'Filmälskare')
  ),
  ('Tacos med ananas är bäst!',
    (SELECT user_id FROM users WHERE username = 'Koda'),
    (SELECT channel_id FROM channels WHERE name = 'Taco Lovers')
  ),
  ('Vue är bättre än du tror 😉',
    (SELECT user_id FROM users WHERE username = 'Rin'),
    (SELECT channel_id FROM channels WHERE name = 'FrontendNinjas')
  ),
  ('Har någon sett nya Dune?',
    (SELECT user_id FROM users WHERE username = 'Rin'),
    (SELECT channel_id FROM channels WHERE name = 'Filmälskare')
  ),
  ('Fredags-tacos, någon?',
    (SELECT user_id FROM users WHERE username = 'Jesper'),
    (SELECT channel_id FROM channels WHERE name = 'Taco Lovers')
  );
