import html2pdf from "html2pdf.js";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./App.css";
import { HTML } from "./constant";

function App() {
  const componentRef = useRef(null);
  return (
    <>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
        print={async (iframePrint) => {
          const document = iframePrint.contentDocument;
          if (document) {
            const html = document.getElementsByTagName("html")[0];
            var opt = {
              margin: 1,
              filename: "myfile.pdf",
              image: { type: "jpeg", quality: 0.95 },
              html2canvas: { useCORS: true, allowTaint: true, logging: true },
              jsPDF: {
                unit: "px",
                format: [1024, 1446],
                hotfixes: ["px_scaling"],
                compress: true,
                putOnlyUsedFonts: true,
              },
            };
            try {
              await html2pdf().set(opt).from(html).save();
            } catch (err) {
              console.log("Error", err);
            }
          }
        }}
      />
      <div ref={componentRef} dangerouslySetInnerHTML={{ __html: HTML }}></div>
    </>
  );
}

export default App;
