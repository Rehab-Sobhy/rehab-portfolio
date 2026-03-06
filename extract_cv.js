import fs from 'fs';
import { PDFExtract } from 'pdf.js-extract';

const pdfExtract = new PDFExtract();

pdfExtract.extract('public/CV_Rehab_Sobhy.pdf', {}, (err, data) => {
    if (err) return console.error(err);

    let lines = [];
    data.pages.forEach(page => {
        page.content.forEach(item => {
            lines.push(item.str);
        });
    });

    fs.writeFileSync('cv_text.txt', lines.join(' '));
    console.log('Extracted CV text.');
});
