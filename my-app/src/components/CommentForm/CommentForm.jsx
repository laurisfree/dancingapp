import axios from 'axios';
import './CommentForm.scss'


const CommentForm = ({ getUserComments, comment, setComment, imageUrl, setImageUrl, editId, setEditId, commentRef }) => {


    const onSubmitHandler = () => {
        const jwtToken = localStorage.getItem("jwt_token");
        if(editId) {
            
            axios.put(`http://localhost:8080/comment?id=${editId}`,{
                comment,
                imageUrl
            },{
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                },
              })
              .then(response => {
                getUserComments()
                setComment("")
                setImageUrl("")
                setEditId(null)
              })
              .catch(error => console.log(error));
        } else {
            axios.post('http://localhost:8080/comment',{
                comment,
                imageUrl
            },{
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                },
              })
              .then(response => {
                getUserComments()
                setComment("")
                setImageUrl("")
                setEditId(null)
              })
              .catch(error => console.log(error));
        }
    };
    return (
        <>
            <p className='comment-form'>This space is for you to add notes to track your progress or reminders of the choreos learnt in class</p>
            <p className='comment-form__subheader'>WRITE YOUR NOTE</p>
            <div className='comment-form__wrpr'>
              <input className='comment-form__text' type="text" ref = {commentRef} value={comment} placeholder="Write a note for yourself" onChange={(e) => {setComment(e.target.value)}}/>
              <input className='comment-form__url' type="text" value={imageUrl} placeholder="Upload a url form an image" onChange={(e) => {setImageUrl(e.target.value)}}/>
              <button className='comment-form__btn' type="submit" onClick={ onSubmitHandler}>{ !editId ? "POST COMMENT" : "Edit Comment" }</button>
            </div>
        </>
    )
}

export default CommentForm;