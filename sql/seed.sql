-- ========================
-- 👤 USERS
-- ========================
INSERT INTO users (username, email) VALUES
  ('Jesper', 'jesper@dojo.dev'),
  ('Kelly', 'kelly@scrollmail.com'),
  ('Nadjib', 'nadjib@tacotemple.io');

-- ========================
-- 📣 CHANNELS
-- ========================
INSERT INTO channels (name, description, owner_id) VALUES
  ('Filmälskare', 'Diskutera dina favoritfilmer!',
    (SELECT user_id FROM users WHERE username = 'Jesper')
  ),
  ('Taco Lovers', 'All things taco, all the time.',
    (SELECT user_id FROM users WHERE username = 'Kelly')
  ),
  ('FrontendNinjas', 'React, Vue, or just vibes.',
    (SELECT user_id FROM users WHERE username = 'Nadjib')
  );


  -- ========================
-- 🗣️ SUBSCRIPTIONS
-- ========================
INSERT INTO subscriptions (user_id, channel_id) VALUES
  ((SELECT user_id FROM users WHERE username = 'Jesper'),
   (SELECT channel_id FROM channels WHERE name = 'Filmälskare')),
  
  ((SELECT user_id FROM users WHERE username = 'Jesper'),
   (SELECT channel_id FROM channels WHERE name = 'Taco Lovers')),

  ((SELECT user_id FROM users WHERE username = 'Kelly'),
   (SELECT channel_id FROM channels WHERE name = 'Taco Lovers')),

  ((SELECT user_id FROM users WHERE username = 'Kelly'),
   (SELECT channel_id FROM channels WHERE name = 'FrontendNinjas')),

  ((SELECT user_id FROM users WHERE username = 'Nadjib'),
   (SELECT channel_id FROM channels WHERE name = 'Filmälskare')),

  ((SELECT user_id FROM users WHERE username = 'Nadjib'),
   (SELECT channel_id FROM channels WHERE name = 'FrontendNinjas'));


-- ========================
-- 📝 MESSAGES
-- ========================
INSERT INTO messages (content, user_id, channel_id) VALUES
  ('Jag älskar Tarantino-filmer!',
    (SELECT user_id FROM users WHERE username = 'Jesper'),
    (SELECT channel_id FROM channels WHERE name = 'Filmälskare')
  ),
  ('Tacos med ananas är bäst!',
    (SELECT user_id FROM users WHERE username = 'Kelly'),
    (SELECT channel_id FROM channels WHERE name = 'Taco Lovers')
  ),
  ('Vue är bättre än du tror 😉',
    (SELECT user_id FROM users WHERE username = 'Nadjib'),
    (SELECT channel_id FROM channels WHERE name = 'FrontendNinjas')
  ),
  ('Har någon sett nya Dune?',
    (SELECT user_id FROM users WHERE username = 'Nadjib'),
    (SELECT channel_id FROM channels WHERE name = 'Filmälskare')
  ),
  ('Fredags-tacos, någon?',
    (SELECT user_id FROM users WHERE username = 'Jesper'),
    (SELECT channel_id FROM channels WHERE name = 'Taco Lovers')
  );
