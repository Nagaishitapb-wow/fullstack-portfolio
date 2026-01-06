import { Router } from "express";
import { borrowBook, confirmReturn, getUserBorrowedBooks } from "../controllers/borrowController";
import { authRequired } from "../middleware/auth";

const router = Router();

// protected routes
router.post("/borrow/:bookId", authRequired, borrowBook);
router.post("/return/:bookId", authRequired, confirmReturn);
router.get("/mybooks", authRequired, getUserBorrowedBooks);

export default router;
