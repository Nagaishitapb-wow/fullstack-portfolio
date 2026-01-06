import axios from "axios";
import { Request, Response } from "express";
import { Book } from "../models/Book";

export async function importBooks(req: Request, res: Response) {
  try {
    const subjects = [
      "harry potter",
      "romance",
      "science fiction",
      "fantasy",
      "history",
      "mystery",
      "programming",
      "horror",
      "children",
      "young adult",
      "biography"
    ];

    let importedCount = 0;

    for (const subject of subjects) {
      const url = `https://openlibrary.org/subjects/${subject}.json?limit=20`;

      const response = await axios.get(url);
      const works = response.data.works;

      for (const w of works) {
        await Book.findOneAndUpdate(
          { title: w.title },
          {
            title: w.title,
            author: w.authors?.[0]?.name || "Unknown",
            coverImage: w.cover_id
              ? `https://covers.openlibrary.org/b/id/${w.cover_id}-L.jpg`
              : "",
            description: w.subject ? w.subject.join(", ") : "",
            rating: Math.floor(Math.random() * 5) + 1,
            pdfUrl: "",
            stock: 10,
          },
          { upsert: true, new: true }
        );

        importedCount++;
      }
    }

    res.json({
      message: `Imported ${importedCount} books successfully`,
    });
  } catch (err) {
    console.error("IMPORT ERROR:", err);
    res.status(500).json({ message: "Import failed" });
  }
}
