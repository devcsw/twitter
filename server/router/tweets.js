import express from 'express';
import 'express-async-error';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
import { validate } from '../middleware/validator.js';

//Contract Testing: Client-Server 규격을 어떻게 맞춰가는지 테스팅기법
//Proto Testing: 추가로 공부해볼것

const router =express.Router();

const validateTweet = [
    body('text')
        .trim()
        .isLength({min:3})
        .withMessage('text should be at least 3 characters'),
    validate,
];

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweeets
router.post('/', validateTweet, tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', validateTweet, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
