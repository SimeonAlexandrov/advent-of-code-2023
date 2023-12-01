function isNumber(char: string) {
    return /^\d$/.test(char);
  }

function getSolution(input: string): number {
    return input
        .split('\n')
        .map(line => {
            let firstDigit: string | undefined, lastDigit: string | undefined
            line.split('').forEach(symbol => {
                if(isNumber(symbol)) {
                    lastDigit = symbol
                    if(!firstDigit) {
                        firstDigit = symbol
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