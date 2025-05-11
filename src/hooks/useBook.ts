import { useEffect, useState } from "react"
import { BookDetail, BookReviewItem, BookReviewItemWrite } from "../models/book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { addBookReivew, fetchBookReview } from "../api/review.api";
import { useToast } from "./useToast";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState(false);
    const [reviews, setReview] = useState<BookReviewItem[]>([]);
    
    const { isLoggedIn } = useAuthStore();
    const {showAlert} = useAlert();
    const { showToast } = useToast();

    const likeToggle = () => {
        // 권한 확인
        if(!isLoggedIn) {
            showAlert('로그인이 필요합니다.');
            return;
        }

        if(!book) return;

        if(book.liked) {
            // 라이크 상태 -> 언라이크 실행
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                })
                showToast("좋아요가 취소되었습니다.")
            })
        } else {
            // 언라이크 상태 -> 라이크 실행
            likeBook(book.id).then(() => {
                // 성공 처리
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                });
                showToast("좋아요가 성공했습니다.")
            });
        }
    };

    const addToCart = (quantity: number) => {

        if(!book) return;

        addCart({
            book_id: Number(bookId),
            quantity: quantity
        }).then(() => {
            setCartAdded(true);
            setTimeout(() => {
                setCartAdded(false);
            }, 3000);
        });
        console.log(cartAdded)
    };

    useEffect(() => {

        if(!bookId || Number(bookId) <= 0 ) return;

        fetchBook(bookId).then((book) => {
            setBook(book);
        })
        
        fetchBookReview(bookId).then((reviews)=>{
            setReview(reviews);
        })
    }, [bookId]);

    const addReview =  (data: BookReviewItemWrite) => {
        if (!book) return;

        addBookReivew(book.id.toString(), data).then((res) => {
            // fetchBookReview(book.id.toString()).then((reviews) => {
            //   setReviews(reviews);
            // });
            showToast(res?.message);
        });
    };

    return { book, likeToggle, addToCart, cartAdded, reviews, addReview  };
}