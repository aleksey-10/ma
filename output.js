const solutions = {
    algo: document.querySelector(".algo"),

    print(title, callback, ...input) {
        let output;
        try {
            output = callback(...input)
        } catch (error) {
            output = error
        }

        let li = document.createElement("li");
        li.innerHTML = this._setInnerHTML(title, input, output);
        this.algo.append(li);

        li.onclick = event => event.target === li.querySelector(".solution-remove") && li.remove()
    },

    _setInnerHTML(title, input, output) {
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
            </div>
            <span class="solution-remove">&times;</span>
        `;
    }
};

//test
solutions.print("Test" , () => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui aspernatur ipsa itaque ad maiores, commodi nemo labore voluptates tenetur a nam. Pariatur ullam iure dolore quod labore eos quasi.");