import tesseract, { recognize } from "node-tesseract-ocr";

export const ocerisation = async (src, conf) => await tesseract.recognize(src, conf);