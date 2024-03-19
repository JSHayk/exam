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
      id: 3,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },

    {
      id: 4,
      title: "Tvayin methodner",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 5,
      title: "kabos",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 6,
      title: "Agata",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
    {
      id: 7,
      title: "Next Page",
      authors: ["by anthony doerr", "by anthony doerr"],
      pdf: matan1Pdf,
    },
  ],
});

export const booksCopyState = atom({
  key: "booksCopyState",
  default: [],
});
