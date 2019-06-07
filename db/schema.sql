/* Execute in the command line:
1. Create database: createdb google_reviews
2. Use psql database: psql google_reviews
3. Create Table: use code below:
4. Check the number of rows in table: SELECT count (*) FROM reviews
5. Check the data structure is correct: SELECT * FROM reviews fetch first 10 rows only;
6. Copy csv file in psql table: COPY reviews(reviewer, review_text, picture_url, date_posted, rating, restaurant_id) FROM '/Users/catherineokane/Documents/SDC/db/data.csv' DELIMITER ',' CSV;
7. Drop table if you run into errors: DROP TABLE IF EXISTS reviews;
8. Select Query: select * from reviews where restaurant_id='125';
*/

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  reviewer VARCHAR(255) NOT NULL,
  review_text TEXT NOT NULL,
  picture_url VARCHAR(255) NOT NULL,
  date_posted VARCHAR(255) NOT NULL,
  rating VARCHAR(10) NOT NULL,
  restaurant_id VARCHAR(10485760) NOT NULL
);
