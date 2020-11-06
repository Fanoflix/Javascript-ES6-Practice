// --- MODULES ---
// Created separate files for each class that we had previously.

// When working with modules, the object defined in the module is 
// private by default (not accessible by other files)
// add 'export' keyword to each class declaration

import { Teacher } from "./teacher";

const teacher = new Teacher("Ammar", "Maths");
teacher.teach();


// --- Exporting ---
// Default --> import ... from ''; // "export default" ...
// Named --> import { ... } from '';