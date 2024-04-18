import { atom } from "recoil";

// PDF
import matan1Pdf from "../pdfs/matan-1.pdf";
import bulFunkcPdf from "../pdfs/bul-funkc.pdf";
import disMatPdf from "../pdfs/dis-mat.pdf";
import fizikaPdf from "../pdfs/fizika.pdf";
import grafTesPdf from "../pdfs/graf-tes.pdf";
import kombAlgPdf from "../pdfs/komb-alg.pdf";
import kombAlgVahPdf from "../pdfs/komb-alg-vahanpdf.pdf";
import kombAlgVerlucPdf from "../pdfs/komb-alg-verluc.pdf";
import matan2Pdf from "../pdfs/matan-2.pdf";
import matFizHavPdf from "../pdfs/mat-fiz-hav.pdf";
import matTramTarPdf from "../pdfs/mat-tram-tar.pdf";
import optMetPdf from "../pdfs/opt-met.pdf";
import tvMetPdf from "../pdfs/tv-met.pdf";

// ASSETS
import mat1 from "../assets/books/matan1.png";
import bulFunkc from "../assets/books/bul-funkc.jpg";
import disMat from "../assets/books/dis-mat.jpg";
import fizika from "../assets/books/fizika.jpg";
import grafTes from "../assets/books/graf-tes.jpg";
import kombAlg from "../assets/books/komb-alg.jpg";
import kombAlgVahan from "../assets/books/komb-alg-vahan.jpg";
import kombAlgVaruzhan from "../assets/books/komb-alg-varuzhan.jpg";
import matFiz from "../assets/books/mat.fiz.jpg";
import mat2 from "../assets/books/matan2.jpg";
import matTramTarr from "../assets/books/mat-tram-tarr.jpg";
import optMet from "../assets/books/opt-met.jpg";
import tvMet from "../assets/books/tv-met.jpg";

export const booksState = atom({
  key: "booksState",
  default: [
    {
      id: 1,
      title: "Մաթեմատիկական անալիզի խնդրագիրք 1",
      authors: [
        "Գ.Գևորգյան, Լ.Գալստյան, Ա.Թասլաքյան, Գ.Միքայելյան, Կ.Նավասարդյան",
      ],
      pdf: matan1Pdf,
      picture: mat1,
    },
    {
      id: 2,
      title: "Մաթեմատիկական տրամաբանական տարրեր",
      authors: ["Ա․Ն․ Մարտիրոսյան, Ա․Ս․Դինունց"],
      pdf: matTramTarPdf,
      picture: matTramTarr,
    },
    {
      id: 3,
      title: "Բուլյան ֆունկցիաներ",
      authors: ["Հ․Ց․Հակոբյան", "Հ․Գ․Մովսեսյան"],
      pdf: bulFunkcPdf,
      picture: bulFunkc,
    },

    {
      id: 4,
      title: "Դիսկրետ Մաթեմատիկա",
      authors: ["Ռ․Ն․Տոնոյան"],
      pdf: disMatPdf,
      picture: disMat,
    },
    {
      id: 5,
      title: "Ֆիզիկա",
      authors: ["Ատոմ Մուրադյան, Գևորգ Մուրադյան"],
      pdf: fizikaPdf,
      picture: fizika,
    },
    {
      id: 6,
      title: "Գրաֆների տեսություն",
      authors: ["Պ․Պետրոսյան,Վ․Մկրտչյան,Ռ․ Քամալյան"],
      pdf: grafTesPdf,
      picture: grafTes,
    },
    {
      id: 7,
      title: "Կոմբինատորային ալգորիթմներ",
      authors: ["Ռ․Ն․Տոնոյան"],
      pdf: kombAlgPdf,
      picture: kombAlg,
    },
    {
      id: 8,
      title: "Կոմբինատոր ալգորիթմներ եւ ալգորիթմների վերլուծություն",
      authors: ["Վ․Գաբրիելյան"],
      pdf: kombAlgVerlucPdf,
      picture: kombAlgVaruzhan,
    },
    {
      id: 9,
      title: "Մաթեմատիկական անալիզի խնդրագիրք 2",
      authors: [
        "Գ.Գևորգյան, Լ.Գալստյան, Ա.Թասլաքյան, Գ.Միքայելյան, Կ.Նավասարդյան",
      ],
      pdf: matan2Pdf,
      picture: mat2,
    },
    {
      id: 10,
      title: "Մաթեմատիկական ֆիզիկայի հավասարումներ",
      authors: ["Զ․Բ․Հովհաննիսյան"],
      pdf: matFizHavPdf,
      picture: matFiz,
    },
    {
      id: 11,
      title: "Օպտիմիզացիայի մեթոդներ",
      authors: ["Ս․Ա․Ազարյան"],
      pdf: optMetPdf,
      picture: optMet,
    },
    {
      id: 12,
      title: "Թվային մեթոդներ",
      authors: ["Յու․Ռ․Հակոբյան"],
      pdf: tvMetPdf,
      picture: tvMet,
    },
    {
      id: 13,
      title: "Կոմբինատորային ալգորիթմներ և ալգորիթմների վերլուծություն ",
      authors: ["Վահան Վ. Մկրտչյան"],
      pdf: kombAlgVahPdf,
      picture: kombAlgVahan,
    },
  ],
});

export const booksCopyState = atom({
  key: "booksCopyState",
  default: [],
});
