#!/usr/bin/env node

const fs = require('fs');
// For Method Two
const util = require('util');
// End For Method Two
const chalk = require('chalk');
const path = require('path');
// Third and Final Solution
const { lstat } = fs.promises;
// End Third and Final Solution
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        console.log(err);
    };

    // Wrap lstat call with promise, async/await using Promise.all
    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });
    
    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.bold(filenames[index]));
        };
    };
    // End Wrap lstat call with promise, async/await using Promise.all

    // lstat with promise, async/await call one at a time

    // Method One
    // const lstat = (filename) => {
    //     return new Promise((resolve, reject) => {
    //         fs.lstat(filename, (err, stats) => {
    //             if (err) {
    //                 reject(err);
    //             };
    //             resolve(stats);
    //         })
    //     })
    // }
    // End Method One
    // End with promise, async/await call one at a time

    // Method Two
    // const lstat = util.promisify(fs.lstat);
    // End Method Two

    // Method Three
    // const { lstat } = fs.promises;

    // fs.readdir(process.cwd(), async (err, filenames) => {
    //     if (err) {
    //         console.log(err);
    //     };
    //     for (let filename of filenames) {
    //         try {
    //             const stats = await lstat(filename);

    //             console.log(filename, stats.isFile());
    //         } catch (err) {
    //             console.log(err);
    //         };
    //     };
    // });
    // End Method Three

    // Array Results Callback solution
        // const allStats = Array(filenames.length).fill(null);

        // for (let filename of filenames) {
        //     const index = filenames.indexOf(filename);
        //     fs.stat(filename, (err, stats) => {
        //         if (err) {
        //             console.log(err);
        //         }
        //         allStats[index] = stats;

        //         const ready = allStats.every((stats) => {
        //             return stats;
        //         });
        //         if (ready) {
        //             allStats.forEach((stats, index) => {
        //                 console.log(filenames[index], stats.isFile());
        //             });
        //         };
        //     });
        // };
    // End Array Results Callback solution

    // Bad code here
        // for (let filename of filenames) {
        //     fs.lstat(filename, (err, stats) => {
        //         if (err) {
        //             console.log(err);
        //         };
        //         console.log(filename, stats.isFile());
        //     });
        // };
    // Bad code complete
});