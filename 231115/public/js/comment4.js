// 댓글을 추가하는 함수
function addComment() {
    var commentInput = document.getElementById('comment-input');
    var commentList = document.getElementById('comment-list');

    // 입력된 댓글 내용 가져오기
    var commentText = commentInput.value;

    // 댓글이 비어있는지 확인
    if (commentText === '') {
        alert('댓글을 입력해주세요.');
        return;
    }

    // 새로운 댓글 요소 생성
    var newComment = document.createElement('div');
    newComment.innerText = commentText;

    // 새로운 댓글을 댓글 목록에 추가
    commentList.appendChild(newComment);

    // 댓글 입력창 초기화
    commentInput.value = '';
}
