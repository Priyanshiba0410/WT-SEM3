const path = require('path');

const normalizePath = path.normalize("C:/Users/priya/OneDrive/Desktop/WT/lab17")
console.log("normalize path",normalizePath);

const joinPath = path.join("C:/Users/priya/OneDrive/Desktop/WT/abc.txt")
console.log("joinpath::",joinPath);

const extName = path.extname("C:/Users/priya/OneDrive/Desktop/WT/lab17.java")
console.log("entention",extName);

const baseName = path.basename("C:/Users/priya/OneDrive/Desktop/WT/lab17")
console.log("base name",baseName);

const directoryPath = path.dirname("C:/Users/priya/OneDrive/Desktop/WT/lab17")
console.log("directoryname",directoryPath);
