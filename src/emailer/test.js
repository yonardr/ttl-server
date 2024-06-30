import {AlignmentType, Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun} from "docx";

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text: "Акт",
                            bold: true,
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text: "приёма оборудования на диагностику / в ремонт",
                            bold: true,
                            size: 28,

                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "г.Казань ",
                            size: 28,

                        }),
                        new TextRun({
                            text: `\t\t\t\t\t\t\t\t${new Date().toLocaleDateString()}`,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "\tНастоящий Акт составлен в том, что представителем ",
                            size: 28,
                        }),
                        new TextRun({
                            text: dto.name,
                            size: 28,
                        }),
                        new TextRun({
                            text: ` передано, а представителем ООО «Зима» _______________________ принято для проведения диагностики / ремонта оборудование в составе и количестве, указанном в приведённой таблице.`,
                            size: 28,
                        }),
                    ],
                }),
                new Table(
                    {
                        alignment: AlignmentType.CENTER,
                        rows:[
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: "№ п/п",
                                                    size: 28,
                                                }),]
                                        })],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Наименование и обозначение оборудования, его составных частей, а также документации на оборудование")],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Кол-во")],
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph("1")],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph(`${dto.equipment_name}`)],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("1")],
                                    }),
                                ],
                            }),
                        ],
                    }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Примечания.",
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "",
                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "",
                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "",
                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `от ${dto.name}                                От ООО «Зима»`,
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `от ${dto.name}`,
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `\tПодпись передающего\t\t\tПодпись получателя`,
                            size: 28,
                        })
                    ],
                }),
            ],
        }
    ]


});
const b64string = await Packer.toBase64String(doc);
