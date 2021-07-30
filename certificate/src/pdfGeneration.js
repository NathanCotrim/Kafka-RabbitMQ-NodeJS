import { v4 as generateToken } from 'uuid'
import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { join } from 'path'
import moment from 'moment'


export async function pdfGeneration({ name, id }, course) {
    const token = generateToken()
    
    const pdf = new PDFDocument({
        layout: 'landscape',
        size: 'A4'
    })

    pdf.image(join('assets', 'images', 'certificate.png'), 0, 0, { width: 842 });

    pdf.font(join('assets', 'fonts', 'Poppins-Regular.ttf'));

    pdf.fontSize(60).text(name, 20, 265, {
        align: 'center'
    });

    pdf.fontSize(10).text(moment().format(), -275, 430, {
        align: 'center'
    });

    pdf.fontSize(12).text(token, 24, 0, {
        align: 'left'
    });

     pdf.fontSize(12).text(course.name, -160, 0, {
        align: 'right'
    });

    pdf.end();

    return pdf
}
