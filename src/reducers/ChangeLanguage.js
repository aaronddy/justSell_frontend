export const CHANGE_ENGLISH = "CHANGE_ENGLISH";
export const CHANGE_KOREAN = "CHANGE_KOREAN";

export const changeEnglish = () => ({
  type: CHANGE_ENGLISH
});
export const changeKorean = () => ({
  type: CHANGE_KOREAN
});

export const initialState = {
  title: "저스트셀에 오신 걸 환영합니다",
  idPlaceholder: "아이디를 입력하세요",
  pwPlaceholder: "비밀번호를 입력하세요",
  save: "ID저장",
  find: "ID/비밀번호찾기",
  login: "로그인",
  signup: "회원가입",
  bookMark: "즐겨찾기",
  footer: "저스트셀 / support@equality.co.kr / T. 1522-1522"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ENGLISH:
      return {
        title: "Welcom to JustSell",
        idPlaceholder: "Enter your ID",
        pwPlaceholder: "Enter your Password",
        save: "SAVE ID",
        find: "find ID/Password",
        login: "LOGIN",
        signup: "Signup",
        bookMark: "BookMark",
        footer: "JustSell / support@equality.co.kr / T. 1522-1522"
      };
    case CHANGE_KOREAN:
      return {
        title: "저스트셀에 오신 걸 환영합니다",
        idPlaceholder: "아이디를 입력하세요",
        pwPlaceholder: "비밀번호를 입력하세요",
        save: "ID저장",
        find: "ID/비밀번호찾기",
        login: "로그인",
        signup: "회원가입",
        bookMark: "즐겨찾기",
        footer: "저스트셀 / support@equality.co.kr / T. 1522-1522"
      };
    default:
      return state;
  }
};

export default reducer;
