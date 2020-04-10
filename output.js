const solutions = {
    algo: document.querySelector(".algo"),

    print(title, callback, ...input) {
        let output, start = Date.now(), finish;
        try {
            output = callback(...input)
            finish = Date.now() - start; 
        } catch (error) {
            output = error
        }

        let li = document.createElement("li");
        li.innerHTML = this._setInnerHTML(title, input, output, finish);
        this.algo.append(li);

        li.onclick = event => event.target === li.querySelector(".solution-remove") && this.remove(li)
        
        return li
    },

    remove(li) {
        li.remove()
    },

    _setInnerHTML(title, input, output, finish) {
        return `
            <h4 class="solution-title">${title}</h4>
            <div class="solution-content">
                <div class="solution-section">
                    <div class="solution-inout">Input:</div>
                    <div>${input}</div>
                </div>
                <div class="solution-section">
                    <div class="solution-inout">Output:</div>
                    <div>${output}</div>  
                </div>
                <small class="solution-runtime">Runtime ${finish} ms</small>
            </div>
            <span class="solution-remove">&times;</span>
        `;
    }
};

let li = solutions.print("test", () => "out data", "input data")

setTimeout(() => solutions.remove(li), 2500)