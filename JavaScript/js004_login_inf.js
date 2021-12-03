let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대전화 : '010-2323-0000',
    이메일 : 'jjang@gmail.com',
    가입일 : '2020-06-12',
    접속지 : '125.242.161.000',
},{
    아이디 : 'zzang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대전화 : '010-6831-0200',
    이메일 : 'zzang@gmail.com',
    가입일 : '2015-12-12',
    접속지 : '125.242.161.000',
},{
    아이디 : 'hhang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대전화 : '010-2983-0030',
    이메일 : 'hhang@gmail.com',
    가입일 : '2021-11-12',
    접속지 : '125.242.161.000',
},{
    아이디 : 'gogossing',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대전화 : '010-6159-3277',
    이메일 : 'gogossing@gmail.com',
    가입일 : '2021-01-12',
    접속지 : '125.242.161.000',
}]



// 남자인 사람
회원정보.filter(el => el.성별 === '남');


// 남자이면서, 2021년에 가입한 사람
회원정보.filter(el => (el.성별 === '남')&&(el.가입일.split("-")[0] === '2021'));

// 아이디가 jjang인 사람
회원정보.filter(el => el.아이디 === 'jjang');

회원정보.find(el => el.아이디 === 'jjang');
/// filter와 find의 차이. filter는 끝까지 찾고, find는 찾으면 끝낸다.


///////////////////////////////////////

let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : '일상',
  }, {
    id : 2,
    title : 'title2',
    content : 'content2',
    section : '취미',
  }, {
    id : 3,
    title : 'title3',
    content : 'content3',
    section : '개발',
  }, {
    id : 4,
    title : 'title4',
    content : 'content4',
    section : '개발',
  }];


// 글 100개 중
// 25개는 일상
// 25개는 취미
// 50개는 개발

let s = '개발'
let data = s? blogs.filter(b => b.section === s) : '생각하고 입력하세요.';