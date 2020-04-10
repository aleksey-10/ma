function compareStr(str1, str2) {
    const minify = str => {
        let replaced = str.replace(/\w#/g, "");
        
        while (replaced.startsWith("#")) replaced = replaced.slice(1)

        return /#/.test(replaced) ? minify(replaced) : replaced; 
    }
    
    return minify(str1) + " " + minify(str2)
}

solutions.print("Backspace String Compare", compareStr, "ab#c", "acb#");