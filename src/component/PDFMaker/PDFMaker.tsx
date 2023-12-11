import React from 'react';
import { PDFViewer, Document, Page, Text,StyleSheet,Font  } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from './PDFData';

import font from "../../../public/Nikosh.ttf"

Font.register({
family: "Nikosh",
format: "truetype",
src: font
});


const RawPDFDownload = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            fontFamily: "Nikosh",
          backgroundColor: '#E4E4E4',
          padding: 40,
          margin:50
        },
       
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        } ,
        h1: {
          fontFamily: "Nikosh",
          fontSize: 24,
          textAlign: 'center',
          fontWeight: 500,
        //   display: 'block',
        //   fontSize: '2em',
          marginBlockStart: '0.67em',
          marginBlockEnd: '0.67em',
          margininlineStart: '0px',
          margininlineEnd: '0px'
         
        },
        h3: {
            fontFamily:'Nikosh',
            textAlign: 'center'
        },
        h5: {
          fontSize: 12,
          fontWeight: 500
        },
        colortext: {
           color:'#000'
          },
          table: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#000',
            marginBottom: 10,
          },
          tableHeader: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#000',
            marginBottom: 10,
            fontWeight: 'bold',
          },
          cell: {
            padding: 5,
            flexGrow: 1,
          },
    })
  const handleDownload = () => {

    // Create a blob URL for the generated PDF

    // ReactPDF.renderToStream(<MyDocument />);
    ReactPDF.render(<MyDocument />, `example.pdf`);

    // Create a temporary link element and trigger the download
   
  };

  return (
    <div>

      <button onClick={handleDownload}>Download PDF</button>

      {/* Render the PDF for preview (optional) */}
      <PDFViewer width={1200} height={1200}>
        <Document>
          <Page size="A4" >
            <view style={styles.section}>
           
            <Text style={[styles.h1,  styles.colortext ]}>মডেল একাডেমি</Text>
            <Text style={[styles.h3,  styles.colortext ]}>[একটি আদর্শ উচ্চ বিদ্যালয়]<br/></Text>
            <Text style={[styles.h3,  styles.colortext ]}>প্রিন্সিপাল আব্দুল কাশেম সড়ক, সরকারি ডি-টাইপ কলোনী, মিরপুর-১, ঢাকা-১২১৬</Text>
            <Text style={[styles.h3,  styles.colortext ]}>ষাণ্মাসিক সামষ্টিক মূল্যায়ন (PI) এর বিষয়ভিত্তিক ট্রান্সক্রিপ্ট-২০২৩</Text>
              <view style={styles.tableHeader}>
                    <view style={styles.cell}><Text>Column 1 Header</Text></view>
                    <view style={styles.cell}><Text>Column 2 Header</Text></view>
                    <view style={styles.cell}><Text>Column 3 Header</Text></view>
                </view>
                <view style={styles.table}>
                    <view style={styles.cell}><Text>Data 1</Text></view>
                    <view style={styles.cell}><Text>Data 2</Text></view>
                    <view style={styles.cell}><Text>Data 3</Text></view>
                </view>
                <view style={styles.table}>
                    <view style={styles.cell}><Text>Data 4</Text></view>
                    <view style={styles.cell}><Text>Data 5</Text></view>
                    <view style={styles.cell}><Text>Data 6</Text></view>
                </view>
       
            </view>
          
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default RawPDFDownload;
