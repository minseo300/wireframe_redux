const SET_MEMBER='member/SET_MEMBER';
const MANAGE_SURVEY='member/MANAGE_SURVEY';
const GO_COMMUNITY='member/GO_COMMUNITY';

//액션 생성 함수
export function setMember(data){
    console.log("header.js-data",data);
    console.log('request');
    return{
        type:SET_MEMBER
        //payload:request
    }
}

export function manageSurvey(data){
    console.log("header.js-data",data);
    console.log('request');
    return{
        type:MANAGE_SURVEY
        //payload:request
    }
}

export function goCommunity(data){
    console.log("header.js-data",data);
    console.log('request');
    return{
        type:GO_COMMUNITY
        //payload:request
    }
}

//모듈 초기 상태
const initialState={
    name:'guest',
    accessToken:'none',
    memberId:0,
    //member:null
};

// 리듀서
export default function header(state=initialState,action){
    switch(action.type){
        case SET_MEMBER:
            console.log('SET_MEMBER');
            alert('LOGIN');
            return{
                name:'member1',
                memberId:1,
                accessToken:'safewfewfawef',
                //member: member
            };
        case MANAGE_SURVEY:
            alert('GO SURVEY MANAGEMENT');
            return{
                name:'member1',
                memberId:1,
                accessToken:'safewfewfawef'
            };

        case GO_COMMUNITY:
            alert('GO COMMUNITY');
            return{
                name:'member1',
                memberId:1,
                accessToken:'safewfewfawef'
            };
        
        default:
            return state;
    }
}