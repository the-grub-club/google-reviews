/*
Generate 50 million rows of data

Execute in command line:
node --max_old_space-size=4036 reviewDataGenerator.js

*/

const fs = require('fs');
let writer = fs.createWriteStream('data.csv');
const casual = require('casual');

const pictures = [
    'https://bit.ly/2IsApMf',
    'https://bit.ly/2K0Dh6z',
    'https://bit.ly/2wFu1Mw',
    'https://eonli.ne/2K1SN21',
    'https://bit.ly/2EWjFMw',
    'https://bit.ly/2Kxi6sf'
]

const createOne = (picture_num, ratingNum, restaurant_id) => {
    const reviewer = `${casual.first_name} ${casual.last_name}`;
    const review_text = casual.words(n = 20);
    const picture_url = pictures[picture_num];
    const date_posted = `${casual.month_name} ${casual.day_of_month} ${casual.year}`;
    const rating = ratingNum;

    return `${reviewer},${review_text},${picture_url},${date_posted},${rating},${restaurant_id}\n`;
  };

writer.write("reviewer,review_text,picture_url,date_posted,rating,restaurant_id\n");

const reviewDataGenerator = (start, end) => {

    console.log('write-start');

    let i = start;
    write();
    function write() {
      let ok = true;
      do {
        if (i % 100000 === 0) {
          const num = i / 1000000;
          console.log(`wrote-${num} mil`);
        }
        for (let j = 1; j <= 5; j++) {
          const reviewData = createOne(j, j, i);
          ok = writer.write(reviewData);
        }
        i++;
      } while (i < end && ok);
      if (i < end) {
        writer.once('drain', write);
      }
    }
  };

  reviewDataGenerator(1, 10000000);

