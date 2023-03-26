import React from 'react';

const MainContent = ({PageName , Desinger , OWNER}) => {
    return (
      <main>
        {PageName}
<br/>

       Disinged by {Desinger}
       <br/>
       Owner is {OWNER}
      </main>
    );
}

export default MainContent;
