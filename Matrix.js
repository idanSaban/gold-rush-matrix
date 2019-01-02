
class Matrix {
    constructor(rows, cols) {
        this.matrix = this.generateMatrix(rows, cols)

    }

    generateMatrix(rows, cols) {
        const m = []
        let num = 0
        for (let i = 0; i < rows; i++)
        {
            m.push([])
            for (let j = 0; j < cols; j++)
            {
                m[i].push("e")
            }
        }
        return m
    }
    print() {
        let output = ""
        this.matrix.forEach(r => {
            r.forEach(c => {
                output += `${c} \t`
            })
            output += `\n`
        });
        console.log(output)
    }
    printCol(colNum) {
        let output = ""
        this.matrix.forEach(i => output += `${i[colNum]}\n`)
        console.log(output)
    }
    printRow(rowNum) {
        let output = ""
        this.matrix[rowNum].forEach(i => output += `${i}\t`)
        console.log(output)
    }
    alter(x, y, a) {
        this.matrix[x][y] = a
    }
    get(row, col) {
        return this.matrix[row][col]
    }

    findCoordinate(i) {
        for (let row in this.matrix)
        {
            for (let col in this.matrix[row])
            {
                if (this.get(row, col) == i)
                {
                    return { x: col, y: row }
                }
            }
        }
    }
}


// module.exports = Matrix 