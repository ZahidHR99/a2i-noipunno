import React from 'react';
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from './PDFData';



const RawPDFDownload = () => {
  const handleDownload = () => {

    
    

    // Create a blob URL for the generated PDF

    // ReactPDF.renderToStream(<MyDocument />);
    ReactPDF.render(<MyDocument />, `example.pdf`);

    // Create a temporary link element and trigger the download
   
  };

  return (
    <div>
      <h1>Raw PDF Download Example with @react-pdf/renderer</h1>
      <button onClick={handleDownload}>Download PDF</button>
      {/* Render the PDF for preview (optional) */}
      <PDFViewer width={600} height={400}>
        <Document>
          <Page size="A4">
            <Text>This is a preview of the PDF.</Text>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default RawPDFDownload;
