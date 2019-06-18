const reviewDataGenerator = () => {
    writer.pipe(fs.createWriteStream('data.csv', {flags:'a'}));
    let number = 0;
    let restaurantNum = 1;
    for (var i = 1; i <= 1000000; i++) {
        number++
        if (number === 6) {
            number = 1;
            restaurantNum++
        }
            writer.write({
                reviewer: `${faker.name.firstName()} ${faker.name.lastName()} `,
                review_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                picture_url: pictures[number],
                date_posted: `${faker.date.month()} 1${number}, 201${number}`,
                rating: faker.random.number({max: 5, min: 1}),
                restaurant_id: restaurantNum
            })
    }

    writer.end();
    console.log('done writing-10');
}

reviewDataGenerator();


/*
Execute in command line:
node --max_old_space-size=4036 reviewDataGenerator.js

if 10 million lines is too large/breaks, run in increments of 1 million and run command ten times
*/

const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter({sendHeaders: false});
// const faker = require('faker');


const pictures = [
    'https://vice-images.vice.com/images/content-images/2015/10/16/if-you-smell-what-the-rock-is-cooking-101-body-image-1444992411.jpg?output-quality=75',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/25551832_10155567967329807_1706534759487628152_n.jpg?_nc_cat=1&_nc_ht=scontent-sjc3-1.xx&oh=7ff0683712fbedac7ff26644b91b94bc&oe=5D7001B6',
    'https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-cristiano-ronaldo-statue-fail-33-58dcc00c785ef__700.jpg',
    'https://akns-images.eonline.com/eol_images/Entire_Site/2019112/rs_600x600-190212175714-600-jessica-simpson-pregnant2.cl.021219.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90',
    'https://uproxx.files.wordpress.com/2018/12/giannispunch.jpg?w=650',
    'https://www.thewrap.com/wp-content/uploads/2018/04/Princess-Bride-Andre-the-Giant-1.jpg'

]

const rating = [1, 2, 3, 4, 5];

//a function that will generate 50 million rows of data in a file: file.csv
//data will contain key values on lines 31-36 without the key names (header)
const reviewDataGenerator = () => {
    writer.pipe(fs.createWriteStream('data.csv', {flags:'a'}));
    for (var i = 1; i <= 10000000; i++) {
        for (var j = 0; j <= 5; j++) {
            let obj = {
                reviewer: '',
                // reviewer: `${faker.name.firstName()} ${faker.name.lastName()} `,
                review_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                // picture_url: pictures[j],
                // date_posted: `${faker.date.month()} 1${j}, 201${j}`,
                date_posted: '12-5-1986',
                // rating: faker.random.number({max: 5, min: 1}),
                rating: 1,
                restaurant_id: i
            };
            writer.write(obj);
            obj = null;
        }
        if(i % 100000 === 0) {
            console.log('done with ' + i + ' entries');
        }
    }
    writer.end();
    console.log('done writing');
}

reviewDataGenerator();

