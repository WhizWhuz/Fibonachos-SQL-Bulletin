# **SQL Bulletin** <span style="color:red">**_Fibonachos gruppexamen_**</span>

**Instructions:**

1. Use `npm install` to install packages.

2. Create `config.env` in root folder containing: <br>`PORT=4000`<br>
   `DATABASE_URL=postgresql://username:password@localhost:5432/databasename`

3. Run `/sql/schema.sql`.

4. Run `/sql/seed.sql`.

5. Import `/postman/Bulletin API.postman_collection.json` into Postman.

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
