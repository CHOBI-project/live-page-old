import { useAppSelector } from "../redux/store"
import { v4 as uuidv4 } from 'uuid';

function CommentDisp() {
    
    const getCommentedArr = useAppSelector((state) => state.commented);

    return (
        <div className="commentBox">
            {getCommentedArr.map((com) => {
                const top = (Math.random() * 85 + 5) + "%";
                const commentStyle = { top: top, left: -10 + "%" }
                return (
                    <span className="comment" style={commentStyle} key={uuidv4()}>{com}</span>
                )}
            )};
        </div>
    )
}
export default CommentDisp;