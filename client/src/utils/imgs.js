import React from "react";

import codeDoc from "./fileImgs/code-doc.png";
import excelDoc from "./fileImgs/excel-doc.png";
import imgDoc from "./fileImgs/img-doc.png";
import mp3Doc from "./fileImgs/mp3-doc.png";
import mp4Doc from "./fileImgs/mp4-doc.png";
import pdfDoc from "./fileImgs/pdf-doc.png";
import pptDoc from "./fileImgs/ppt-doc.png";
import wordDoc from "./fileImgs/word-doc.png";
import zipDoc from "./fileImgs/zip-doc.png";

export const CodeFile = () => (
  <img className="file-icon" src={codeDoc} alt="Code" />
);
export const ExcelFile = () => (
  <img className="file-icon" src={excelDoc} alt="Excel" />
);
export const ImgFile = () => (
  <img className="file-icon" src={imgDoc} alt="PNG" />
);
export const AudioFile = () => (
  <img className="file-icon" src={mp3Doc} alt="MP3" />
);
export const VideoFile = () => (
  <img className="file-icon" src={mp4Doc} alt="MP4" />
);
export const PdfFile = () => (
  <img className="file-icon" src={pdfDoc} alt="PDF" />
);
export const PptFile = () => (
  <img className="file-icon" src={pptDoc} alt="PPT" />
);
export const WordFile = () => (
  <img className="file-icon" src={wordDoc} alt="Word" />
);
export const ZipFile = () => (
  <img className="file-icon" src={zipDoc} alt="Zip" />
);
