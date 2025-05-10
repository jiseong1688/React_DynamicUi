import {setupWorker} from 'msw/browser';
import {addReview, passthroughImage, reviewsById} from "./review"

const handlers = [addReview,reviewsById,passthroughImage];

export const worker = setupWorker(...handlers);