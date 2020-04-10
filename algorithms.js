solutions.print("Find N Unique Integers Sum up to Zero", sumZero, 21)
solutions.print("Backspace String Compare", compareStr, "ab#c", "acb#")

function sumZero(n) {
    let arr = [1];

    const getRandom = () => {
        let random = Math.random() < 0.5 ? Math.random() * n / 2 : -Math.random() * n / 2
        return Math.round(random)
    }

    const setArr = () => {
        if (arr.reduce((sum, current) => sum += current, 0) === 0) return arr

        arr = [];

        for (let i = 0; i < n; i++) {
            let item = getRandom();
            while (arr.includes(item)) item = getRandom();
            arr.push(item);
        }

        return setArr()
    }

    return setArr()
};

function compareStr(str1, str2) {
    const minify = str => {
        let replaced = str.replace(/\w#/g, "");
        while (replaced.startsWith("#")) replaced = replaced.slice(1)
        return /#/.test(replaced) ? minify(replaced) : replaced;
    }

    return minify(str1) + " " + minify(str2)
}