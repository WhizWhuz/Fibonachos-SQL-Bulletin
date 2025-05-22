# **SQL Bulletin** **_Fibonachos gruppexamen_** _NO⭐_

**Instructions:**

1. Use `npm install` to install packages.

2. Create `config.env` in root folder containing: <br>`PORT=4000`<br>
   `DATABASE_URL=postgresql://username:password@localhost:5432/databasename`

3. Run `/sql/schema.sql`.

4. Run `/sql/seed.sql`.

5. Import `/postman/Bulletin API.postman_collection.json` into Postman.

### ER Diagram 📏

![Alt Text](https://media.discordapp.net/attachments/1355442392521642066/1375010243427303455/ER-diagram.png?ex=68302194&is=682ed014&hm=cf5950e723daf2504cb88b3436d810686ef615536fa331d999e26985dd3eab4d&=&format=webp&quality=lossless)

## Structure

**Controller** 🎮

- Business Logic
- Validation, error handling

~~**Models**~~ 📝

- ~~Database Logic~~
- ~~Talks with Postgres~~
  <br>
  **_( Chose to put all the logic into Controllers for simplification. )_**

**Server.js** ⚙️

- Handles Server Logic

**App.js** 📲

- Handles Express Logic

**SQL Folder** 📐

- For all SQL schemas. **Seed** and the **schema.sql** that you run first.
