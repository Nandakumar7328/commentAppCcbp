import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, updateLikeButton, onDeleteComment} = props
  const {inputName, colorName, date, inputComment, isLiked, id} = commentDetails
  const timeOfComment = formatDistanceToNow(date)
  const isLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeCss = isLiked ? 'Btn' : 'btn-like'

  const likeButtonClick = () => {
    updateLikeButton(id)
  }

  const onClickDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="li-container">
      <div className="name-comment-container">
        <div className={`fist-letter ${colorName}`}>
          <p className="fist-letter-para">{inputName[0].toUpperCase()}</p>
        </div>
        <div className="name-date">
          <p className="name-para">{inputName}</p>
          <p className="time-para">{timeOfComment}</p>
        </div>
      </div>
      <p className="comment-para">{inputComment}</p>
      <div className="like-delete-container">
        <img src={isLike} alt="like" />
        <button type="button" className={likeCss} onClick={likeButtonClick}>
          like
        </button>
        <button
          type="button"
          testid="delete"
          className="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
