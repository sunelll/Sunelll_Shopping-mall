let auth = (req, res, next) => {

    //인증 처리를 하는 곳.
    //1. 클라이언트 쿠키에서 토큰을 가져옵니다.

    let token = req.cookies.x_auth
    
    //2. 토큰을 복호화한다음에 같은 키를 가진 유저를 찾는다.
    
    //3. 유저가 있으면 인증 OK / 유저가 없으면 인증 NO


}

module.exports = { auth };