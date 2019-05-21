import React from 'react';


const MyName = ({name, age}) => {
       
    return (
        <div>
            안녕하세요! 저는 {name} 입니다!~!!! <br/>
            나이는 {age}  입니다.

        </div>
    );
};

export default MyName;