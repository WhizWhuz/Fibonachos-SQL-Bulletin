# **SQL Bulletin** <span style="color:red">**_Fibonachos gruppexamen_**</span>

**Instructions:**

1. Use `npm install` to install packages.

2. Create `config.env` in root folder with <br><span style="color:lightgreen">PORT=4000<br>
   DATABASE_URL=postgresql://username:password@localhost:5432/sql_bulletin</span>

---

## Structure


**Controller** 🎮

- Business Logic
- Validation, error handling

~~**Models**~~ 📝

- ~~Database Logic~~
- ~~Talks with Postgres~~
<br>
***( Chose to put all the logic into Controllers for simplification. )***

**Server.js** ⚙️

- Handles Server Logic

**App.js** 📲

- Handles Express Logic

**SQL Folder** 📐

- For all SQL schemas
