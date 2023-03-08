const calc = {
    operadores: ['+', '-', '*', '/', '='],
    memory: [],
    screenMemory: '',

    key: function(numb) {
        document.querySelector(".visao").innerHTML += numb
        this.screenMemory += '' + numb
        console.log('Value of screenMemory: ', this.screenMemory)


    },

    keySymbols: function(symbol) {
        document.querySelector('.visao').innerHTML += symbol
        this.memory.push(this.screenMemory)
        this.memory.push(symbol)
        this.screenMemory = ''
        console.log('screenMemory now: ', this.screenMemory)
        console.log('Memory:', this.memory)
    },
    clear: function() {
        this.memory = []
        this.screenMemory = ''
        document.querySelector('.visao').innerHTML = ''

    },

    resul: function() {
        this.memory.push(this.screenMemory)
        for (n = 0; n <= this.memory.length; n++) {
            if (this.memory[n] === this.operadores[0]) {
                let res = Number(this.memory[n - 1]) + Number(this.memory[n + 1])
                document.querySelector('.visao').innerHTML = res
                this.screenMemory = res
                this.memory.push(res)
                console.log(this.memory)
            } else if (this.memory[n] === this.operadores[1]) {
                let res = Number(this.memory[n - 1]) - Number(this.memory[n + 1])
                document.querySelector('.visao').innerHTML = res
                this.screenMemory = res
                this.memory.push(res)
                console.log(this.memory)
            } else if (this.memory[n] === this.operadores[2]) {
                let res = Number(this.memory[n - 1]) * Number(this.memory[n + 1])
                document.querySelector('.visao').innerHTML = res
                this.screenMemory = res
                this.memory.push(res)
                console.log(this.memory)
            } else if (this.memory[n] === this.operadores[3]) {
                let res = Number(this.memory[n - 1]) / Number(this.memory[n + 1])
                document.querySelector('.visao').innerHTML = res
                this.screenMemory = res
                this.memory.push(res)
                console.log(this.memory)
            }
        }
    }

}