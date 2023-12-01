console.log("Welcome to AoC 2023!")

import * as fs from 'fs';
import { default as day01 } from './solutions/day01/solution';

function pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

// Maybe put some cmd arguments
function runAoC(day: number, part: 'a' | 'b', customInput?: string) {
    const inputFileName = `./input/day${pad(day, 2)}/${customInput ? customInput : 'input'}-${part}.txt`
    const input: string = fs.readFileSync(inputFileName,'utf8');
    switch (day) {
        case 1: 
            return day01(input)
        case 2: 
            console.log('Hmmm')
    }
}

// const result = runAoC(1, 'a', 'dummy-input')
const result = runAoC(1, 'a')
console.log(`===== Result: ${result} =====`)