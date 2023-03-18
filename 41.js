// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
    switch (sperm) {
        case "XY":
            return "Congratulations! You're going to have a son.";
        case "XX":
            return "Congratulations! You're going to have a daughter.";
    }
}

console.log(chromosomeCheck("XY"))