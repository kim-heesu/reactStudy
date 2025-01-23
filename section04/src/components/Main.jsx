const Main = () => {
  const user = {
    name:"김희수",
    isLogin: true
  }
    return (
      <>
        {user.isLogin ? (
          <div>로그아웃</div>
        ) : (
          <div> 로그인</div>
        )}
      </>
    )
  }


  export default Main