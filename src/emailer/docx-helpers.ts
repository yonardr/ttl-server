// import {Paragraph, Document, Packer, TextRun, Table, TableRow, TableCell} from 'docx';
//
// export function formatParagraph(text: string, fontSize = 12): Paragraph {
//     return new Paragraph({
//         text: text,
//         style: {
//             paragraph: {
//                 spacing: {
//                     line: 240, // Межстрочный интервал 1.5
//                 },
//             },
//         },
//         children: [
//             new TextRun({
//                 text: text,
//                 size: fontSize, // Размер шрифта
//             })
//         ]
//     });
// }
//
// export function createDocument(dto: any): Document {
//     return new Document({
//         sections: [{
//             properties: {},
//             children: [
//                 new Paragraph({
//                     children: [
//                         new TextRun({text: 'Документ передачи оборудования', bold: true, size: 24}),
//                     ],
//                 }),
//                 new Table({
//                     children: [
//                         new TableRow({
//                             children: [
//                                 new TableCell({
//                                     children: [formatParagraph('Наименование оборудования', 28)],
//                                 }),
//                                 new TableCell({
//                                     children: [formatParagraph('Кол-во', 28)],
//                                 }),
//                             ],
//                         }),
//                         new TableRow({
//                             children: [
//                                 new TableCell({
//                                     children: [formatParagraph(dto.equipment_name)],
//                                 }),
//                                 new TableCell({
//                                     children: [formatParagraph('1')],
//                                 }),
//                             ],
//                         }),
//                     ],
//                 }),
//                 formatParagraph('Примечания.'),
//                 formatParagraph(''),
//                 formatParagraph(''),
//                 formatParagraph(''),
//                 formatParagraph(`От ${dto.name} От ООО «Зима»`, 28),
//                 formatParagraph(`От ${dto.name}`, 28),
//                 formatParagraph(`\tПодпись передающего\t\t\tПодпись получателя,`, 28),
//             ],
//         }]
//     })
// }
