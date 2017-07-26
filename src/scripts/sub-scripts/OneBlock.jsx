import React from 'react';

import itemBgSrc from '../../images/itemBg.jpg';//react中引入图片的方式
import theData from '../../datas/dataExample.js';//引入数据的方式

class OneBlock extends React.Component {

    render() {
        return <div className="sub">
	        OneBlock
	        <img src={itemBgSrc} />
	        {theData[1].name}
        </div>;
    }
}

export default OneBlock;