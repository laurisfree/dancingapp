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
            <input type="text" ref = {commentRef} value={comment} placeholder="Add a comment" onChange={(e) => {setComment(e.target.value)}}/>
            <input type="text" value={imageUrl} placeholder="Add an image" onChange={(e) => {setImageUrl(e.target.value)}}/>
            <button type="submit" onClick={ onSubmitHandler}>{ !editId ? "Post Comment" : "Edit Comment" }</button>
        </>
    )
}

export default CommentForm;