function isNumber(char: string) {
    return /^\d$/.test(char);
}

function canBeParsedToNumber(str: string) {
    return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].includes(str)
}

const wordToNumber: { [key: string]: number } = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

function getSolution(input: string): number {
    return input
        .split('\n')
        .map(line => {
            let firstDigit: string | undefined, lastDigit: string | undefined
            line.split('').forEach((symbol, i) => {
                if(isNumber(symbol)) {
                    lastDigit = symbol
                    if(!firstDigit) {
                        firstDigit = symbol
                    }
                } else {
                    let str = symbol
                    for (let index = i + 1; index < line.length; index++) {
                        if (isNumber(line[index])) {
                            break
                        }
                        str += line[index];
                        if (canBeParsedToNumber(str)) {
                            lastDigit = wordToNumber[str].toString()
                            if(!firstDigit) {
                                firstDigit = wordToNumber[str].toString()
                            }
                            break
                        }
                        
                    }
                }
            })
            if (firstDigit === undefined || lastDigit === undefined) {
                throw new Error(`Unable to extract digits from the input line: ${line}`)
            } else {

                return parseInt(firstDigit + lastDigit)
            }
        })
        .reduce((a, b) => a + b)
}

export default getSolution