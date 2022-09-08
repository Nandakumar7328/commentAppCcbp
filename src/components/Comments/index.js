import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    inputName: '',
    inputComment: '',
    commentList: [],
  }

  onDeleteComment = id => {
    const {commentList} = this.state

    const newList = commentList.filter(eachFilter => eachFilter.id !== id)
    this.setState({commentList: newList})
  }

  updateLikeButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachList => {
        if (id === eachList.id) {
          return {...eachList, isLiked: !eachList.isLiked}
        }
        return eachList
      }),
    }))
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({inputComment: event.target.value})
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state

    const colorName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      inputName,
      inputComment,
      date: new Date(),
      isLiked: false,
      colorName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      inputName: '',
      inputComment: '',
    }))
  }

  render() {
    const {inputName, inputComment, commentList} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Comments</h1>
        <div className="sub-container">
          <form className="form-container" onSubmit={this.onSubmitComment}>
            <p className="input-para">Say something about 4.0 Technologies</p>
            <input
              className="name-input"
              value={inputName}
              type="text"
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <textarea
              className="input-comment"
              rows="5"
              placeholder="Your Comment"
              onChange={this.onChangeComment}
              value={inputComment}
            />
            <button className="btn" type="submit">
              Add Comment
            </button>
          </form>
          <img
            className="main-image-resize"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <p className="heading">
          <span className="comments-count">{commentList.length}</span>
          Comments
        </p>
        <ul className="un-list-container">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              updateLikeButton={this.updateLikeButton}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
