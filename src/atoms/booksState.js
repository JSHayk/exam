import { atom } from "recoil";

// PDF
import matan1Pdf from "../pdfs/matan-1.pdf";
// ASSETS
import nkar from "../assets/books/book-2.png";

export const booksState = atom({
  key: "booksState",
  default: [
    {
      id: 1,
      title: "Matematikakan Alazi",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
      picture: nkar,
    },
    {
      id: 2,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 2,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 2,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 2,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 2,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 2,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
  ],
});

export const booksCopyState = atom({
  key: "booksCopyState",
  default: [],
});
