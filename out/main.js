"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to AoC 2023!");
const fs = __importStar(require("fs"));
// import { default as day01 } from './solutions/day01/solution-a';
const solution_b_1 = __importDefault(require("./solutions/day01/solution-b"));
function pad(num, size) {
    let s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
}
// Maybe put some cmd arguments
function runAoC(day, part, customInput) {
    const inputFileName = `./input/day${pad(day, 2)}/${customInput ? customInput : 'input'}-${part}.txt`;
    const input = fs.readFileSync(inputFileName, 'utf8');
    switch (day) {
        case 1:
            return (0, solution_b_1.default)(input);
        case 2:
            console.log('Hmmm');
    }
}
// const result = runAoC(1, 'a', 'dummy-input')
// const result = runAoC(1, 'a')
// const result = runAoC(1, 'b', 'dummy-input')
const result = runAoC(1, 'b');
console.log(`===== Result: ${result} =====`);
//# sourceMappingURL=main.js.map